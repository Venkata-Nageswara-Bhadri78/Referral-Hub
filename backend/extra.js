// // SQL Importing and connecting to file credentials.db
// const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database('./credentials.db', sqlite3.OPEN_READWRITE, (err) => {
//     if(err){
//         return console.log(err.message);
//     }
// })

// // Express, coms Importing and Utilizing here
// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json())

// const PORT = process.env.PORT || 4000;

// // Password Hashing using bcrypt
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// // -------------- REFFERAL SEEKERS TABLES AND INFORMATION ----------------------

// // // Creating the Table for Referral Seekers
// // const create_seeker_table = `CREATE TABLE IF NOT EXISTS referral_seekers (
// //     seeker_id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     seeker_name TEXT,
// //     seeker_email TEXT UNIQUE,
// //     seeker_password TEXT
// // );`
// // db.run(create_seeker_table, [], (err) => {
// //     if(err){
// //         return console.log(err);
// //     }
// // })

// // // Insert Data Into Tables
// // const insert_into_seekers = `insert into referral_seekers (seeker_id, seeker_name, seeker_email, seeker_password) values(?, ?, ?, ?)`;

// // db.run(insert_into_seekers, [1000, "Example", "example@gmail.com", "1234567890"], (err) => {
// //     if(err){
// //         return console.log(err);
// //     }
// // });

// // // Printing the Data Inside the Table
// // const select_seekers = `select * from referral_seekers;`
// // db.all(select_seekers, [], (err, row) => {
// //     if(err){
// //         return console.log(err);
// //     }
// //     console.log(row)
// // })


// // ----------------------------- REFERRAL PROVIDERS AND INFORMATION ------------------------

// // // Creating the Table for Referral Providers
// // const create_providers_table = `CREATE TABLE IF NOT EXISTS referral_providers (
// //     provider_id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     provider_name TEXT NOT NULL,
// //     provider_email TEXT UNIQUE NOT NULL,
// //     provider_password TEXT NOT NULL,
// //     provider_company TEXT NOT NULL,
// //     provider_designation TEXT NOT NULL,
// //     provider_experience TEXT NOT NULL
// // );`
// // db.run(create_providers_table, [], (err) => {
// //     if(err){
// //         return console.log(err);
// //     }
// // })

// // const insert_pt = `INSERT INTO referral_providers (
// //      provider_name, provider_email, provider_password, provider_company, provider_designation, provider_experience
// // ) VALUES ('shambu', 's@gmail.com', '12345', 'xyzCompany', 'sde', '1+')`

// // db.run(insert_pt, [], (err) => {
// //     if(err){
// //         return console.log(err.message);
// //     }
// //     return console.log("Insert Sucess");
// // })

// // db.run("select * from referral_providers", [], (err, row) => {
// //     if(err){
// //         return console.log(err);
// //     }
// //     return console.log(row);
// // })

// // const added_referrals_table = `CREATE TABLE IF NOT EXISTS provided_referrals(
// //     refer_id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     provider_id INTEGER NOT NULL,
// //     refer_job_title TEXT NOT NULL,
// //     refer_company TEXT NOT NULL,
// //     refer_location TEXT NOT NULL,
// //     refer_type TEXT NOT NULL,
// //     refer_salary TEXT NOT NULL,
// //     refer_postedOn DATE NOT NULL,
// //     refer_expiresOn DATE NOT NULL,
// //     refer_description TEXT NOT NULL,
// //     refer_requirements TEXT NOT NULL,
// //     refer_skills TEXT NOT NULL,
// //     refer_status TEXT NOT NULL
// //     )`;

// // // Insert Data Into Tables
// // const insertintop = `INSERT INTO provided_referrals (
// //     refer_id, provider_id, refer_job_title, refer_company, refer_location, refer_type, refer_salary, refer_postedOn, refer_expiresOn, refer_description, refer_requirements, refer_skills, refer_status
// // ) VALUES (
// //     10000, 1000, 'frontend', 'mb', 'bengaluru', 'fulltime', '30LPA', '2025-09-12', '2025-09-20', 'Example Desc', 'Example Requirements', '["Java", "DSA"]', 'open'
// // )`;

