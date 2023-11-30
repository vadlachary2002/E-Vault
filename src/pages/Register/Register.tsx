import React, { useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const updateImage = (file: any) => {
        const url = URL.createObjectURL(file);
        setFile(url);
    };
    const goBack = () => {
        navigate(-1);
    };
    return (
        <div className="register">
            <form className="registerBox">
                <div className="top">
                    <div className="progressBar">
                        <div />
                    </div>
                    <h1>Register</h1>
                </div>
                <div className="middle">
                    <div className="left box">
                        <div className="inputBox">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="userType">UserType</label>
                            <select name="userType" id="userid">
                                <option value="">Select</option>
                                <option value="Lawyer">Lawyer</option>
                                <option value="Client">Client</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender">
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <label htmlFor="mobile">Mobile No</label>
                            <input type="text" name="mobile" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="adhar">Adhar No</label>
                            <input type="text" name="adhar" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="mail">Email </label>
                            <input type="email" name="mail" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />
                        </div>
                        <div className="inputBox">
                            <label htmlFor="cpassword">Confirm</label>
                            <input type="text" name="cpassword" />
                        </div>
                    </div>
                    <div className="right box">
                        <div className="preview">
                            <img src={file} alt="" />
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
                    <input type="button" value="Cancel" onClick={goBack} />
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
};

export default Register;
