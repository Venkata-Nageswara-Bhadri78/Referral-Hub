// Express, coms Importing and Utilizing here
const express = require('express');
const cors = require('cors');
// Password Hashing using bcrypt
const bcrypt = require('bcrypt');
// SQL Importing and connecting to file credentials.db
const sqlite3 = require('sqlite3').verbose();

const saltRounds = 10;



const db = new sqlite3.Database('./credentials.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err){
        return console.log(err.message);
    }
})

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",          
        "https://referral-hub-psi.vercel.app"   
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.use(express.json())

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Backend is running ✅");
});

// -------------- REFFERAL SEEKERS TABLES AND INFORMATION ----------------------

// Creating the Table for Referral Seekers
const create_seeker_table = `CREATE TABLE IF NOT EXISTS referral_seekers (
    seeker_id INTEGER PRIMARY KEY AUTOINCREMENT,
    seeker_name TEXT,
    seeker_email TEXT UNIQUE,
    seeker_password TEXT
);`
db.run(create_seeker_table, [], (err) => {
    if(err){
        return console.log(err);
    }
})

// // Insert Data Into Tables
// const insert_into_seekers = `insert into referral_seekers (seeker_id, seeker_name, seeker_email, seeker_password) values(?, ?, ?, ?)`;

// db.run(insert_into_seekers, [1000, "Example", "example@gmail.com", "1234567890"], (err) => {
//     if(err){
//         return console.log(err);
//     }
// });

// Printing the Data Inside the Table
// const select_seekers = `select * from referral_providers;`
// db.all(select_seekers, [], (err, row) => {
//     if(err){
//         return console.log(err);
//     }
//     console.log(row)
// })



// List all tables in SQLite
// db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
//     if (err) {
//         return console.error(err.message);
//     }

//     rows.forEach(row => {
//         console.log(row.name);
//     });
// });











// db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log("Tables in DB:", rows.map(r => r.name));
//   });

// db.run("select * from Applied_Referrals", [], (err, data) => {
//     if(err){
//         return console.log(err.message)
//     }
//     console.log("data : ")
//     console.log(data);
// })













// ----------------------------- REFERRAL PROVIDERS AND INFORMATION ------------------------

// Creating the Table for Referral Providers
const create_providers_table = `CREATE TABLE IF NOT EXISTS referral_providers (
    provider_id INTEGER PRIMARY KEY AUTOINCREMENT,
    provider_name TEXT NOT NULL,
    provider_email TEXT UNIQUE NOT NULL,
    provider_password TEXT NOT NULL,
    provider_company TEXT NOT NULL,
    provider_designation TEXT NOT NULL,
    provider_experience TEXT NOT NULL
);`
db.run(create_providers_table, [], (err) => {
    if(err){
        return console.log(err);
    }
})

// const insert_pt = `INSERT INTO referral_providers (
//      provider_name, provider_email, provider_password, provider_company, provider_designation, provider_experience
// ) VALUES ('shambu', 's@gmail.com', '12345', 'xyzCompany', 'sde', '1+')`

// db.run(insert_pt, [], (err) => {
//     if(err){
//         return console.log(err.message);
//     }
//     return console.log("Insert Sucess");
// })

// db.all('select * from referral_providers', [], (err, row) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log(row);
// })

// ----------------->> Provided Referrals Table Data and Information

const added_referrals_table = `CREATE TABLE IF NOT EXISTS provided_referrals(
    refer_id INTEGER PRIMARY KEY AUTOINCREMENT,
    provider_id INTEGER NOT NULL,
    refer_job_title TEXT NOT NULL,
    refer_company TEXT NOT NULL,
    refer_location TEXT NOT NULL,
    refer_type TEXT NOT NULL,
    refer_salary TEXT NOT NULL,
    refer_postedOn DATE NOT NULL,
    refer_expiresOn DATE NOT NULL,
    refer_description TEXT NOT NULL,
    refer_requirements TEXT NOT NULL,
    refer_skills TEXT NOT NULL,
    refer_status TEXT NOT NULL
    )`;
db.run(added_referrals_table, [], (err) => {
    if(err){
        return console.log(err);
    }
})

// // Insert Data Into Tables
// const insertintop = `INSERT INTO provided_referrals (
//     refer_id, provider_id, refer_job_title, refer_company, refer_location, refer_type, refer_salary, refer_postedOn, refer_expiresOn, refer_description, refer_requirements, refer_skills, refer_status
// ) VALUES (
//     10000, 1000, 'frontend', 'mb', 'bengaluru', 'fulltime', '30LPA', '2025-09-12', '2025-09-20', 'Example Desc', 'Example Requirements', '["Java", "DSA"]', 'open'
// )`;