// // db.run(insertintop, [], (err) => {
// //     if(err){
// //         return console.log(err.message);
// //     }
// //     console.log("Insert Sucess");
// // })

// // app.post('/add-referral', (req, res) => {
// //     const {
// //         employeeId, jobTitle, companyName, location, postedOn, employmentType, salary, expireDate,
// //         description, requirements, skills, status
// //     } = req.body;

// //     console.log({
// //         employeeId,
// //         jobTitle,
// //         companyName,
// //         location,
// //         postedOn,
// //         employmentType,
// //         salary,
// //         expireDate,
// //         description,
// //         requirements,
// //         skills,
// //         status,
// //     });
// //     const insert_query = `INSERT INTO provided_referrals (
// //         refer_id, provider_id, refer_job_title, refer_company, refer_location, refer_type, refer_salary, refer_postedOn, refer_expiresOn, refer_description, refer_requirements, refer_skills, refer_status
// //     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
// //      db.run(insert_query, [employeeId, jobTitle, companyName, location, postedOn, employmentType, salary, expireDate, description, requirements, skills, status], (err) => {
// //         if(err){
// //             return console.log(err.message);
// //         }
// //         console.log("Referral Details Added Sucessfully")
// //      })
// //     res.send({message: "Data Transfer to DB"});
// // })



// // ------------------------- GETTING THE DATA FROM FRONTEND AND UTILIZING HERE ---------------

// // app.post('/signup', async (req, res) => {
// //     // {referralType: referralType, userFullName: userFullName, userEmail: userEmail, userPassword: userPassword})
// //     const { referralType, userFullName, userEmail, userPassword } = req.body;

// //     const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

// //     let insert_query;
// //     if(referralType == 'seeker'){
// //         insert_query = `insert into referral_seekers (seeker_name, seeker_email, seeker_password) values(?, ?, ?)`;
// //     }
// //     else{
// //         insert_query = `insert into referral_providers (provider_name, provider_email, provider_password) values(?, ?, ?)`;
// //     }
// //     db.run(insert_query, [userFullName, userEmail, hashedPassword], (err) => {
// //         if(err){
// //             console.log(err.message);
// //             return res.send({success: false, message: "Error in Signup of User"})
// //         }

// //         res.send({success: true, message: "User Sucessfully Signed Up"})
// //     })
// // })

// // app.post('/login', (req, res) => {
// //     const {referralType, userEmail, userPassword} = req.body;

// //     let select_query = "";
// //     if(referralType == "seeker"){
// //         select_query = 'select * from referral_seekers where seeker_email = ?';
// //     }
// //     else{
// //         select_query = 'select * from referral_providers where provider_email = ?';
// //     }
// //     db.get(select_query, [userEmail], async (err, row) => {
// //         if(err){
// //             console.log(err.message)
// //             return res.send({login: false, message: "Failed to Login"})
// //         }
// //         if(!row){
// //             return res.send({login:false, message: "User Not Found"});
// //         }
// //         const hashedPassword = referralType === 'seeker' ? row.seeker_password : row.provider_password;
// //         const passwordCheck = await bcrypt.compare(userPassword, hashedPassword);
// //         if(passwordCheck){
// //             const user_full_name = referralType === 'seeker' ? row.seeker_name : row.provider_name;
// //             const user_email = referralType === 'seeker' ? row.seeker_email : row.provider_email;
// //             return res.send({login: true, message: "User Sucessfull Login", userFullName: user_full_name, userEmail: user_email});

// //         }

// //         return res.send({login: false, message: "Incorrect Password"});
// //     })
// // })

// // ---------------------- ADD REFERRAL ----------------

// db.run('drop table IF EXISTS referral_providers', [], (err) => {
//     if(err){
//         return console.log(err.message);
//     }
//     console.log("Deleted");
// })

// // ---------------------- PORT LISTENING --------------
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// })


-----------------------------------------------------------------------------------------------------------------------------

// // SQL Importing and connecting to file credentials.db
// const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database('./credentials.db', sqlite3.OPEN_READWRITE, (err) => {
//     if(err){
//         return console.log(err.message);
//     }
// })

