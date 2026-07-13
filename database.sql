-- ==========================================
-- University Course Registration System
-- Database Script
-- ==========================================

DROP DATABASE IF EXISTS university_db;

CREATE DATABASE university_db;

USE university_db;

-- ==========================================
-- Department Table
-- ==========================================

CREATE TABLE departments (
    department_id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

INSERT INTO departments (department_name) VALUES
('Computer Science'),
('Artificial Intelligence & Data Science'),
('Information Technology'),
('Electronics');

-- ==========================================
-- Faculty Table
-- ==========================================

CREATE TABLE faculty (
    faculty_id INT AUTO_INCREMENT PRIMARY KEY,
    faculty_name VARCHAR(100) NOT NULL,
    department_id INT,
    faculty_type ENUM('Permanent','Visiting'),
    FOREIGN KEY (department_id)
    REFERENCES departments(department_id)
);

INSERT INTO faculty (faculty_name, department_id, faculty_type) VALUES
('Dr. Sharma',1,'Permanent'),
('Dr. Singh',2,'Permanent'),
('Dr. Mehta',3,'Visiting');

-- ==========================================
-- Student Table
-- ==========================================

CREATE TABLE students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    department_id INT,
    year INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(department_id)
);

INSERT INTO students (student_name, department_id, year) VALUES
('Aarti',2,2),
('Rahul',1,3),
('Neha',3,1);

-- ==========================================
-- Course Table
-- ==========================================

CREATE TABLE courses (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    credits INT,
    faculty_id INT,
    FOREIGN KEY (faculty_id)
    REFERENCES faculty(faculty_id)
);

INSERT INTO courses (course_name, credits, faculty_id) VALUES
('Database Management System',4,1),
('Operating System',3,2),
('Machine Learning',4,3);

-- ==========================================
-- Enrollment Table
-- ==========================================

CREATE TABLE enrollments (
    enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    course_id INT,
    semester VARCHAR(20),
    grade VARCHAR(5),
    FOREIGN KEY (student_id)
    REFERENCES students(student_id),
    FOREIGN KEY (course_id)
    REFERENCES courses(course_id)
);

INSERT INTO enrollments
(student_id, course_id, semester, grade)
VALUES
(1,1,'Semester 4','A'),
(2,2,'Semester 5','B+'),
(3,3,'Semester 2','A+');

-- ==========================================
-- Verify Tables
-- ==========================================

SELECT * FROM departments;
SELECT * FROM faculty;
SELECT * FROM students;
SELECT * FROM courses;
SELECT * FROM enrollments;