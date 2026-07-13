const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const db = require("./db");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ================= HOME =================

app.get("/", (req, res) => {
    res.render("index");
});

// ================= STUDENTS =================

// Student List

app.get("/students",(req,res)=>{

const sql=`
SELECT students.*,
departments.department_name
FROM students
JOIN departments
ON students.department_id=departments.department_id
`;

db.query(sql,(err,result)=>{

if(err) throw err;

res.render("students",{

students:result

});

});

});


// Add Page

app.get("/students/add",(req,res)=>{

res.render("addStudent");

});


// Insert Student

app.post("/students/add",(req,res)=>{

const{

student_name,

department_id,

year

}=req.body;

const sql=`
INSERT INTO students
(student_name,department_id,year)
VALUES(?,?,?)
`;

db.query(sql,

[student_name,department_id,year],

(err)=>{

if(err) throw err;

res.redirect("/students");

});

});


// Edit Page

app.get("/students/edit/:id",(req,res)=>{

db.query(

"SELECT * FROM students WHERE student_id=?",

[req.params.id],

(err,result)=>{

if(err) throw err;

res.render("editStudent",{

student:result[0]

});

});

});


// Update Student

app.post("/students/update/:id",(req,res)=>{

const{

student_name,

department_id,

year

}=req.body;

const sql=`
UPDATE students
SET
student_name=?,
department_id=?,
year=?
WHERE student_id=?
`;

db.query(sql,

[
student_name,
department_id,
year,
req.params.id
],

(err)=>{

if(err) throw err;

res.redirect("/students");

});

});


// Delete Student

app.post("/students/delete/:id",(req,res)=>{

db.query(

"DELETE FROM students WHERE student_id=?",

[req.params.id],

(err)=>{

if(err) throw err;

res.redirect("/students");

});

});

// ================= COURSES =================

// Course List

app.get("/courses",(req,res)=>{

const sql=`
SELECT courses.*,
faculty.faculty_name
FROM courses
JOIN faculty
ON courses.faculty_id=faculty.faculty_id
`;

db.query(sql,(err,result)=>{

if(err) throw err;

res.render("courses",{

courses:result

});

});

});


// Add Page

app.get("/courses/add",(req,res)=>{

res.render("addCourse");

});


// Insert Course

app.post("/courses/add",(req,res)=>{

const{

course_name,

credits,

faculty_id

}=req.body;

const sql=`
INSERT INTO courses
(course_name,credits,faculty_id)
VALUES(?,?,?)
`;

db.query(sql,

[course_name,credits,faculty_id],

(err)=>{

if(err) throw err;

res.redirect("/courses");

});

});


// Edit Page

app.get("/courses/edit/:id",(req,res)=>{

db.query(

"SELECT * FROM courses WHERE course_id=?",

[req.params.id],

(err,result)=>{

if(err) throw err;

res.render("editCourse",{

course:result[0]

});

});

});


// Update

app.post("/courses/update/:id",(req,res)=>{

const{

course_name,

credits,

faculty_id

}=req.body;

const sql=`
UPDATE courses
SET
course_name=?,
credits=?,
faculty_id=?
WHERE course_id=?
`;

db.query(sql,

[
course_name,
credits,
faculty_id,
req.params.id
],

(err)=>{

if(err) throw err;

res.redirect("/courses");

});

});


// Delete

app.post("/courses/delete/:id",(req,res)=>{

db.query(

"DELETE FROM courses WHERE course_id=?",

[req.params.id],

(err)=>{

if(err) throw err;

res.redirect("/courses");

});

});

// ================= FACULTY =================

// Faculty List
app.get("/faculty",(req,res)=>{

const sql=`
SELECT faculty.*,
departments.department_name
FROM faculty
JOIN departments
ON faculty.department_id=departments.department_id
`;

db.query(sql,(err,result)=>{

if(err) throw err;

res.render("faculty",{

faculty:result

});

});

});

// Add Page
app.get("/faculty/add",(req,res)=>{

res.render("addFaculty");

});

