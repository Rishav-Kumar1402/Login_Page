import React, { useState } from 'react'
import loginImg from '../assets/login.jpg'
import {EyeInvisibleOutlined,EyeOutlined} from "@ant-design/icons";
export default function Login(){
const [password,setPassword]=useState("");
const [visible,setVisible]=useState(false);
  return (
  
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
      <img className='w-full h-full object-cover' src={loginImg} alt=''/>
      </div>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[600px] w-full mx-auto p-24 px-8 shadow-2xl rounded-lg'>
          <h2 className='text-3xl dark:text-black font-bold text-center'>Login</h2>
          <div className='flex flex-col text-gray-800 py-2'>
            <label className='font-semibold'>Login ID</label>
            <input className='rounded-lg bg-slate-100 mt-2 p-1 focus:border-slate-300 border-2 shadow-md focus:bg-slate-200 focus:outline-none' type="text" placeholder='Enter Login ID'/>
          </div>
        
          <label className='font-semibold'>Password</label>
<div className='flex justify-between'>
  <div className='relative w-full'>
    <input value={password} id="password" type={visible ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} className='rounded-lg bg-slate-100 mt-2 p-1 pr-8 w-full focus:border-slate-300 border-2 shadow-md focus:bg-slate-200 focus:outline-none' placeholder='Enter Password' />
    <div className='absolute inset-y-0 right-0 flex items-center p-2 mt-2' onClick={()=>setVisible(!visible)}>
      {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
    </div>
  </div>
</div>

          <div className='flex justify-between text-gray-500 py-2'>
            <p className='flex items-center'><input className='mr-2' type="checkbox"/>Remember Me</p>
            <p className='text-orange-500'><a href='#'>Change Password</a></p>
            </div>
            <p className='flex items-center text-gray-500'><input className='mr-2' type="checkbox"/>Agree to<span className='text-orange-500 ml-1 underline'><a href='#'>Terms & Conditions</a></span></p>
          <div className='flex justify-center'>
          <button className='my-5 py-2 w-1/2 bg-blue-600 shadow-lg rounded-lg text-white'>Login</button>
          </div>
        
          <div className='text-gray-500 text-center'>
            Don't have account?<span className='text-orange-500 ml-1 underline font-semibold'><a href='#'>Register Here</a></span>
          </div>
        </form>
      </div>
    </div>
  
  );
}

