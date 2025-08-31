// Navbar.jsx - Top navigation component
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Navbar = ({onGenraClick}) => {
    const navigate = useNavigate(); // Add this hook

  const { setShowLogin } = useContext(AppContext);

  const handleLoginClick = () => {
    setShowLogin(true)
  };



  return (
    <div className='flex items-center justify-between px-4 py-4 '>
      <div className='flex items-center space-x-2'>
        <span className="flex items-center">
          <lord-icon
            src="https://cdn.lordicon.com/olfvnikl.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#e4e4e4"
            style={{width: '24px', height: '24px'}}
          />
        </span>
        <button 
          onClick={onGenraClick}
          className='text-white font-light hover:text-orange-400 transition-colors duration-200 cursor-pointer'
        >
          Genre
        </button>
      </div>
                
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src={assets.horror_logo} 
          alt="horror_logo"
          className='w-8 h-8 object-contain'
        />
      </div>
                
      <div className='flex items-center'>
        <button
          onClick={handleLoginClick}
          className='group cursor-pointer px-5 py-2 bg-gradient-to-r from-red-950 via-amber-900 to-yellow-800 border border-amber-800/60 text-amber-100 font-medium text-sm rounded-md shadow-md shadow-amber-950/40 hover:shadow-lg hover:shadow-amber-800/30 hover:from-red-900 hover:via-amber-800 hover:to-yellow-700 hover:border-amber-700/80 hover:text-amber-50 transition-all duration-400 ease-out transform hover:scale-[1.02] tracking-normal '
        >
          <div className='bg-gradient-to-r from-red-900/5 via-yellow-700/8 to-amber-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400'></div>
                    
          <span className='relative z-10'>Login</span>
                    
          <div className='absolute  rounded-md border border-yellow-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400'></div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;