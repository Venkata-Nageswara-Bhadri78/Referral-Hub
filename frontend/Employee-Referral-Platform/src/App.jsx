import { use, useEffect, useState } from 'react'
import AuthenticationForm from './components/AuthenticationForm'
import DashBoard from './components/DashBoard'
import ReferralCard from './components/ReferralCard'
import ReferralDetails from './components/ReferralDetails'
import AddReferral from './components/AddReferral'
import HomePage from './pages/HomePage'
import PostedReferrals from './components/PostedReferrals'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { Navigate } from 'react-router-dom'
import SubmittedReferrals from './components/SubmittedReferrals'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ManualReferrals from './components/ManualReferrals'
import AllReferrals from './components/AllReferrals'

function App() {
  const [user, setUser] = useState(null);
  let [referralType, setReferralType] = useState('seeker');

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  // console.log("App.jsx Refferal TYpe : "+referralType)
  //
  
  return (
    <div className='flex flex-col min-h-screen'>
      {user && <Navbar referralType={referralType} userName={ "GUEST" || user.split('@')[0]} />}
      <main className='flex-1 overflow-y-auto bg-gray-300'>
        <Routes>
          <Route path='/' element={!user ? <AuthenticationForm referralType={referralType} setReferralType={setReferralType} user={user} setUser={setUser} /> : <DashBoard referralType={referralType} user={user} setUser={setUser} />} />
          <Route path='/dashboard' element={user ? <DashBoard referralType={referralType} user={user} setUser={setUser}/> : <Navigate to='/' />} />
          <Route path='/ManualReferrals' element={<ManualReferrals />} />
          <Route path='/PostedReferrals' element={<PostedReferrals email={user}  />} />
          <Route path='/SubmitedReferrals' element={<SubmittedReferrals />} />
          <Route path='/AddReferral' element={<AddReferral email={user}/>} />
          <Route path='/ReferralDetails/:card_id' element={<ReferralDetails user={user} />} />
          <Route path='/SubmittedReferrals' element={<SubmittedReferrals email={user} />} />
          <Route path='/AllReferrals' element={<AllReferrals email={user} />} />
        </Routes>
      </main>
      {user && <Footer />}
    </div>
  )
}

export default App
