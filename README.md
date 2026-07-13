# 🎓 University Course Registration System

A web-based **University Course Registration System** developed using **Node.js, Express.js, EJS, MySQL, HTML, CSS, and JavaScript**. This project provides a complete solution for managing students, courses, faculty, departments, and course registrations with CRUD operations.

---

## 🚀 Features

- 👨‍🎓 Student Management (Add, View, Update, Delete)
- 📚 Course Management (Add, View, Update, Delete)
- 👨‍🏫 Faculty Management (Add, View, Update, Delete)
- 🏢 Department Management (Add, View, Update, Delete)
- 📝 Course Registration (Enrollment)
- 🔗 MySQL Database Connectivity
- 🌐 REST-style Routing
- 💻 Responsive User Interface

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- EJS
- MySQL
- HTML5
- CSS3
- JavaScript
- dotenv

---

## 📂 Project Structure

```
University_Course_Registration_System/
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── students.ejs
│   ├── addStudent.ejs
│   ├── editStudent.ejs
│   ├── courses.ejs
│   ├── addCourse.ejs
│   ├── editCourse.ejs
│   ├── faculty.ejs
│   ├── addFaculty.ejs
│   ├── editFaculty.ejs
│   ├── departments.ejs
│   ├── addDepartment.ejs
│   ├── editDepartment.ejs
│   ├── enrollments.ejs
│   └── addEnrollment.ejs
│
├── public/
├── db.js
├── server.js
├── package.json
├── database.sql
├── .env
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/University-Course-Registration-System.git
```

Replace **YOUR_USERNAME** with your GitHub username.

---

### 2️⃣ Open Project Folder

```bash
cd University-Course-Registration-System
```

---

### 3️⃣ Install Dependencies

```bash
npm install
```

---

## 🗄️ Database Setup

1. Open **MySQL Workbench**.
2. Create a database named:

```sql
university_db
```

3. Open the **database.sql** file.
4. Execute all SQL queries.
5. Verify that all tables are created successfully.

---

## 🔐 Environment Variables

Create a **`.env`** file in the project root and add the following:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=university_db
```

Replace **your_mysql_password** with your own MySQL password.

> ⚠️ Never upload the `.env` file to GitHub.

---

## ▶️ Run the Project

Start the server:

```bash
node server.js
```

or

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 📋 Modules

- Student Management
- Course Management
- Faculty Management
- Department Management
- Course Registration (Enrollment)

---

## 🗃️ Database Tables

- Students
- Courses
- Faculty
- Departments
- Enrollments

---

## 📌 CRUD Operations

- Create
- Read
- Update
- Delete

implemented for all major modules.

---

## 📸 Project Screens

- Dashboard
- Student Management
- Course Management
- Faculty Management
- Department Management
- Course Registration

---

## 👩‍💻 Developed By

**Aarti Keswani**

B.Tech – Artificial Intelligence & Data Science

---

## 📜 License

This project is developed for educational and learning purposes only.