// Insert
app.post("/faculty/add",(req,res)=>{

const{

faculty_name,
department_id,
faculty_type

}=req.body;

const sql=`
INSERT INTO faculty
(faculty_name,department_id,faculty_type)
VALUES(?,?,?)
`;

db.query(sql,

[faculty_name,department_id,faculty_type],

(err)=>{

if(err) throw err;

res.redirect("/faculty");

});

});

// Edit Page
app.get("/faculty/edit/:id",(req,res)=>{

db.query(

"SELECT * FROM faculty WHERE faculty_id=?",

[req.params.id],

(err,result)=>{

if(err) throw err;

res.render("editFaculty",{

faculty:result[0]

});

});

});

// Update
app.post("/faculty/update/:id",(req,res)=>{

const{

faculty_name,
department_id,
faculty_type

}=req.body;

const sql=`
UPDATE faculty
SET
faculty_name=?,
department_id=?,
faculty_type=?
WHERE faculty_id=?
`;

db.query(sql,

[
faculty_name,
department_id,
faculty_type,
req.params.id
],

(err)=>{

if(err) throw err;

res.redirect("/faculty");

});

});

// Delete
app.post("/faculty/delete/:id",(req,res)=>{

db.query(

"DELETE FROM faculty WHERE faculty_id=?",

[req.params.id],

(err)=>{

if(err) throw err;

res.redirect("/faculty");

});

});

// ================= DEPARTMENTS =================

// Department List
app.get("/departments",(req,res)=>{

db.query("SELECT * FROM departments",(err,result)=>{

if(err) throw err;

res.render("departments",{

departments:result

});

});

});

// Add Page
app.get("/departments/add",(req,res)=>{

res.render("addDepartment");

});

// Insert
app.post("/departments/add",(req,res)=>{

const {department_name}=req.body;

db.query(

"INSERT INTO departments(department_name) VALUES(?)",

[department_name],

(err)=>{

if(err) throw err;

res.redirect("/departments");

});

});

// Edit
app.get("/departments/edit/:id",(req,res)=>{

db.query(

"SELECT * FROM departments WHERE department_id=?",

[req.params.id],

(err,result)=>{

if(err) throw err;

res.render("editDepartment",{

department:result[0]

});

});

});

// Update
app.post("/departments/update/:id",(req,res)=>{

const {department_name}=req.body;

db.query(

"UPDATE departments SET department_name=? WHERE department_id=?",

[department_name,req.params.id],

(err)=>{

if(err) throw err;

res.redirect("/departments");

});

});

// Delete
app.post("/departments/delete/:id",(req,res)=>{

db.query(

"DELETE FROM departments WHERE department_id=?",

[req.params.id],

(err)=>{

if(err) throw err;

res.redirect("/departments");

});

});

// ================= ENROLLMENTS =================

// Enrollment List
app.get("/enrollments",(req,res)=>{

const sql=`
SELECT
enrollments.*,
students.student_name,
courses.course_name
FROM enrollments
JOIN students
ON students.student_id=enrollments.student_id
JOIN courses
ON courses.course_id=enrollments.course_id
`;

db.query(sql,(err,result)=>{

if(err) throw err;

res.render("enrollments",{

enrollments:result

});

});

});


// Add Page
app.get("/enrollments/add",(req,res)=>{

db.query("SELECT * FROM students",(err,students)=>{

if(err) throw err;

db.query("SELECT * FROM courses",(err,courses)=>{

if(err) throw err;

res.render("addEnrollment",{

students,
courses

});

});

});

});


// Register
app.post("/enrollments/add",(req,res)=>{

const{

student_id,
course_id,
semester,
grade

}=req.body;

const sql=`
INSERT INTO enrollments
(student_id,course_id,semester,grade)
VALUES(?,?,?,?)
`;

db.query(sql,

[
student_id,
course_id,
semester,
grade
],

(err)=>{

if(err) throw err;

res.redirect("/enrollments");

});

});


// Delete
app.post("/enrollments/delete/:id",(req,res)=>{

db.query(

"DELETE FROM enrollments WHERE enrollment_id=?",

[req.params.id],

(err)=>{

if(err) throw err;

res.redirect("/enrollments");

});

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});