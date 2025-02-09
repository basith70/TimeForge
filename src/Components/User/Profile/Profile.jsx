import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [userInfo, setUserInfo] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    password: '',
    confirmPassword: '',
    phone: '123-456-7890',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Add save functionality here
    console.log('User info saved', userInfo);
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-div">
        <h2>Edit Profile</h2>
        <div className="profile-form">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={userInfo.username}
            onChange={handleChange}
          />
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={userInfo.confirmPassword}
            onChange={handleChange}
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
      <div className="faq-div">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>How can I reset my password?</h4>
          <p>Click on the "Forgot Password" link on the login page and follow the instructions.</p>
        </div>
        <div className="faq-item">
          <h4>How can I change my email address?</h4>
          <p>You can change your email address in the profile section by editing the email field and saving the changes.</p>
        </div>
        <div className="faq-item">
          <h4>How can I contact customer support?</h4>
          <p>You can contact customer support through the contact form on our website or by calling our support number.</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

