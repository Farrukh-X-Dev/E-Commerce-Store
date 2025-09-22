import React, { useState } from 'react'
import { site_images } from '../config'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase.js'
import { toast } from 'react-toastify'
import { BiLoader } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { GrGoogle } from 'react-icons/gr'


const Signup = () => {

    const [user , setUser] = useState({
      username :  '' ,
      email : '' ,
      password : '' ,
    })
    const [Loader , setLoader] = useState(false)
    const navigate = useNavigate()
    let documentTitle = "Sign up - Om Mart";
    document.title = documentTitle;

    let submitHandler = (e) =>{

        e.preventDefault();
        setLoader(true)

        createUserWithEmailAndPassword(auth , user.email , user.password )
        .then((userCredential) => {
          const user = userCredential.user.email.split('@')[0].toUpperCase();
          toast( 'Hello ' + user )
          localStorage.setItem('User' , true)
          navigate('/')
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage.split(':')[1])
        }).finally(()=>{
          setLoader(false)          
        })
        ;
        form.reset()
    }
  return (
    <>
      <section className="bg-gray-10 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold outline-none">
            <img className="w-45 h-15 mr-2" src={site_images.logo} alt="logo" />
          </a>
          <div className="w-full rounded-2xl border border-gray-200 bg-white md:mt-0 sm:max-w-md xl:p-4 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.2)] shadow-orange-200">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={submitHandler}>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-500">
                    Your Username
                  </label>
                  <input
                    type="text"
                    onChange={(e)=>setUser( {...user , username: e.target.value})}
                    value = {user.username}
                    placeholder="your_username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 outline-none rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">
                    Your email
                  </label>
                  <input
                    type="email"
                    onChange={(e)=>setUser( {...user , email: e.target.value})}
                    value = {user.email}
                    placeholder="name@company.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 outline-none rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-500">
                    Password
                  </label>
                  <input
                    type="password"
                    onChange={(e)=>setUser( {...user , password: e.target.value})}
                    value = {user.password}
                    placeholder="......."
                    className="bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 outline-none text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white hover:bg-orange-600 outline-none bg-[#fd491c] rounded-lg text-base px-5 py-2.5 text-center font-semibold"
                >
                  {Loader ? <BiLoader className='animate-spin mx-auto text-lg ' /> : 'Sign up'}
                </button>
                <div className='flex justify-center gap-10'>
                  <button className='border px-8 py-2.5 text-[#fd491c] rounded-lg flex items-center gap-1.5 hover:bg-[#fd491c] hover:text-white duration-300 ease-in-out '>
                     <GrGoogle size={18} />Google</button>
                  <button className='border px-8 py-2.5 text-[#fd491c] rounded-lg flex items-center gap-1.5 hover:bg-[#fd491c] hover:text-white duration-300 ease-in-out '>
                     <BsGithub size={18} /> Git hub</button>
                </div>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium outline-none text-[#fd491c] hover:underline">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
