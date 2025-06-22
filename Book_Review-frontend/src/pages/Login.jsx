import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

  const [errorEmail, setErrorEmail] = useState("")
  const [errorPass, setErrorPass] = useState("")

  const navigate = useNavigate()

  const handleLogin = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/users/login",
        {email,password:pass}
      )
      console.log(response.data)
      localStorage.setItem("token", response.data.token)

      navigate('/home')

    } catch (error) {
      console.log("frontEnd_console - login error : ",error.status)
       
      if(error.status === 404){
        setErrorEmail("Invalid Email id and password")
        setEmail("")
        setPass("")
      }
      else if(error.status === 401){
        setPass("")
        setErrorPass("Invalid Credential")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form 
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 underline">
          Welcome Back
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e)=>{setEmail(e.target.value); setErrorEmail("")}}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-red-400">{errorEmail}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e)=>{setPass(e.target.value); setErrorPass("")}}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p className="text-red-400">{errorPass}</p>
        </div>

        <div className="text-right">
          <p className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </p>
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
          type="submit"
        >
          Log In
        </button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?
          <span
            onClick={()=>navigate('/register')}
            className="ml-1 text-blue-600 font-medium hover:underline"
          >
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
