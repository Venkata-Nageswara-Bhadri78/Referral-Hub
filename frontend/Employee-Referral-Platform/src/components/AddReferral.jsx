import React, { useState } from 'react'
import CustomDatePicker from '../ui/CustomDatePicker'
import SkillsAutocomplete from '../ui/SkillsAutoComplete'

const API_URL = import.meta.env.VITE_API_URL;

const AddReferral = ({email}) => {
    const [jobTitle, setJobtitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");

    const today = new Date();
    const postedOn = today.toISOString().split('T')[0];

    const [employmentType, setEmploymentType] = useState("Full-Time");
    const [salary, setSalary] = useState("");

    const [expireDate, setExpireDate] = useState("");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");
    const [skills, setSkills] = useState([]);
    const [status, setStatus] = useState(true);

    const provider_email = email;
    // console.log("Email : "+provider_email)


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch(`${API_URL}/add-referral`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    employeeId_email: provider_email,
                    jobTitle: jobTitle,
                    companyName: companyName,
                    location: location,
                    postedOn: postedOn,
                    employmentType: employmentType,
                    salary: salary,
                    expireDate: expireDate,
                    description:description,
                    requirements: requirements,
                    skills: skills,
                    status: status
                })
            })
            const data = await response.json()
            console.log(data.message);
            
            alert("SUCESS - YOU CAN CHECK YOU POST IN ALL REFERRALS AND POSTED REFERRALS");

            setJobtitle("");
            setCompanyName("");
            setLocation("");
            setEmploymentType("Full-Time");
            setSalary("");
            setExpireDate("");
            setDescription("");
            setRequirements("");
            setSkills([]);
            setStatus(true);

        }
        catch(err){
            return console.log(err.message);
        }
    }


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
    //   });
    
  return (
    <form onSubmit={handleSubmit} className='md:w-1/2 md:mx-auto bg-white rounded-md p-4 text-sm shadow-2xl'>
        <div className='w-full text-center text-xl text-white bg-black rounded-4xl p-1'>Enter the Referral Details</div>
        <div className='p-1 flex flex-col gap-1'>
            <div>Job Title</div>
            <input value={jobTitle} onChange={(e) => {setJobtitle(e.target.value)}} className='border placeholder:gray-400 h-8 rounded-md p-2 w-full focus:border-blue-600 focus:border-2 focus:outline-none' type='text' placeholder='Frontend Developer' required />
        </div>
        <div className='p-1 flex flex-col gap-1'>
            <div>Company</div>
            <input value={companyName} onChange={(e) => {setCompanyName(e.target.value)}} className='border placeholder:gray-400 h-8 rounded-md p-2 w-full focus:border-blue-600 focus:border-2 focus:outline-none' type='text' placeholder='XYZ Solutions' required />
        </div>
        <div className='p-1 flex flex-col gap-1'>
            <div>Location</div>
            <input value={location} onChange={(e) => {setLocation(e.target.value)}} className='border placeholder:gray-400 h-8 rounded-md p-2 w-full focus:border-blue-600 focus:border-2 focus:outline-none' type='text' placeholder='San Francisco, CA' required />
        </div>
        <div className='p-1 flex flex-col gap-1'>
            <div>Employment Type: </div>
            <select value={employmentType} onChange={(e) => {setEmploymentType(e.target.value)}} className='border placeholder:gray-400 h-8 rounded-md p-1 w-full focus:border-blue-600 focus:border-2 focus:outline-none' required >
                <option value="Full-Time">Full-Time</option>
                <option value='Part-Time'>Part Time</option>
                <option value='Freelance'>Freelance</option>
            </select>
        </div>

        <div className='p-1 flex flex-col gap-1'>
            <div>Salary</div>
            <input value={salary} onChange={(e) => {setSalary(e.target.value)}} className='border placeholder:gray-400 h-8 rounded-md p-2 w-full focus:border-blue-600 focus:border-2 focus:outline-none' type='text' placeholder='12 LPA / $3000' required />
        </div>
        
        <div className='p-1 flex flex-col gap-1'>
            <div>Expires Date</div>
            <CustomDatePicker expireDate={expireDate} setExpireDate={setExpireDate} required/>
        </div>
        <div className='p-1 flex flex-col gap-1'>
            <div>Description:</div>
            <textarea value={description} onChange={(e) => {setDescription(e.target.value)}} rows='5' cols='50' className='border placeholder:gray-400 rounded-md p-2 w-full focus:border-blue-600 focus:border-2 focus:outline-none' placeholder='Enter the Job Description Here .....' required></textarea>
        </div>

        <div className='p-1 flex flex-col gap-1'>
            <div>Requirements:</div>
            <textarea value={requirements} onChange={(e) => {setRequirements(e.target.value)}} rows='5' cols='50' className='border placeholder:gray-400 rounded-md p-2 w-full focus:border-blue-600 focus:border-2 focus:outline-none' placeholder='Enter the Job Requirements Here .....' required></textarea>
        </div>

        <div className='p-1 flex flex-col gap-1'>
            <div>Skills:</div>
            <SkillsAutocomplete required skills={skills} setSkills={setSkills}/>
        </div>

        <div className='w-full flex justify-center p-3'>
            <button type='submit' className='px-6 py-2 text-white bg-black rounded-md'>Post Referral</button>
        </div>
    </form>

  )
}

export default AddReferral