import React, { useEffect, useState } from 'react'
import ReferralCard from './ReferralCard';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, "");

const SubmitedReferrals = ({email, isHomePage=false}) => {

    const [submitted, setSubmitted] = useState([]);
    useEffect(() => {
        if (!email) return;
        const fetchSubmitted = async () => {
            try{                
                const response = await fetch(`${API_URL}/SubmittedReferrals`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({email: email})
                })
                if (!response.ok) {
                    throw new Error(`Server error: ${response.status}`);
                }
                const data = await response.json();
                  
                setSubmitted(data.submitted || []);
            }
            catch(err){
                return console.log(err.message);
            }
        }
        fetchSubmitted();
    }, [email])

    // console.log("Submitted Details");
    // console.log(submitted)

    // console.log("Hai: ")
    // console.log(referrals);
    if(submitted.length===0){
      return (
        <div className={`${isHomePage ? 'min-h-40' : ''} flex flex-col justify-center items-center gap-5`}>
          <div className='flex text-2xl min-h-screen-footer'>No Referrals Applied by You</div>
          <Link to={'/ManualReferrals'}><div><button className='bg-black p-1 text-white'>Apply For New Refferals</button></div></Link>
        </div>
      )
    }

    return (
        <div className='bg-gray-300'>
            <div className={`${isHomePage ? 'flex-row overflow-x-auto' : 'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'} flex gap-3`}>
            {submitted.map(card => {
              return (
                  <ReferralCard key={card.refer_id} card = {card}/>
              )
          })}
          </div>
        </div>
    )
}

export default SubmitedReferrals

