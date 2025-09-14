import React from 'react'
import ReferralCard from './ReferralCard'
const ManualReferrals = ({}) => {
  return (
    <div className='w-[80%] mx-auto'>
        <div className='px-3 py-1 text-center text-2xl'>Default Referrals</div>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
            {data.map(card => {
                return (
                    <ReferralCard key={card.refer_id || card.id} card = {card}/>
                )
            })}
        </div>
    </div>    
  )
}

export default ManualReferrals



const data = [
  {
    "refer_id": "ref_001",
    "jobTitle": "Frontend Developer",
    "company": "TechNova Solutions",
    "location": "San Francisco, CA",
    "employmentType": "Full-time",
    "salaryRange": "$90,000 - $110,000",
    "referralBy": {
      "employeeId": "emp_101",
      "name": "Sarah Johnson",
      "position": "Senior Software Engineer",
      "email": "sarah.johnson@technova.com"
    },
    "postedDate": "2025-09-01",
    "expiresOn": "2025-09-30",
    "description": "Looking for a skilled Frontend Developer with React, TypeScript, and Tailwind CSS to build scalable web applications.",
    "requirements": [
      "3+ years frontend experience",
      "Proficient in React.js and TypeScript",
      "Experience with REST APIs",
      "Strong CSS knowledge"
    ],
    "skills": ["React", "TypeScript", "TailwindCSS", "Git"],
    "status": "Open"
  },
  {
    "id": "ref_002",
    "jobTitle": "Data Analyst",
    "company": "FinServe Inc.",
    "location": "Remote",
    "employmentType": "Contract",
    "salaryRange": "$40 - $60/hr",
    "referralBy": {
      "employeeId": "emp_205",
      "name": "David Kim",
      "position": "Data Science Manager",
      "email": "david.kim@finserve.com"
    },
    "postedDate": "2025-08-28",
    "expiresOn": "2025-09-20",
    "description": "Seeking a Data Analyst with strong SQL, Python, and dashboard building experience.",
    "requirements": [
      "Proficient in SQL and Python",
      "Dashboard skills in Power BI or Tableau",
      "Strong communication skills"
    ],
    "skills": ["SQL", "Python", "Tableau", "Excel"],
    "status": "Open"
  },
  {
    "id": "ref_003",
    "jobTitle": "Backend Engineer",
    "company": "CloudCore Systems",
    "location": "Austin, TX",
    "employmentType": "Full-time",
    "salaryRange": "$100,000 - $125,000",
    "referralBy": {
      "employeeId": "emp_312",
      "name": "Alice Wong",
      "position": "Principal Engineer",
      "email": "alice.wong@cloudcore.com"
    },
    "postedDate": "2025-09-05",
    "expiresOn": "2025-09-28",
    "description": "Join our backend team to design scalable APIs and microservices.",
    "requirements": [
      "5+ years backend development",
      "Experience with Node.js or Java",
      "Knowledge of microservices and Docker",
      "Familiar with cloud platforms"
    ],
    "skills": ["Node.js", "Java", "Docker", "AWS"],
    "status": "Open"
  },
  {
    "id": "ref_004",
    "jobTitle": "Machine Learning Engineer",
    "company": "AIWorks Labs",
    "location": "New York, NY",
    "employmentType": "Full-time",
    "salaryRange": "$120,000 - $150,000",
    "referralBy": {
      "employeeId": "emp_410",
      "name": "Ravi Sharma",
      "position": "Lead Data Scientist",
      "email": "ravi.sharma@aiworks.com"
    },
    "postedDate": "2025-09-03",
    "expiresOn": "2025-09-25",
    "description": "We need an ML Engineer with experience in NLP and deep learning models.",
    "requirements": [
      "Experience with TensorFlow or PyTorch",
      "Background in NLP/Computer Vision",
      "Strong Python skills"
    ],
    "skills": ["Python", "TensorFlow", "PyTorch", "NLP"],
    "status": "Open"
  },
  {
    "id": "ref_005",
    "jobTitle": "DevOps Engineer",
    "company": "ScaleOps",
    "location": "Seattle, WA",
    "employmentType": "Full-time",
    "salaryRange": "$95,000 - $120,000",
    "referralBy": {
      "employeeId": "emp_500",
      "name": "Mark Evans",
      "position": "Infrastructure Manager",
      "email": "mark.evans@scaleops.com"
    },
    "postedDate": "2025-09-02",
    "expiresOn": "2025-09-29",
    "description": "Looking for DevOps engineer to manage CI/CD pipelines and infrastructure automation.",
    "requirements": [
      "Hands-on with Jenkins/GitHub Actions",
      "Experience with Kubernetes & Docker",
      "Strong scripting (Bash, Python)"
    ],
    "skills": ["Kubernetes", "Docker", "CI/CD", "Python"],
    "status": "Open"
  },
  {
    "id": "ref_006",
    "jobTitle": "UI/UX Designer",
    "company": "DesignSphere",
    "location": "Remote",
    "employmentType": "Contract",
    "salaryRange": "$50 - $70/hr",
    "referralBy": {
      "employeeId": "emp_612",
      "name": "Emma Brown",
      "position": "Design Lead",
      "email": "emma.brown@designsphere.com"
    },
    "postedDate": "2025-08-30",
    "expiresOn": "2025-09-27",
    "description": "Seeking a creative UI/UX Designer for mobile/web products.",
    "requirements": [
      "Proficiency in Figma/Sketch",
      "Knowledge of design systems",
      "Strong portfolio required"
    ],
    "skills": ["Figma", "Sketch", "Adobe XD"],
    "status": "Open"
  },
  {
    "id": "ref_007",
    "jobTitle": "Cloud Architect",
    "company": "NextGen Cloud",
    "location": "Chicago, IL",
    "employmentType": "Full-time",
    "salaryRange": "$130,000 - $160,000",
    "referralBy": {
      "employeeId": "emp_701",
      "name": "Lucas Smith",
      "position": "Chief Cloud Officer",
      "email": "lucas.smith@nextgencloud.com"
    },
    "postedDate": "2025-09-01",
    "expiresOn": "2025-09-26",
    "description": "Looking for an experienced Cloud Architect to lead AWS and Azure deployments.",
    "requirements": [
      "10+ years in cloud infrastructure",
      "Expertise in AWS, Azure, GCP",
      "Strong leadership and design skills"
    ],
    "skills": ["AWS", "Azure", "Terraform", "Networking"],
    "status": "Open"
  },
  {
    "id": "ref_008",
    "jobTitle": "Full Stack Engineer",
    "company": "AppStream",
    "location": "Los Angeles, CA",
    "employmentType": "Full-time",
    "salaryRange": "$110,000 - $135,000",
    "referralBy": {
      "employeeId": "emp_811",
      "name": "Sophia Lee",
      "position": "Engineering Manager",
      "email": "sophia.lee@appstream.com"
    },
    "postedDate": "2025-09-06",
    "expiresOn": "2025-09-30",
    "description": "Join our team as a Full Stack Engineer building high-scale SaaS products.",
    "requirements": [
      "Strong React & Node.js experience",
      "Database knowledge (Postgres/MongoDB)",
      "Understanding of cloud deployment"
    ],
    "skills": ["React", "Node.js", "PostgreSQL", "MongoDB"],
    "status": "Open"
  },
  {
    "id": "ref_009",
    "jobTitle": "Cybersecurity Analyst",
    "company": "SecureNet",
    "location": "Boston, MA",
    "employmentType": "Full-time",
    "salaryRange": "$90,000 - $115,000",
    "referralBy": {
      "employeeId": "emp_901",
      "name": "James Wilson",
      "position": "Security Lead",
      "email": "james.wilson@securenet.com"
    },
    "postedDate": "2025-09-04",
    "expiresOn": "2025-09-29",
    "description": "We need a Cybersecurity Analyst to monitor and secure enterprise systems.",
    "requirements": [
      "Experience in SOC operations",
      "Knowledge of SIEM tools",
      "Understanding of threat detection"
    ],
    "skills": ["Python", "SIEM", "Linux", "Networking"],
    "status": "Open"
  },
  {
    "id": "ref_010",
    "jobTitle": "Mobile App Developer",
    "company": "MobiTech",
    "location": "Remote",
    "employmentType": "Contract",
    "salaryRange": "$45 - $65/hr",
    "referralBy": {
      "employeeId": "emp_1001",
      "name": "Olivia Martinez",
      "position": "Senior iOS Developer",
      "email": "olivia.martinez@mobitech.com"
    },
    "postedDate": "2025-08-31",
    "expiresOn": "2025-09-21",
    "description": "Looking for a mobile developer skilled in Flutter and React Native.",
    "requirements": [
      "Experience with Flutter",
      "React Native development",
      "Publishing apps to App Store/Play Store"
    ],
    "skills": ["Flutter", "React Native", "JavaScript", "Dart"],
    "status": "Open"
  },
  {
    "id": "ref_011",
    "jobTitle": "Product Manager",
    "company": "VisionTech",
    "location": "Denver, CO",
    "employmentType": "Full-time",
    "salaryRange": "$105,000 - $125,000",
    "referralBy": {
      "employeeId": "emp_1101",
      "name": "William Clark",
      "position": "Director of Product",
      "email": "william.clark@visiontech.com"
    },
    "postedDate": "2025-09-02",
    "expiresOn": "2025-09-24",
    "description": "Hiring a Product Manager to define and deliver product roadmaps.",
    "requirements": [
      "Experience leading cross-functional teams",
      "Agile methodology knowledge",
      "Strong communication skills"
    ],
    "skills": ["Agile", "Scrum", "JIRA", "Communication"],
    "status": "Open"
  },
  {
    "id": "ref_012",
    "jobTitle": "QA Engineer",
    "company": "Testify",
    "location": "Phoenix, AZ",
    "employmentType": "Full-time",
    "salaryRange": "$75,000 - $95,000",
    "referralBy": {
      "employeeId": "emp_1201",
      "name": "Amelia Carter",
      "position": "QA Manager",
      "email": "amelia.carter@testify.com"
    },
    "postedDate": "2025-09-01",
    "expiresOn": "2025-09-27",
    "description": "QA Engineer needed to ensure product quality through automated and manual testing.",
    "requirements": [
      "Experience with Selenium or Cypress",
      "API testing knowledge",
      "Good understanding of Agile testing"
    ],
    "skills": ["Selenium", "Cypress", "Java", "Python"],
    "status": "Open"
  },
  {
    "id": "ref_013",
    "jobTitle": "Blockchain Developer",
    "company": "CryptoChain",
    "location": "Remote",
    "employmentType": "Contract",
    "salaryRange": "$100 - $140/hr",
    "referralBy": {
      "employeeId": "emp_1301",
      "name": "Ethan Lee",
      "position": "Blockchain Architect",
      "email": "ethan.lee@cryptochain.com"
    },
    "postedDate": "2025-09-05",
    "expiresOn": "2025-09-25",
    "description": "Seeking a Blockchain Developer with experience in Ethereum and smart contracts.",
    "requirements": [
      "Experience with Solidity",
      "Knowledge of Web3.js",
      "Familiarity with DeFi platforms"
    ],
    "skills": ["Solidity", "Ethereum", "Web3.js", "Smart Contracts"],
    "status": "Open"
  },
  {
    "id": "ref_014",
    "jobTitle": "Systems Administrator",
    "company": "InfraTech",
    "location": "Houston, TX",
    "employmentType": "Full-time",
    "salaryRange": "$80,000 - $100,000",
    "referralBy": {
      "employeeId": "emp_1401",
      "name": "Grace Taylor",
      "position": "IT Manager",
      "email": "grace.taylor@infratech.com"
    },
    "postedDate": "2025-09-03",
    "expiresOn": "2025-09-28",
    "description": "Systems Administrator needed to manage servers, networks, and security patches.",
    "requirements": [
      "Experience with Linux/Windows servers",
      "Networking and firewall knowledge",
      "Experience with Active Directory"
    ],
    "skills": ["Linux", "Windows Server", "Networking", "Active Directory"],
    "status": "Open"
  }
];
