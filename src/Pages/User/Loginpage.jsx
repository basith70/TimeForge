import React from 'react';
import Login from '../../Components/User/Login/Login';
import Header from '../../Components/User/Header/Header';
import Footer from '../../Components/User/Footer/Footer';
function Loginpage() {
  return (
    <div>
      <Header/>
      <Login/>
      <Footer/>
      <h1>Admin Login</h1>
      {/* Add login form or content here */}
    </div>
  );
}

export default Loginpage;





