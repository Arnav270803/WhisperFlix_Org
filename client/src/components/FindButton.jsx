import React from 'react'
import { useNavigate } from 'react-router-dom';

const FindButton = () => {
  const navigate = useNavigate();

  const handleFavouriteClick = () => {
    navigate('/favourite');
  };

  return (
    <div className='flex mt-4 justify-center'>
      <button
        onClick={handleFavouriteClick}
        className='rounded-full border border-white/30 transition-all duration-300 px-6 py-2 cursor-pointer hover:bg-white/10 hover:border-white/60 hover:scale-105 backdrop-blur-sm bg-black/20'
      >
        <span className='bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent font-medium'>
          Favourite
        </span>
      </button>
    </div>
  )
}

export default FindButton