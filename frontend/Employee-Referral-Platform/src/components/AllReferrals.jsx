import React, { useEffect, useState } from 'react'
import ReferralCard from './ReferralCard';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, "");

const AllReferrals = ({email, isHomePage=false}) => {
    // const isHomePage = true;

    const [referrals, setReferrals] = useState([]);
    // console.log(referrals);
    useEffect(() => {
        if (!email) return;
        const fetchReferrals = async () => {
            try{                
                const response = await fetch(`${API_URL}/all-referrals`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({email: email})
                })
                const data = await response.json();

                setReferrals(data.alldata || []);
            }
            catch(err){
                return console.log(err.message);
            }
        }
        fetchReferrals();
    }, [email])
    // console.log("Hai: ")
    // console.log(referrals);
    if(referrals.length===0){
      return (
        <div className={`${isHomePage ? 'min-h-40' : ''} flex flex-col justify-center items-center gap-5`}>
          <div className='flex text-2xl min-h-screen-footer'>No Referrals Posted by AnyOne by Now</div>
          <Link to={'/ManualReferrals'}><div><button className='bg-black p-1 text-white'>Apply for Other Refferals</button></div></Link>
        </div>
      )
    }

    return (
        <div className='bg-gray-300 p-2'>
            <div className={`${isHomePage ? 'flex-row overflow-x-auto' : 'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4'} flex gap-3`}>
            {referrals.map(card => {
              return (
                  <ReferralCard key={card.refer_id} card = {card}/>
              )
          })}
          </div>
        </div>
    )
}

export default AllReferrals

