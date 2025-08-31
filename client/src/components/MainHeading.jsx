// MainHeading.jsx
import React from 'react'

const MainHeading = () => {
  return (
    <div className='flex justify-center pt-8'>
      <div className='text-center'>
        <h1 className='bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent text-8xl font-semibold font-movie-title tracking-wider'>
          UNDERRATED
        </h1>
        <h1 className='bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent text-8xl  font-movie-title tracking-wider'>
          MOVIES
        </h1>
        <p className='text-xl font-light mt-2 tracking-wide font-semibold bg-yellow-300 bg-clip-text text-transparent'>
         " Dive Into Hidden Cinema "
        </p>
      </div>
    </div>
  )
}

export default MainHeading
