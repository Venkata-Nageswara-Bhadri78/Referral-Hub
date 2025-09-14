import React from 'react'
import DashBoard from '../components/DashBoard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomePage = ({setUser}) => {
  return (
    <div>
        <DashBoard setUser={setUser}/>
    </div>
  )
}

export default HomePage