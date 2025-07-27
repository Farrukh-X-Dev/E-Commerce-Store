import React, { useState } from 'react'
import { site_images } from '../config'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase.js'
import { toast } from 'react-toastify';
import { BiLoader } from 'react-icons/bi';


const Login = () => {

  const [userData , setUser] = useState({
    email : '' ,
    password : '' ,
  })
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate()

  let submitHandler = (e)=>{
    e.preventDefault()
    setLoader(true)
    signInWithEmailAndPassword(auth, userData.email, userData.password)
    .then((userCredential) => { 
      const user = userCredential.user.email.split('@')[0].toLocaleUpperCase();
      toast('Hello ' + user)
      navigate('/')

  })
  .catch((error) => {
    const errorMessage = error.message.split(':')[1];
    toast.error(errorMessage)
  }).finally(()=>{
    setLoader(false)
  }) 

    
  }
  
  return (
    <div>
    <section className="bg-gray-10 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold outline-none">
                <img className="w-45 h-15 mr-2 " src={site_images.logo} alt="logo" />
             </a>
             <div className="w-full rounded-2xl  border border-gray-200 bg-white md:mt-0 sm:max-w-md xl:p-6 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.2)] shadow-orange-200 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                      Sign in to your account
                    </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                 <div>
                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">Your email</label>
                     <input type="email" value={userData.email} onChange={(e)=>setUser({ ...userData ,  email: e.target.value})} className="bg-gray-50 border placeholder-gray-400 border-gray-300 text-gray-900 outline-none rounded-lg block w-full p-2.5" placeholder="name@company.com" required="" />
                 </div>
                 <div>
                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-500 ">Password</label>
                    <input type="password" value={userData.password} onChange={(e)=> setUser({ ...userData , password : e.target.value})} placeholder="......." className="text-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 " required="" />
                </div>
                 <div className="flex items-center justify-between">
                     <div className="flex items-start">
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline outline-none text-[#fd491c]">Forgot password?</a>
                </div>  
                  <button type="submit" className=" w-full text-white hover:bg-[#fd491cee] outline-none  bg-[#fd491c] rounded-lg text-base px-5 py-2.5 text-center font-semibold">
                    { loader ? <BiLoader className='animate-spin mx-auto' /> : 'Sign in'}
                    </button>
                     <p className="text-sm font-light text-gray-500 dark:text-gray-400  ">
                         Don’t have an account yet? <Link to='/signup' className="font-medium outline-none text-primary-600 hover:underline text-[#fd491c]">Sign up</Link>
                    </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Login