// // Express, coms Importing and Utilizing here
// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json())

// const PORT = process.env.PORT || 4000;

// // Password Hashing using bcrypt
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// // -------------- REFFERAL SEEKERS TABLES AND INFORMATION ----------------------

// // Creating the Table for Referral Seekers
// const create_seeker_table = `CREATE TABLE IF NOT EXISTS referral_seekers (
//     seeker_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     seeker_name TEXT,
//     seeker_email TEXT UNIQUE,
//     seeker_password TEXT
// );`
// db.run(create_seeker_table, [], (err) => {
//     if(err){
//         return console.log(err);
//     }
// })

// // // Insert Data Into Tables
// // const insert_into_seekers = `insert into referral_seekers (seeker_id, seeker_name, seeker_email, seeker_password) values(?, ?, ?, ?)`;

// // db.run(insert_into_seekers, [1000, "Example", "example@gmail.com", "1234567890"], (err) => {
// //     if(err){
// //         return console.log(err);
// //     }
// // });

// // Printing the Data Inside the Table
// const select_seekers = `select * from referral_seekers;`
// db.all(select_seekers, [], (err, row) => {
//     if(err){
//         return console.log(err);
//     }
//     console.log(row)
// })


// // ----------------------------- REFERRAL PROVIDERS AND INFORMATION ------------------------

// // Creating the Table for Referral Providers
// const create_providers_table = `CREATE TABLE IF NOT EXISTS referral_providers (
//     provider_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     provider_name TEXT NOT NULL,
//     provider_email TEXT UNIQUE NOT NULL,
//     provider_password TEXT NOT NULL,
//     provider_company TEXT NOT NULL,
//     provider_designation TEXT NOT NULL,
//     provider_experience TEXT NOT NULL
// );`
// db.run(create_providers_table, [], (err) => {
//     if(err){
//         return console.log(err);
//     }
// })

// // const insert_pt = `INSERT INTO referral_providers (
// //      provider_name, provider_email, provider_password, provider_company, provider_designation, provider_experience
// // ) VALUES ('shambu', 's@gmail.com', '12345', 'xyzCompany', 'sde', '1+')`

// // db.run(insert_pt, [], (err) => {
// //     if(err){
// //         return console.log(err.message);
// //     }
// //     return console.log("Insert Sucess");
// // })

// // db.all('select * from referral_providers', [], (err, row) => {
// //     if (err) {
// //         return console.error(err.message);
// //     }
// //     console.log(row);
// // })

// // ----------------->> Provided Referrals Table Data and Information

// const added_referrals_table = `CREATE TABLE IF NOT EXISTS provided_referrals(
//     refer_id INTEGER PRIMARY KEY AUTOINCREMENT,
//     provider_id INTEGER NOT NULL,
//     refer_job_title TEXT NOT NULL,
//     refer_company TEXT NOT NULL,
//     refer_location TEXT NOT NULL,
//     refer_type TEXT NOT NULL,
//     refer_salary TEXT NOT NULL,
//     refer_postedOn DATE NOT NULL,
//     refer_expiresOn DATE NOT NULL,
//     refer_description TEXT NOT NULL,
//     refer_requirements TEXT NOT NULL,
//     refer_skills TEXT NOT NULL,
//     refer_status TEXT NOT NULL
//     )`;
// db.run(added_referrals_table, [], (err) => {
//     if(err){
//         return console.log(err);
//     }
//     console.log("sucess Add")
// })

// // // Insert Data Into Tables
// // const insertintop = `INSERT INTO provided_referrals (
// //     refer_id, provider_id, refer_job_title, refer_company, refer_location, refer_type, refer_salary, refer_postedOn, refer_expiresOn, refer_description, refer_requirements, refer_skills, refer_status
// // ) VALUES (
// //     10000, 1000, 'frontend', 'mb', 'bengaluru', 'fulltime', '30LPA', '2025-09-12', '2025-09-20', 'Example Desc', 'Example Requirements', '["Java", "DSA"]', 'open'
// // )`;

// // db.run(insertintop, [], (err) => {
// //     if(err){
// //         return console.log(err.message);
// //     }
// //     console.log("Insert Sucess");
// // })

