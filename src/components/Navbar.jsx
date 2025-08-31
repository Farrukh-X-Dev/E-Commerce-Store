import React from 'react'
import { site_images, nav_items } from '../config.js'
import { BiCart, BiLogoInstagramAlt, BiLogoTwitter, BiLogOut, BiLogoYoutube, BiSearch, BiStar } from 'react-icons/bi'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {

  let navigate = useNavigate()

  let nav_icons = [
    { name: 'Search', icons: BiSearch },
    { name: 'Cart', icons: BiCart },
    { name: 'Star', icons: BiStar },
    { name: 'LogOut', icons: BiLogOut },
  ]

  let social_icons = [
    { name: BiLogoTwitter },
    { name: BiLogoInstagramAlt },
    { name: BiLogoYoutube },

  ]

  const actions = {
    Search: () => Searching,
    Cart: () => showCart,
    Star: () => showFavourites,
    LogOut: () => LogoutUser,
  }

  let LogoutUser = () => {
    localStorage.setItem('User', false);
    navigate('/login')
  }

  let Searching = () => {
    toast.warning('Working on It')
  }

  let showCart = () => {
    toast.warning('Working on It')
  }

  let showFavourites = () => {
    toast.warning('Working on It')
  }

  return (
    <div className='flex justify-between items-center h-20 px-10 shadow-2xl'>
      <Link to='/'> <img src={site_images.logo} alt="Logo" /> </Link>

      <div className='flex gap-10 text-xl'>
        {nav_items.map((name, index) => (
          <NavLink className={({ isActive }) => isActive ? 'text-[#fd491c]' : ''} key={index} to={name.path}>{name.element}</NavLink>
        ))}
      </div>

      <div className='flex gap-4  '>
        {social_icons.map((icons, index) => (
          <div key={index} className='p-3 bg-gray-200 rounded-full flex items-center justify-center  '> {<icons.name size={22} />}  </div>
        ))}
      </div>

      <div className='flex gap-15 '>
        <div className='flex gap-4'>
          {nav_icons.map((icons, index) => (
            <div key={index} onClick={actions[icons.name]?.()} className='p-3 bg-gray-200 rounded-full flex items-center gap-7 justify-center'>
              {<icons.icons size={22} />}
            </div>
          ))}
        </div>




      </div>
    </div>
  )
}

export default Navbar