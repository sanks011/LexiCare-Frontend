import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)
  
  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }
  
  return (
    <div className='flex items-center justify-between text-sm py-6 mb-8 border-b border-b-[#ADADAD]/30'>
      {/* Logo */}
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Healthcare Logo" />
      
      {/* Desktop Navigation */}
      <ul className='md:flex items-center gap-8 font-medium hidden'>
        <NavLink to='/' className={({isActive}) => isActive ? 'text-[#1CBBB4]' : 'hover:text-[#1CBBB4] transition-colors'}>
          <li className='py-1'>HOME</li>
        </NavLink>
        <NavLink to='/doctors' className={({isActive}) => isActive ? 'text-[#1CBBB4]' : 'hover:text-[#1CBBB4] transition-colors'}>
          <li className='py-1'>ALL DOCTORS</li>
        </NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? 'text-[#1CBBB4]' : 'hover:text-[#1CBBB4] transition-colors'}>
          <li className='py-1'>ABOUT</li>
        </NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? 'text-[#1CBBB4]' : 'hover:text-[#1CBBB4] transition-colors'}>
          <li className='py-1'>CONTACT</li>
        </NavLink>
      </ul>
      
      {/* User Menu / Login Button */}
      <div className='flex items-center gap-4'>
        {token && userData ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <div className='w-10 h-10 rounded-full overflow-hidden border-2 border-[#1CBBB4]'>
              <img className='w-full h-full object-cover' src={userData.image} alt="User profile" />
            </div>
            <img className='w-2.5 transition-transform group-hover:rotate-180 duration-300' src={assets.dropdown_icon} alt="Dropdown" />
            
            {/* Dropdown Menu */}
            <div className='absolute top-0 right-0 pt-14 text-base font-medium z-20 hidden group-hover:block'>
              <div className='min-w-52 bg-white rounded-xl shadow-xl flex flex-col gap-2 p-4 border border-gray-100'>
                <p onClick={() => navigate('/my-profile')} 
                   className='hover:bg-gray-50 hover:text-[#1CBBB4] cursor-pointer p-2 rounded-lg transition-colors'>
                  My Profile
                </p>
                <p onClick={() => navigate('/my-appointments')} 
                   className='hover:bg-gray-50 hover:text-[#1CBBB4] cursor-pointer p-2 rounded-lg transition-colors'>
                  My Appointments
                </p>
                <hr className='my-1 border-gray-100' />
                <p onClick={logout} 
                   className='hover:bg-red-50 hover:text-red-500 cursor-pointer p-2 rounded-lg transition-colors'>
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => navigate('/login')} 
            className='bg-gradient-to-r from-[#1CBBB4] to-[#0D8B86] text-white px-8 py-3 rounded-full font-medium hidden md:block hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300'
          >
            Create account
          </button>
        )}
        
        {/* Mobile Menu Button */}
        <div onClick={() => setShowMenu(true)} className='md:hidden cursor-pointer p-2 hover:bg-gray-100 rounded-full'>
          <img className='w-6' src={assets.menu_icon} alt="Menu" />
        </div>
        
        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/50 z-10 ${showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}
             onClick={() => setShowMenu(false)}>
        </div>
        
        {/* Mobile Menu Drawer */}
        <div className={`md:hidden fixed top-0 bottom-0 right-0 w-[80%] max-w-sm bg-white shadow-xl z-20 transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
          <div className='flex items-center justify-between p-6 border-b border-gray-100'>
            <img src={assets.logo} className='w-36' alt="Logo" />
            <button 
              onClick={() => setShowMenu(false)}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors'
            >
              <img src={assets.cross_icon} className='w-6' alt="Close" />
            </button>
          </div>
          
          <ul className='flex flex-col gap-2 p-6'>
            <NavLink onClick={() => setShowMenu(false)} to='/' 
                    className={({isActive}) => `px-4 py-3 rounded-lg ${isActive ? 'bg-[#1CBBB4]/10 text-[#1CBBB4]' : 'hover:bg-gray-50'}`}>
              <p className='font-medium'>HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'
                    className={({isActive}) => `px-4 py-3 rounded-lg ${isActive ? 'bg-[#1CBBB4]/10 text-[#1CBBB4]' : 'hover:bg-gray-50'}`}>
              <p className='font-medium'>ALL DOCTORS</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'
                    className={({isActive}) => `px-4 py-3 rounded-lg ${isActive ? 'bg-[#1CBBB4]/10 text-[#1CBBB4]' : 'hover:bg-gray-50'}`}>
              <p className='font-medium'>ABOUT</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'
                    className={({isActive}) => `px-4 py-3 rounded-lg ${isActive ? 'bg-[#1CBBB4]/10 text-[#1CBBB4]' : 'hover:bg-gray-50'}`}>
              <p className='font-medium'>CONTACT</p>
            </NavLink>
            
            {!token && (
              <button 
                onClick={() => {
                  setShowMenu(false);
                  navigate('/login');
                }} 
                className='bg-gradient-to-r from-[#1CBBB4] to-[#0D8B86] text-white px-4 py-3 rounded-lg font-medium mt-4 hover:shadow-lg transition-all duration-300'
              >
                Create account
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar