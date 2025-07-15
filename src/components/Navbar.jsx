import React from 'react'
import {site_images , nav_items} from '../config.js'
import { IoCartOutline } from 'react-icons/io5'
import { CiSearch, CiUser } from 'react-icons/ci'
import { BiStar } from 'react-icons/bi'
import { BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  let nav_icons = [
    {name : IoCartOutline} ,
    {name : CiUser} ,
    {name : CiSearch} ,
    {name : BiStar} ,
]

let social_icons = [
    {name : BsTwitter} ,
    {name : BsInstagram} ,
    {name : BsYoutube} ,

]
  return (
    <div className='flex justify-between items-center h-15 px-10'>
      <Link to='/'> <img src={site_images.logo} alt="Logo"/> </Link>
      
      <div className='flex gap-10 text-xl'>
        {nav_items.map((name , index)=>(
          <NavLink className={({isActive}) => isActive ? 'text-[#fd491c]' : ''} key={index} to={name.path}>{name.element}</NavLink>
        ))}
      </div>

      <div className='flex gap-15 '>
          <div className='flex gap-4'>
            {nav_icons.map(( icons , index)=>(
              <div key={index} className='size-10 bg-gray-100 rounded-full flex items-center justify-center'> { <icons.name /> }  </div>
            ))}
          </div>

          <div className='flex gap-4  '>
            {social_icons.map((icons , index)=>(
              <div key={index} className='size-10 bg-gray-100 rounded-full flex items-center justify-center  '> { <icons.name /> }  </div>
            ))}
          </div>


        </div>
    </div>
  )
}

export default Navbar