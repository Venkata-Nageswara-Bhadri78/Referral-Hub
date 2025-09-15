
import React, { useEffect, useState } from 'react'
import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, "");

const ReferralCard = ({card}) => {

  const [cardu, setCardu] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetch(`${API_URL}/CardDetails`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({card_id: '10019'})
      })

      const { cardDetails } = await details.json();
      // console.log(cardDetails);
      setCardu(cardDetails);
    }
    fetchDetails();
  }, []);
  
  
  
  
  
  
  
  return (
    
    <div key={card.id} className='shadow-xl p-2 flex text-[10px] min-w-50 bg-white min-h-[40px] flex-col justify-center rounded-lg'>
      <div className='p-1 font-semibold text-center text-lg'>{card.jobTitle || card.refer_job_title}</div>
      <div className='p-1 text-gray-400 flex items-center gap-2'><FaBuilding />{card.company || card.refer_company}</div>
      <div className='p-1 flex justify-between'>
          <div className='flex items-center gap-2'><FaLocationDot /> {card.location || card.refer_location}</div>
          <div>{card.employmentType || card.refer_type}</div>    
      </div>
      <div className='p-1 flex justify-between'>
          <div>{card.salaryRange || card.refer_salary}</div>
          <div>{card.postedDate || card.refer_postedOn}</div>
      </div>
      <div className='p-1 text-justify'>{card.description && card.description.slice(0,200) || card.refer_description && card.refer_description.slice(0,200)}...</div>
      <Link to={`/ReferralDetails/${card.refer_id || card.id}`} state={{card: card || cardu}} ><div className='w-5/6 mx-auto text-center bg-blue-400 p-2 rounded-lg text-white'><button>Show More Info</button></div></Link>
  </div>
  )
}

export default ReferralCard
