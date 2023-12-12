import React, { useState } from 'react';
import './dashboard.scss';
import { ChangePassword, PrivateKey } from './Tabs';
import Register from '../Register/Register';

const defaultUser = {
  firstName: 'nagaraju',
  lastName: 'chary',
  userType: 'Lawyer',
  gender: 'Male',
  mobile: 7702091588,
  adhar: 512045089268,
  email: 'chary@gmail.com',
};
const Dashboard = () => {
  const [tab, setTab] = useState('edit');
  return (
    <div>
      <div className="userDashboard">
        <div className="listItems">
          <h1>User Dashboard</h1>
          <ul>
            <li
              className={tab === 'edit' ? 'active' : ''}
              onClick={() => setTab('edit')}
            >
              Edit Profile
            </li>
            <li
              className={tab === 'private' ? 'active' : ''}
              onClick={() => setTab('private')}
            >
              Private Key
            </li>
            <li
              className={tab === 'settings' ? 'active' : ''}
              onClick={() => setTab('settings')}
            >
              Settings
            </li>
          </ul>
        </div>
        {tab == 'private' && <PrivateKey />}
        {tab == 'settings' && <ChangePassword />}
        {tab == 'edit' && <Register isEdit={true} user={defaultUser} />}
      </div>
    </div>
  );
};
export default Dashboard;
