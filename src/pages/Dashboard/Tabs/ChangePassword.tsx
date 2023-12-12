import React, { useState } from 'react';
import './ChangePassword.scss';
import { PrimaryButton } from '@components/Buttons/Buttons';

const ChangePassword = () => {
  const [oldPassword, seOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [matchStatus, setMatchStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: '', success: false });

  const updateOldPassword = (oldPass: string) => {
    seOldPassword(oldPass);
  };

  const updateNewPassword = (newPass: string) => {
    setNewPassword(newPass);
  };

  const updateConfirmPassword = (confirmPass: string) => {
    setConfirmPassword(confirmPass);
    if (confirmPass === '') {
      setMatchStatus('');
      return;
    }
    if (confirmPass === newPassword) {
      setMatchStatus('successOutline');
      return;
    }
    setMatchStatus('errorOutline');
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="resetPassword">
      <form className="resetPasswordBox" onSubmit={handleSubmit}>
        <div className="topleft">
          <h3>Change Password</h3>
          <h3 className={status.success ? 'successMesg' : 'errorMesg'}>
            {status.message}{' '}
          </h3>
        </div>
        <div className="inpBox">
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => updateOldPassword(e.target.value)}
          />
        </div>
        <div className="inpBox">
          <input
            className={matchStatus}
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => updateNewPassword(e.target.value)}
          />
          <input
            className={matchStatus}
            type="text"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => updateConfirmPassword(e.target.value)}
          />
        </div>
        <div className="submition">
          <PrimaryButton name="Save" type="submit" onClick={null} />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