// db.run(insertintop, [], (err) => {
//     if(err){
//         return console.log(err.message);
//     }
//     console.log("Insert Sucess");
// })

// db.all('select * from provided_referrals', [], (err, rows) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log(rows);
// })



app.post('/CardDetails', (req, res) => {
    const {card_id} = req.body;
    // console.log(card_id);
    const query = 'select * from provided_referrals where refer_id = ?';
    db.get(query, [card_id], (err, row) => {
        if(err){
            return console.log(err.message);
        }
        res.send({cardDetails: row})
    })
})

app.post('/CheckApplied', (req, res) => {
    const {id} = req.body
    db.get("select * from Applied_Referrals where job_id=?", [id], (err, row) => {
        if(err){
            return res.send({message:"Error In Checking"})
        }
        if(!row){
            return res.send({isApplied: false})
        }
        return res.send({isApplied: true})
    })
})

// submitted-referrals

app.post('/SubmittedReferrals', (req, res) => {
    const { email } = req.body;
  
    db.all("SELECT job_id FROM Applied_Referrals WHERE user_email = ?", [email], (err, submitted) => {
      if (err) {
        console.error("Error fetching applied jobs:", err.message);
        return res.status(500).send({ message: "Data Not Found" });
      }
  
      if (!submitted || submitted.length === 0) {
        return res.send({ submitted: [] });
      }
  
      // Extract job_ids into array
      const jobIds = submitted.map(a => a.job_id);
  
      // Create placeholders (?, ?, ? ...)
      const placeholders = jobIds.map(() => "?").join(",");
  
      const sql = `SELECT * FROM Provided_Referrals WHERE refer_id IN (${placeholders})`;
  
      db.all(sql, jobIds, (err, submits) => {
        if (err) {
          console.error("Error fetching referral details:", err.message);
          return res.status(500).send({ message: "Data Not Found" });
        }  
        res.send({ submitted: submits });
      });
    });
  });
  
const applied_query = `CREATE TABLE IF NOT EXISTS Applied_Referrals (
    user_email TEXT,
    job_id TEXT,
    PRIMARY KEY (user_email, job_id)
  )`;
db.run(applied_query, [], (err) => {
    if(err){
        return console.log(err.message);
    }
    return console.log("Sucessfully Created Applied Referrals")
})

app.post('/AppliedReferrals', (req, res) => {
    const { card_id, user_email } = req.body;

    if (!card_id || !user_email) {
        return res.status(400).send({ message: "Missing card_id or user_email" });
    }

    db.run("insert into Applied_Referrals values (?, ?)", [user_email, card_id], (err) => {
        if(err){
            return res.send({message: "Error in Application"})
        }
        res.send({message: "Data Send Sucessfully"})
    })
})






// db.all("select * from provided_referrals", [], (err, data) => {
//     if(err){
//         return console.log(err.message);
//     }
//     console.log("Data Here: ")
//     console.log(data)
// })

