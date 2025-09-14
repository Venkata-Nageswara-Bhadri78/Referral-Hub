import React, { useState } from 'react'
import NavbarItems from './NavbarItems'
import { CgProfile } from "react-icons/cg";
import { MdMenuOpen } from "react-icons/md";


const Navbar = ({referralType, userName}) => {

  const [displayItems, setDisplayItems] = useState(false);
  return (
    <div>
        <div className='md:hidden bg-white shadow-2xl px-3 p-2 flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <div><CgProfile /></div>
                <div>{userName}</div>
            </div>
            <div onClick={() => {setDisplayItems(!displayItems)}}><MdMenuOpen /></div>
        </div>
        <NavbarItems refferalType={referralType} displayItems={displayItems}/>
    </div>
  )
}

export default Navbar