-- Create Patients Table
CREATE TABLE IF NOT EXISTS patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    gender ENUM('Male', 'Female'),
    language VARCHAR(50)
);

-- Create Providers Table
CREATE TABLE IF NOT EXISTS providers (
    provider_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    provider_specialty VARCHAR(100),
    email VARCHAR(100),
    phone_number VARCHAR(20)
);

-- Insert Sample Data into Patients Table
INSERT INTO patients (first_name, last_name, date_of_birth, gender, language)
VALUES 
('John', 'Doe', '1980-11-15', 'Male', 'English'),
('Jane', 'Smith', '1990-06-25', 'Female', 'Spanish'),
('Alice', 'Johnson', '1985-03-12', 'Female', 'English'),
('Bob', 'Brown', '1978-09-10', 'Male', 'French');

-- Insert Sample Data into Providers Table
INSERT INTO providers (first_name, last_name, provider_specialty, email, phone_number)
VALUES 
('Dr. Sarah', 'Lee', 'Cardiology', 'sarah.lee@hospital.com', '123-456-7890'),
('Dr. Michael', 'Wong', 'Pediatrics', 'michael.wong@hospital.com', '987-654-3210'),
('Dr. Emily', 'Davis', 'Neurology', 'emily.davis@hospital.com', NULL),
('Dr. John', 'Smith', 'Pediatrics', NULL, '555-555-5555');
