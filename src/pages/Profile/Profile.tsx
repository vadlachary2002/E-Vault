import React, { useState } from 'react';
import './profile.scss';

import { ErrorBoundary } from '@components/ErrorBoundary';
import { PrimaryButton } from '@components/Buttons/Buttons';
interface ProfileProp {
  imgUrl: string;
  name: string;
  userType: string;
  status: string;
  connected: boolean;
}
const defaultProfiles: ProfileProp[] = [
  {
    imgUrl: '',
    name: 'Nagaraju Chary',
    userType: 'Lawyer',
    status: 'Connected',
    connected: true,
  },
  {
    imgUrl: '',
    name: 'Rajesh Kottala',
    userType: 'Client',
    status: 'Requested',
    connected: false,
  },
  {
    imgUrl: '',
    name: 'Chary',
    userType: 'Lawyer',
    status: 'Requested',
    connected: false,
  },
  {
    imgUrl: '',
    name: 'Laptop User',
    userType: 'Client',
    status: 'Connected',
    connected: true,
  },
  {
    imgUrl: '',
    name: 'Chefina',
    userType: 'Lawyer',
    status: 'Requested',
    connected: false,
  },
];
const Profile = () => {
  const [profiles, setProfiles] = useState(defaultProfiles);

  return (
    <ErrorBoundary>
      <div className="profilePage">
        <div className="head">
          <div className="col">
            <img src="" alt="" />
            <div className="name">
              <h1>Name XYZ</h1>
              <span> 20 connections</span>
            </div>
          </div>

          <div className="search">
            <input type="text" placeholder="search" />
            <PrimaryButton name="Search" onClick={null} type="button" />
            <select name="connections" id="connections">
              <option value="All">All</option>
              <option value="Requested">Requested</option>
              <option value="Connected">Connected</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
        <div className="body">
          <div className="head">
            <div className="col">Profile</div>
            <div className="col">Name</div>
            <div className="col">User Type</div>
            <div className="col">Status</div>
          </div>
          <div className="list">
            {profiles.map((profile, index) => (
              <div className="each" key={index}>
                <div>
                  {' '}
                  <img src={profile.imgUrl} alt="" />
                </div>
                <div>{profile.name}</div>
                <div>{profile.userType}</div>
                <div className="status">{profile.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Profile;
