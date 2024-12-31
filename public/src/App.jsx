import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Correct import

import Chat from './pages/Chat/Chat'; // Import your Chat component
import Login from './pages/login/Login';
import Singup from './pages/Signup/Signup' // Import your Login component
import Signup from './pages/Signup/Signup';

const App = () => {
  return (
    <BrowserRouter> {/* Correct casing for BrowserRouter */}
      <Routes>
        {/* Use the `element` prop to pass the component */}
        <Route path="/" element={<Chat />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={< Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
