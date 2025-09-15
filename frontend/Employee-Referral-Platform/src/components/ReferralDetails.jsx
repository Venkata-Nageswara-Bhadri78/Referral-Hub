import React, { useEffect, useState } from 'react'
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { useLocation, useParams } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, "");

const ReferralDetails = ({user}) => {

    const [applied, setApplied] = useState(false);
    // console.log(applied)

    const {card_id} = useParams();
    const location = useLocation();
    const card = location.state.card || {};
    // console.log(card_id + " --------- "+card.id)
    useEffect(() => {
        const checking = async () => {
            const response = await fetch(`${API_URL}/CheckApplied`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id: card.id || card_id})
            })
            if(response.ok){
                console.log("Applied Already")
            }
            const { isApplied } = await response.json();
            setApplied(isApplied)
            
        }
        checking();
    }, [applied])

    // console.log(card_id +" ------ "+ card.id);

    const handleSubmit = async () => {
        try{
            const response = await fetch(`${API_URL}/AppliedReferrals`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({card_id: card.id || card_id, user_email: user})
            })
            const data = await response.json();
            
            if(response.ok){
                console.log("Applied Sucessfully : ", data.message)
            }
            else{
                console.error("Error applying:", data.message);
            }

        }
        catch(err){
            return console.log(err.message);
        }
    }

    // console.log(card);
  return (
    <div className='md:w-1/2 md:mx-auto shadow-lg p-2 flex text-[10px] min-w-50 bg-white flex-col justify-center rounded-lg'>
        <div className='p-1 font-semibold text-center text-lg'>{card.jobTitle || card.refer_job_title}</div>
        <div className='p-1 text-gray-400 flex items-center gap-2'><FaBuilding />{card.company || card.refer_company}</div>
        <div className='p-1 flex justify-between'>
            <div className='flex items-center gap-2'><FaLocationDot /> {card.location || card.refer_location}</div>
            <div>{card.employmentType || card.refer_type}</div>    
        </div>
        <div className='p-1 flex justify-between'>
            <div className='flex items-center gap-1'><RiMoneyRupeeCircleFill /> {card.salaryRange || card.refer_salary}</div>
            <div>{card.status || card.refer_status}</div>
        </div>

        <div className='p-1 flex justify-between'>
            <div className='flex'> Posted on: {card.postedDate || card.refer_postedOn}</div>
            <div className='flex'>Expires On: {card.expiresOn || card.refer_expiresOn}</div>
        </div>

        <div className='p-1 flex flex-col justify-between text-justify'>
            <div className='font-semibold'>Description: </div>
            <div>{card.description || card.refer_description}</div>
        </div>

        <div className='p-1 flex flex-col justify-between'>
            <div className='font-semibold'>Requirements: </div>
            <div>{card.requirements || card.refer_requirements}</div>
        </div>

        <div className='p-1'>
            {/* <div className='font-semibold py-1'>Skills: </div>
            <div className='flex flex-wrap gap-1'>
                {(card.skills || card.refer_skills)?.split(',').map((skill, i) => (
                    <div key={i} className='px-2 rounded-2xl bg-blue-100'>{skill.trim()}</div>
                ))}
            </div> */}

        </div>
        
        {/* <div className='p-1'>
            <div className='font-semibold'>Referrer Details: </div>
            <div className='p-1 bg-blue-200 rounded-md'>
                <div className='p-1 flex justify-between'><div>Refferal Posted By:</div> {card.referralBy.name}</div>
                <div className='p-1 flex justify-between'><div>Employee Designation: </div>{card.referralBy.position}</div>
                <div className='p-1 flex justify-between'><div>Employee Email: </div>{card.referralBy.email}</div>
            </div>
        </div> */}
        <div onClick={() => {
            handleSubmit()
            setApplied(!applied)
        }} className='text-center p-2'><button disabled={applied} className={`${applied ? 'bg-gray-300' : ''} w-5/6 mx-auto text-center bg-blue-400 p-2 rounded-lg text-white`}>{applied ? 'Applied' : 'Apply for this Referral'}</button></div>
    </div>
  )
}

export default ReferralDetails