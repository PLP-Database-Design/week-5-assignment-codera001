require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const mysql = require('mysql2');

// Create an Express app
const app = express();
const port = process.env.PORT || 3000;

// Configure the MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Test database connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Set up routes for the API

// 1. Retrieve all patients
app.get('/patients', (req, res) => {
  const sql = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving patients');
    }
    res.json(results);
  });
});

// 2. Retrieve all providers
app.get('/providers', (req, res) => {
  const sql = 'SELECT first_name, last_name, provider_specialty FROM providers';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving providers');
    }
    res.json(results);
  });
});

// 3. Filter patients by First Name
app.get('/patients/name/:first_name', (req, res) => {
  const { first_name } = req.params;
  const sql = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?';
  db.query(sql, [first_name], (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving patients');
    }
    res.json(results);
  });
});

// 4. Retrieve all providers by their specialty
app.get('/providers/specialty/:specialty', (req, res) => {
  const { specialty } = req.params;
  const sql = 'SELECT first_name, last_name, provider_specialty FROM providers WHERE provider_specialty = ?';
  db.query(sql, [specialty], (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving providers');
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
