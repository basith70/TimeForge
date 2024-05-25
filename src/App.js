// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Userrouter from './Route/Userrouter';
// import Adminrouter from './Route/Adminrouter';
// import Homepage from './Pages/Homepage';

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/*" element={<Userrouter />} />
//           <Route path="/admin/*" element={<Adminrouter />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Userrouter from './Route/Userrouter';
import Adminrouter from './Route/Adminrouter';
import Homepage from './Pages/User/Homepage';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/*" element={<Userrouter />} />
          <Route path="/admin/*" element={<Adminrouter />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

