import React, { useState } from 'react'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const LoginForm = ({user, setUser, referralType, signup, setSignup}) => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const [update, setUpdate] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response  = await fetch("http://localhost:4000/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({referralType: referralType, userEmail:userEmail, userPassword: userPassword})
            });

            const data = await response.json();
            // console.log(data.message);
            // console.log(data);
            setUpdate(data)
            if(data.login){
                alert("Sucessfull Login! Welcome: " + data.userFullName);

                localStorage.setItem("user", JSON.stringify(data.userEmail));
                setUser(data.userEmail);
            }
        }
        catch(err){
            return console.log(err.message);
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <FormControl className='p-3'>
            <FormLabel>Email</FormLabel>
            <Input value={userEmail} onChange={(e) => {setUserEmail(e.target.value)}} name="email" type="email" placeholder="johndoe@email.com" />
        </FormControl>
        <FormControl className='p-3'>
            <FormLabel>Password</FormLabel>
            <Input value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}} name="password" type="password" placeholder="password"/>
        </FormControl>
        <div className='p-3'>
            <Button type='submit' className='w-full'>Login</Button>
        </div>
        <div className='p-3 flex gap-1'>
            <div>New to the Website ? </div> <div className='text-blue-500 cursor-pointer' onClick={() => {setSignup(!signup)}}>Sign Up Here</div>
        </div>
        <div>
            <div className='px-3 text-red-500'>{update.login ? 'User Login Sucess' : update.message}</div>
        </div>
    </form>
  )
}

export default LoginForm