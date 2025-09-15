import React, { useState } from 'react'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import LoginForm from './LoginForm';

const API_URL = import.meta.env.VITE_API_URL;

const SignUpForm = ({referralType, signup, setSignup}) => {

    const [userFullName, setUserFullName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userCPassword, setUserCPassword] = useState("");

    const [userCompany, setUserCompany] = useState("");
    const [userDesignation, setUserDesignation] = useState("");
    const [userExperience, setUserExperience] = useState("");

    // console.log(
    //     userFullName, 
    //     userEmail, 
    //     userPassword, 
    //     userCPassword, 
    //     userCompany, 
    //     userDesignation, 
    //     userExperience
    //   );
      
    /*
const create_providers_table = `CREATE TABLE IF NOT EXISTS referral_providers (
    provider_id INTEGER PRIMARY KEY AUTOINCREMENT,
    provider_name TEXT NOT NULL,
    provider_email TEXT UNIQUE NOT NULL,
    provider_password TEXT NOT NULL,
    provider_company TEXT NOT NULL,
    provider_designation TEXT NOT NULL,
    provider_experience TEXT NOT NULL
);
    */

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(userPassword !== userCPassword){
            return alert("Password and Confirm Password should be same - Try Again")
        }
        try{
            const response = await fetch(`${API_URL}/signup`, {
                method : "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({referralType: referralType, userFullName: userFullName, userEmail: userEmail, userPassword: userPassword, userCompany: userCompany, userDesignation: userDesignation, userExperience: userExperience})
            });
            const data = await response.json();
            alert(data.message);
            if(data.success){
                setSignup(false);
            }
        }
        catch(err){
            return console.log(err.message);
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        <FormControl className='p-3'>
            <FormLabel>Full Name</FormLabel>
            <Input value={userFullName} onChange={(e) => {setUserFullName(e.target.value)}} name="full_name" type="text" placeholder="John Doe" />
        </FormControl>
        <FormControl className='p-3'>
            <FormLabel>Email</FormLabel>
            <Input value={userEmail} onChange={(e) => {setUserEmail(e.target.value)}} name="email" type="email" placeholder="johndoe@email.com" />
        </FormControl>

        {referralType=='provider' && (
            <div>
            <FormControl className={`p-3`}>
                <FormLabel>Company</FormLabel>
                <Input value={userCompany} onChange={(e) => {setUserCompany(e.target.value)}} name="company" type="text" placeholder="XYZ Technologies, India" />
            </FormControl>
            <FormControl className='p-3'>
                <FormLabel>Designation</FormLabel>
                <Input value={userDesignation} onChange={(e) => {setUserDesignation(e.target.value)}} name="designation" type="text" placeholder="Senior Software Engineer" />
            </FormControl>
            <FormControl className='p-3'>
                <FormLabel>Experience</FormLabel>
                <Input value={userExperience} onChange={(e) => {setUserExperience(e.target.value)}} name="experience" type="text" placeholder="5+ Years" />
            </FormControl>  
            </div> 
        )}     
        
        <FormControl className='p-3'>
            <FormLabel>Password</FormLabel>
            <Input value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}} name="password" type="password" placeholder="password"/>
        </FormControl>
        <FormControl className='p-3'>
            <FormLabel>Confirm Password</FormLabel>
            <Input value={userCPassword} onChange={(e) => {setUserCPassword(e.target.value)}} name="confirm_password" type="password" placeholder="password"/>
        </FormControl>
        <div className='p-3'>
            <Button type='submit' className='w-full'>Sign Up</Button>
        </div>
        <div className='p-3 flex gap-1'>
            <div>Already Have Account ? </div> <div className='text-blue-500 cursor-pointer' onClick={() => {setSignup(!signup)}}>Login Here</div>
        </div>
    </form>
  )
}

export default SignUpForm