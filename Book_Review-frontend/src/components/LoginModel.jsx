import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const LoginModel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const decoded = jwtDecode(token);
    const now = Date.now() / 1000;

    if (decoded.exp < now) {
      localStorage.removeItem("token");
      navigate("/login");
    } else {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <img src='/logo.webp' />
    </div>
  );
};

export default LoginModel;