app.post('/add-referral', (req, res) => {
    const {
        employeeId_email, jobTitle, companyName, location, postedOn, employmentType, salary, expireDate,
        description, requirements, skills, status
    } = req.body;

    // console.log({
    //     employeeId,
    //     jobTitle,
    //     companyName,
    //     location,
    //     postedOn,
    //     employmentType,
    //     salary,
    //     expireDate,
    //     description,
    //     requirements,
    //     skills,
    //     status,
    // });

    db.get("select provider_id from referral_providers where provider_email = ?", [employeeId_email], (err, data) => {
        if(err){
            return console.log(err.message);
        }
        if(!data){
            return res.send({message : "Error in Data Email Sent"})
        }
        const employeeId = data.provider_id
        // console.log("Employee ID" + employeeId);
        const insert_query = `INSERT INTO provided_referrals (
            provider_id, refer_job_title, refer_company, refer_location, refer_postedOn, refer_type, refer_salary, refer_expiresOn, refer_description, refer_requirements, refer_skills, refer_status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

        db.run(insert_query, [employeeId, jobTitle, companyName, location, postedOn, employmentType, salary, expireDate, description, requirements, skills, status], (err) => {
            if(err){
                return console.log(err.message);
            }
            console.log("Referral Details Added Sucessfully")
        })
        res.send({message: "Data Transfer to DB"});
    })
})

// -------------------------------------- LOGIN AND SIGNUP FORMS AND INFORMATION ----------------------------

app.post('/signup', async (req, res) => {
    // {referralType: referralType, userFullName: userFullName, userEmail: userEmail, userPassword: userPassword})
    const { referralType, userFullName, userEmail, userPassword, userCompany, userDesignation, userExperience} = req.body;

    // console.log(req.body)
    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

    let insert_query;
    if(referralType == 'seeker'){
        insert_query = `insert into referral_seekers (seeker_name, seeker_email, seeker_password) values(?, ?, ?)`;

        db.run(insert_query, [userFullName, userEmail, hashedPassword], (err) => {
            if(err){
                console.log(err.message);
                return res.send({success: false, message: "Error in Signup of User - Seeker"})
            }
    
            res.send({success: true, message: "User Sucessfully Signed Up"})
        })
    }
    else{
        insert_query = `insert into referral_providers (
                provider_name, provider_email, provider_password, provider_company, provider_designation, provider_experience
           ) VALUES (?, ?, ?, ?, ?, ?)`;
        
        db.run(insert_query, [userFullName, userEmail, hashedPassword, userCompany, userDesignation, userExperience], (err) => {
        if(err){
            console.log(err.message);
            return res.send({success: false, message: "Error in Signup of User - Error : "+err.message})
        }

        res.send({success: true, message: "User Sucessfully Signed Up"})
    })
    }
    
})
// db.all("select * from provided_referrals", (err, data) => {
//     if(err){
//         console.log("Errr")
//     }
//     console.log(data)
// })
app.post('/login', (req, res) => {
    const {referralType, userEmail, userPassword} = req.body;

    let select_query = "";
    if(referralType == "seeker"){
        select_query = 'select * from referral_seekers where seeker_email = ?';
    }
    else{
        select_query = 'select * from referral_providers where provider_email = ?';
    }
    db.get(select_query, [userEmail], async (err, row) => {
        if(err){
            console.log(err.message)
            return res.send({login: false, message: "Failed to Login"})
        }
        if(!row){
            return res.send({login:false, message: "User Not Found"});
        }
        const hashedPassword = referralType === 'seeker' ? row.seeker_password : row.provider_password;
        const passwordCheck = await bcrypt.compare(userPassword, hashedPassword);
        if(passwordCheck){
            const user_full_name = referralType === 'seeker' ? row.seeker_name : row.provider_name;
            const user_email = referralType === 'seeker' ? row.seeker_email : row.provider_email;
            return res.send({login: true, message: "User Sucessfull Login", userFullName: user_full_name, userEmail: user_email});

        }
        return res.send({login: false, message: "Incorrect Password"});
    })
})



// ---------------------- Delete ----------------

// List all tables in SQLite
db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, rows) => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Tables:");
    rows.forEach(row => {
        console.log(row.name);
    });
});

db.run('DELETE FROM Referral_Seeker', function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`All rows deleted from your_table_name`);
});

// db.all("select * from Applied_referrals", [], (err, row) => {
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(row);

// })

// ---------------------- POSTED REFERRALS ------------

// db.all("select * from provided_referrals", [], (err, row) => {
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(row)
// })

// db.all("select * from provided_referrals where provider_id = ?", [1], (err, row) => {
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(row)
// })

// db.all("select provider_id from referral_providers where provider_email='navaneeth@gmail.com'", [], (err, row) => {
//     if(err){
//         return console.log(err.message);
//     }
//     console.log(row);
// });

app.post('/posted-referrals', (req, res) => {
    const { email } = req.body;

    db.get("select provider_id from referral_providers where provider_email=?", [email], (err, row) => {
        if(err){
            return res.send({message: err.message});
        }
        if(!row){
            return res.send({message: "No User Found"})
        }
        const p_id = row.provider_id;

        db.all("select * from provided_referrals where provider_id = ?", [p_id], (err, referrals) => {
            if(err){
                console.log("Errrrorrr")
                return res.send({message: "Data Not Found"});
            }
            res.send({referrals})
        })

    })
})




app.post('/all-referrals', (req, res) => {
    const { email } = req.body;

    db.all("select * from provided_referrals", [], (err, alldata) => {
        if(err){
            console.log("Errrrorrr : "+err.message)
            return res.send({message: "Data Not Found"});
        }
        res.send({alldata: alldata})
    })
})


// ---------------------- PORT LISTENING --------------
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})