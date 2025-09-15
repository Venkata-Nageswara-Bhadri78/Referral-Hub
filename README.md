# The Referral Hub

**The Referral Hub** is a full-stack platform designed to connect **referral seekers** with **referral providers** in a streamlined, user-friendly environment. This project is built with modern web technologies and provides a complete workflow for both types of users to manage and access job referrals.

---

## 🛠 Tech Stack

**Backend:**  
- Node.js  
- Express.js  
- CORS  (frontend - backend interaction)
- Bcrypt (for password hashing)

**Frontend:**  
- React.js  
- HTML, CSS, Tailwind CSS, JavaScript

**Database:**  
- SQLite3

---

## 🚀 Project Overview

The Referral Hub supports two types of users:

1. **Referral Seekers** – Users looking to get job referrals from current employees.  
2. **Referral Providers** – Users currently employed who can provide referrals to others.

The platform offers a seamless experience from signup/login to dashboard access and referral management.

---

## 🌐 User Flow

### Landing Page
- Users first encounter a login/signup page.
- They select their user type (**Seeker** or **Provider**) before signing up.
- After signing up, users can log in with their credentials.

### Dashboard
- The dashboard serves as the main landing page after login.
- It includes various tabs and sections depending on the user type:

#### Common Sections for Both Users
- **Default Referrals** – Pre-added sample referrals for demonstration.
- **All Referrals** – Displays all referrals added by registered referral providers.

#### Referral Seeker-Specific
- **Submitted Referrals** – Displays all referrals the user has applied for.

#### Referral Provider-Specific
- **Posted Referrals** – Allows providers to add new referrals and see all referrals they have posted.
- **Add Referral** – Form to create a new referral including role, package, job type, requirements, description, etc.

---

## 📌 Features

- **User Authentication** – Sign up and login for both seekers and providers.  
- **Dynamic Dashboard** – Personalized views for referral seekers and providers.  
- **Referral Management** – Seekers can view and apply to referrals; providers can add and manage referrals.  
- **Referrals Showcase** – Default and all referrals are displayed for users to explore.  
- **Data Persistence** – All user and referral data is stored in a SQLite database.

---

## 💻 Pages Overview

- **Landing/Login Page** – User type selection and authentication.  
- **Dashboard** – Main hub after login.  
- **Manual Referrals** – Section for manual referral applications.  
- **Default Referrals** – Pre-added sample referrals.  
- **Posted Referrals** – Referrals posted by the logged-in provider.  
- **Submitted Referrals** – Referrals the logged-in seeker has applied for.  
- **All Referrals** – Displays referrals provided by all providers.

---

## ✅ Summary

The Referral Hub is a comprehensive full-stack solution connecting job seekers with employees who can provide referrals. It facilitates **login, signup, referral posting, and referral applications** in a seamless and intuitive way, making it easy for both referral seekers and providers to manage and explore job referrals.


## 🚀 Project Initialization

Follow these steps to set up **The Referral Hub** locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/Venkata-Nageswara-Bhadri78/Referral-Hub.git
cd <your-repo-folder>

# 2. Move to backend and Install backend dependencies
cd backend
npm install

# 3. Move back and move to frontnend and Install frontend dependencies
cd ../frontend
npm install

# 4. Start the backend server
cd ../backend
# Option 1: using npm script
npm start
# Option 2: directly with Node
node server.js

# 5. Start the frontend server (In New tab move to frontent/Employee-Referral-Platform)
cd ../frontend
# Option 1: using npm script
npm start
# Option 2: development mode
npm run dev