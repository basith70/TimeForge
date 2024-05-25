import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signuppage from '../Pages/User/Signuppage';
import Loginpage from '../Pages/User/Loginpage';
import Homepage from '../Pages/User/Homepage';
import Profilepage from '../Pages/User/Profilepage';
import Productlistpage from '../Pages/User/Productlistpage';
import SingleproductListPage from '../Pages/User/Singleproductlistpage';
import Cartpage from '../Pages/User/Cartpage';
import Whishlistpage from '../Pages/User/Whishlistpage';
import Catogerypage from '../Pages/User/Catogerypage'

function Userrouter() {
  return (
    <Routes>
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/catogery" element={<Catogerypage />} />
      <Route path="/profile" element={<Profilepage />} />
      <Route path="/productlist" element={<Productlistpage />} />
      <Route path="/singleproduct" element={<SingleproductListPage />} />
      <Route path="/cart" element={<Cartpage />} />
      <Route path="/whishlist" element={<Whishlistpage />} />
    </Routes>
  );
}

export default Userrouter;
