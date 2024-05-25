// import React from 'react';
// import { Route, Routes } from 'react-router-dom';

// function AdminPlaceholder() {
//   return <div>Admin Section Coming Soon</div>;
// }

// function Adminrouter() {
//   return (
//     <Routes>
//       <Route path="/placeholder" element={<AdminPlaceholder />} />
//       {/* Add more admin routes here */}
//     </Routes>
//   );
// }

// export default Adminrouter;
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Loginpage from '../Components/Login/Loginpage'; // Assuming Loginpage.js is correctly placed in the Login folder

// function Adminrouter() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/login" element={<Loginpage />} />
//         {/* Add more admin routes here */}
//       </Routes>
//     </div>
//   );
// }

// export default Adminrouter;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loginpage from '../Pages/Admin/Loginpage'

function Adminrouter() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default Adminrouter;
