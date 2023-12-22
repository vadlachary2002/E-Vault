import React, { useState } from 'react';
import './dashboard.scss';
import { ChangePassword, PrivateKey } from './Tabs';
import Register from '../Register/Register';
import { User } from '../../models/User';

const defaultUser: User = {
  firstname: '',
  lastname: '',
  userType: '',
  gender: '',
  mobile: null,
  adhar: null,
  email: '',
  password: '',
  profileImage: '',
};
const Dashboard = () => {
  const [tab, setTab] = useState('edit');
  const [user, setUser] = useState(defaultUser);

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
