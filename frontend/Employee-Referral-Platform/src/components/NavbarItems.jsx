import React from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

// <SlLogout />

const NavbarItems = ({refferalType, displayItems}) => {
  // console.log(refferalType=='seeker')
  const styling = 'w-full flex justify-center px-4 p-1.5 bg-blue-300 shadow-4xl border rounded-4xl';
  return (
    <div>
        <ul className={`${displayItems ? 'flex' : 'hidden'} md:flex items-center md:p-2 bg-white flex flex-col md:flex-row md:justify-between md:shadow-4xl`}>
          <Link to={'/'}><li className='border rounded-3xl p-1.5 bg-blue-300 hidden md:block'><CgProfile size={25} /></li></Link>
          <div className='flex flex-col md:flex-row p-3 gap-5'>
            <Link to='/'><li className={styling}>Home</li></Link>
            <Link to='/ManualReferrals'><li className={styling}>Manual Referral</li></Link>
            <Link to='/AllReferrals'><li className={styling}>All Referrals</li></Link>
            <Link to={refferalType==='seeker' ? '/SubmittedReferrals' : '/PostedReferrals'}><li className={styling}>{refferalType=='seeker' ? 'Applied Referrals' : 'Posted Referrals'}</li></Link>
            {refferalType==='provider' && <Link to='/AddReferral'><li className={styling}>Add Referral</li></Link>}
          </div>
        </ul>
    </div>
  )
}

export default NavbarItems