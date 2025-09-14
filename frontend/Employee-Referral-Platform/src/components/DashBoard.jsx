import React from 'react'
import ReferralCard from './ReferralCard'
import { BiLogOut } from "react-icons/bi";
import PostedReferrals from './PostedReferrals';
import SubmitedReferrals from './SubmittedReferrals';
import AllReferrals from './AllReferrals';

const DashBoard = ({referralType, user, setUser}) => {
  const handleSignout = () => {
    localStorage.removeItem("user");
    setUser(null)
  }
  // console.log(referralType)
  return (
    <div className='pb-4'>
      <div className='flex p-2'>
        <div onClick={handleSignout} className='p-2 rounded-2xl bg-black text-white w-20 flex justify-center'>
          <BiLogOut />
        </div>
      </div>

      <div className='bg-gray-300'>
        <div className='px-3 py-1 text-2xl'>Default Referrals</div>
        <div className='flex p-2 gap-3 overflow-x-scroll'>
          {data.map(card => {
              return (
                  <ReferralCard key={card.id} card = {card}/>
              )
          })}
        </div>
      </div>
      

      <div className='bg-gray-300 py-2'>
        <div className='px-3 text-2xl'>All Referrals</div>
        <div className='p-2 flex justify-center gap-3 overflow-x-scroll'>
          <AllReferrals email={user} isHomePage={true}/>
        </div>
      </div>


      <div className='bg-gray-300 py-2'>
        <div className='px-3 text-2xl'>{referralType==='seeker' ? 'Referrals Applied By You' : 'Referrals Posted by you'}</div>
        <div className='p-2 flex justify-center gap-3 overflow-x-scroll'>
          {referralType==='seeker' ? <SubmitedReferrals email={user} isHomePage={true} /> : <PostedReferrals email={user} isHomePage={true} />}
          {/* <PostedReferrals email={user} isHomePage={true}/> */}
        </div>
      </div>
      
      <div className='bg-gray-300'>
        <div className='px-3 py-1 text-2xl'>Default Referrals</div>
        <div className='flex p-2 gap-3 overflow-x-scroll'>
          {data.map(card => {
              return (
                  <ReferralCard key={card.id} card = {card}/>
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default DashBoard
const data = [
  {
    "id": "ref_001",
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
    "description": "We are seeking a passionate Frontend Developer who thrives on building engaging, performant, and scalable web experiences. As part of our fast-paced product team, you will design and develop modern user interfaces using React and TypeScript, ensuring a seamless user experience. You’ll work closely with designers, product managers, and backend engineers to bring our vision to life, continuously improving our applications with clean and maintainable code. The ideal candidate is detail-oriented, eager to learn, and has an eye for design and usability.",
    "requirements": [
      "4+ years of experience in frontend development, preferably with React and TypeScript.",
      "Proficiency in state management libraries (Redux, Zustand, or similar).",
      "Strong understanding of responsive design, cross-browser compatibility, and performance optimization.",
      "Experience consuming RESTful APIs and GraphQL endpoints.",
      "Ability to write modular, reusable, and testable code with modern testing frameworks (Jest, React Testing Library).",
      "Familiarity with version control systems like Git and CI/CD pipelines.",
      "Excellent collaboration and communication skills with a user-first mindset."
    ],
    "skills": ["java", "python"],
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
    "description": "FinServe is expanding its analytics team and looking for a detail-oriented Data Analyst who can transform raw data into actionable insights. You will be responsible for collecting, processing, and analyzing large datasets to identify trends, patterns, and anomalies that inform business decisions. In this role, you will collaborate with finance, operations, and technology teams to develop dashboards and reports that help stakeholders track performance and optimize strategies. This is a hands-on role requiring excellent problem-solving and analytical skills, as well as the ability to communicate complex findings to non-technical audiences.",
    "requirements": [
      "3+ years of experience as a Data Analyst or in a similar role.",
      "Proficiency in SQL and advanced query optimization techniques.",
      "Strong skills in Python for data manipulation and statistical analysis (pandas, numpy, scipy).",
      "Experience building interactive dashboards in Power BI, Tableau, or Looker.",
      "Ability to perform data cleaning, wrangling, and validation on large structured and unstructured datasets.",
      "Understanding of financial modeling and business KPIs is a plus.",
      "Excellent communication and presentation skills to convey insights effectively."
    ],
    "skills": ["java", "python"],
    "status": "Open"
  },
  {
    "id": "ref_003",
    "jobTitle": "Cloud Engineer",
    "company": "SkyNet Systems",
    "location": "Austin, TX",
    "employmentType": "Full-time",
    "salaryRange": "$100,000 - $130,000",
    "referralBy": {
      "employeeId": "emp_309",
      "name": "Alicia Parker",
      "position": "Principal Cloud Architect",
      "email": "alicia.parker@skynet.com"
    },
    "postedDate": "2025-09-05",
    "expiresOn": "2025-10-01",
    "description": "SkyNet Systems is seeking a Cloud Engineer to join our Infrastructure team. In this role, you will design, deploy, and manage scalable cloud-based systems across AWS, Azure, and GCP. You’ll be tasked with ensuring high availability, security, and performance of cloud applications while driving automation and DevOps best practices. This is an exciting opportunity to work with cutting-edge cloud technologies and contribute to large-scale digital transformation initiatives.",
    "requirements": [
      "5+ years of experience in cloud engineering or DevOps roles.",
      "Strong knowledge of AWS, Azure, or GCP with hands-on deployment experience.",
      "Proficiency in infrastructure-as-code tools like Terraform or AWS CloudFormation.",
      "Experience with containerization and orchestration (Docker, Kubernetes).",
      "Understanding of cloud networking, security best practices, and monitoring tools.",
      "Strong scripting abilities in Python, Bash, or PowerShell.",
      "Ability to troubleshoot complex distributed systems and automate repetitive tasks."
    ],
    "skills": ["java", "python"],
    "status": "Open"
  },
  {
    "id": "ref_004",
    "jobTitle": "Machine Learning Engineer",
    "company": "AIverse Labs",
    "location": "New York, NY",
    "employmentType": "Full-time",
    "salaryRange": "$120,000 - $150,000",
    "referralBy": {
      "employeeId": "emp_412",
      "name": "Mark Lee",
      "position": "Head of AI Research",
      "email": "mark.lee@aiverse.com"
    },
    "postedDate": "2025-09-02",
    "expiresOn": "2025-09-25",
    "description": "We are building a new generation of intelligent systems at AIverse Labs and are looking for a Machine Learning Engineer to join our team. You will design, train, and deploy machine learning models that power real-world applications in NLP, computer vision, and recommendation systems. As part of the AI research group, you will collaborate with data scientists and product teams to build innovative ML-driven products that scale to millions of users.",
    "requirements": [
      "4+ years of experience working with machine learning algorithms and frameworks.",
      "Proficiency in Python and libraries like TensorFlow, PyTorch, and scikit-learn.",
      "Experience deploying ML models into production environments.",
      "Strong background in data preprocessing, feature engineering, and model evaluation.",
      "Familiarity with cloud ML platforms such as AWS SageMaker, Azure ML, or Google Vertex AI.",
      "Understanding of software engineering best practices, including testing, CI/CD, and code reviews.",
      "Ability to stay up-to-date with the latest ML research and apply it to solve practical problems."
    ],
    "skills": ["java", "python"],
    "status": "Open"
  }
]
