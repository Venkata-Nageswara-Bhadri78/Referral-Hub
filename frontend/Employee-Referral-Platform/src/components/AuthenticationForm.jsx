import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

import { useNavigate } from 'react-router-dom';

const AuthenticationForm = ({referralType, setReferralType, user, setUser}) => {
  const navigate = useNavigate();


  const [selectedTab, setSelectedTab] = React.useState(0);
  // const [referralType, setReferralType] = React.useState('seeker');
  const [signup, setSignup] = React.useState(true);

  // console.log(referralType)
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (newValue === 0) {
      setReferralType('seeker');
    } else if (newValue === 1) {
      setReferralType('provider');
    }
  };

  return (
    <div className='flex justify-center items-center pt-6'>
      <Tabs
        variant="outlined"
        aria-label="Referral Type"
        value={selectedTab}
        onChange={handleTabChange}
        sx={{ width: 343, borderRadius: 'lg', boxShadow: 'sm', overflow: 'auto' }}
      >
        <TabList
          disableUnderline
          tabFlex={1}
          sx={{
            [`& .${tabClasses.root}`]: {
              fontSize: 'sm',
              fontWeight: 'lg',
              [`&[aria-selected="true"]`]: {
                color: 'primary.500',
                bgcolor: 'background.surface',
              },
              [`&.${tabClasses.focusVisible}`]: {
                outlineOffset: '-4px',
              },
            },
          }}
        >
          <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
            Seeking Referral
          </Tab>
          <Tab disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
            Providing Referral
          </Tab>
        </TabList>

        <TabPanel value={0}>
          {signup ? <SignUpForm referralType={referralType} signup={signup} setSignup={setSignup}/> : <LoginForm user={user} setUser={setUser} referralType={referralType} signup={signup} setSignup={setSignup}/>}
        </TabPanel>
        <TabPanel value={1}>
          {signup ? <SignUpForm referralType={referralType} signup={signup} setSignup={setSignup}/> : <LoginForm user={user} setUser={setUser} referralType={referralType} signup={signup} setSignup={setSignup}/>}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AuthenticationForm;