// // db.all('select * from provided_referrals', [], (err, rows) => {
// //     if (err) {
// //         return console.error(err.message);
// //     }
// //     console.log(rows);
// // })



// app.post('/add-referral', (req, res) => {
//     const {
//         employeeId, jobTitle, companyName, location, postedOn, employmentType, salary, expireDate,
//         description, requirements, skills, status
//     } = req.body;

//     console.log({
//         employeeId,
//         jobTitle,
//         companyName,
//         location,
//         postedOn,
//         employmentType,
//         salary,
//         expireDate,
//         description,
//         requirements,
//         skills,
//         status,
//     });
//     const insert_query = `INSERT INTO provided_referrals (
//         provider_id, refer_job_title, refer_company, refer_location, refer_postedOn, refer_type, refer_salary, refer_expiresOn, refer_description, refer_requirements, refer_skills, refer_status
//     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//      db.run(insert_query, [employeeId, jobTitle, companyName, location, postedOn, employmentType, salary, expireDate, description, requirements, skills, status], (err) => {
//         if(err){
//             return console.log(err.message);
//         }
//         console.log("Referral Details Added Sucessfully")
//      })
//     res.send({message: "Data Transfer to DB"});
// })

// // -------------------------------------- LOGIN AND SIGNUP FORMS AND INFORMATION ----------------------------

// // app.post('/signup', async (req, res) => {
// //     // {referralType: referralType, userFullName: userFullName, userEmail: userEmail, userPassword: userPassword})
// //     const { referralType, userFullName, userEmail, userPassword } = req.body;

// //     const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

// //     let insert_query;
// //     if(referralType == 'seeker'){
// //         insert_query = `insert into referral_seekers (seeker_name, seeker_email, seeker_password) values(?, ?, ?)`;
// //     }
// //     else{
// //         insert_query = `insert into referral_providers (provider_name, provider_email, provider_password) values(?, ?, ?)`;
// //     }
// //     db.run(insert_query, [userFullName, userEmail, hashedPassword], (err) => {
// //         if(err){
// //             console.log(err.message);
// //             return res.send({success: false, message: "Error in Signup of User"})
// //         }

// //         res.send({success: true, message: "User Sucessfully Signed Up"})
// //     })
// // })

// // app.post('/login', (req, res) => {
// //     const {referralType, userEmail, userPassword} = req.body;

// //     let select_query = "";
// //     if(referralType == "seeker"){
// //         select_query = 'select * from referral_seekers where seeker_email = ?';
// //     }
// //     else{
// //         select_query = 'select * from referral_providers where provider_email = ?';
// //     }
// //     db.get(select_query, [userEmail], async (err, row) => {
// //         if(err){
// //             console.log(err.message)
// //             return res.send({login: false, message: "Failed to Login"})
// //         }
// //         if(!row){
// //             return res.send({login:false, message: "User Not Found"});
// //         }
// //         const hashedPassword = referralType === 'seeker' ? row.seeker_password : row.provider_password;
// //         const passwordCheck = await bcrypt.compare(userPassword, hashedPassword);
// //         if(passwordCheck){
// //             const user_full_name = referralType === 'seeker' ? row.seeker_name : row.provider_name;
// //             const user_email = referralType === 'seeker' ? row.seeker_email : row.provider_email;
// //             return res.send({login: true, message: "User Sucessfull Login", userFullName: user_full_name, userEmail: user_email});

// //         }

// //         return res.send({login: false, message: "Incorrect Password"});
// //     })
// // })



// // ---------------------- Delete ----------------

// // // List all tables in SQLite
// // db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
// //     if (err) {
// //         return console.error(err.message);
// //     }
// //     console.log("Tables:");
// //     rows.forEach(row => {
// //         console.log(row.name);
// //     });
// // });
// // db.all('select * from provided_referrals', [], (err, row) => {
// //     if (err) {
// //         return console.error(err.message);
// //     }
// //     console.log(row);
// // })

// // ---------------------- PORT LISTENING --------------
// app.listen(PORT, () => {
//     console.log(`Server is running at http://localhost:${PORT}`);
// })