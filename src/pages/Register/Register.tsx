import React, { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '@components/Buttons/Buttons';
import { User } from '../../models/User';
import { register } from '@services/User';

interface RegisterProps {
  isEdit?: boolean;
  user?: User;
}
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
const Register = (props: RegisterProps) => {
  const { isEdit, user } = props;
  const [userDetails, setUserDetails] = useState(user ? user : defaultUser);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(
    userDetails.profileImage ? userDetails.password : './uploads/default.jpg'
  );
  const updateImage = (file: any) => {
    const url = URL.createObjectURL(file);
    setFile(() => {
      setFileUrl(url);
      return file;
    });
  };
  const updateUserDetails = (e: any) => {
    setUserDetails((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { error, data, code } = await register(userDetails, file);
    if (error) {
      console.log('Error');
      return;
    }
    console.log(data, code);
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="register">
      <form className="registerBox" onSubmit={onSubmit}>
        <div className="top">
          <div className="progressBar">
            <div />
          </div>
          <h1>{isEdit ? 'Edit Profile' : 'Register'}</h1>
        </div>
        <div className="middle">
          <div className="left box">
            <div className="inputBox">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstname"
                value={userDetails.firstname}
                onChange={updateUserDetails}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={userDetails.lastname}
                onChange={updateUserDetails}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="userType">UserType</label>
              <select
                name="userType"
                id="userid"
                defaultValue={userDetails.userType}
                onChange={updateUserDetails}
              >
                <option value="">Select</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Client">Client</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="inputBox">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id="gender"
                defaultValue={userDetails.gender}
                onChange={updateUserDetails}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="inputBox">
              <label htmlFor="mobile">Mobile No</label>
              <input
                type="text"
                name="mobile"
                onChange={updateUserDetails}
                value={userDetails.mobile}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="adhar">Adhar No</label>
              <input
                type="text"
                name="adhar"
                onChange={updateUserDetails}
                value={userDetails.adhar}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="mail">Email </label>
              <input
                type="email"
                name="email"
                onChange={updateUserDetails}
                value={userDetails.email}
              />
            </div>
            {!isEdit && (
              <div className="inputBox">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={updateUserDetails}
                />
              </div>
            )}
            {!isEdit && (
              <div className="inputBox">
                <label htmlFor="cpassword">Confirm</label>
                <input type="text" name="cpassword" />
              </div>
            )}
          </div>
          <div className="right box">
            <div className="preview">
              <img src={fileUrl} alt="" />
            </div>
            <label htmlFor="file">Upload</label>
            <input
              type="file"
              hidden
              name="file"
              id="file"
              onChange={(e) => updateImage(e.target.files[0])}
            />
            <input type="text" placeholder="Code" />
            <div className="status">
              <span className="success">Verified</span>
              <span className="error">Error</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <SecondaryButton name="Cancel" onClick={goBack} type="button" />
          <PrimaryButton
            name={isEdit ? 'Save' : 'Register'}
            onClick={null}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
