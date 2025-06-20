import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home'; // optional
import LoginModel from '../components/LoginModel';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginModel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      {/* add more routes as needed */}
    </Routes>
  );
};

export default Routers;
