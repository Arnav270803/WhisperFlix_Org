// GenraPage.jsx - Genre selection modal component
import React from 'react';

const GenraPage = ({ onClose, onMoviesClick, onSeriesClick }) => {
  return (
    // Full-screen overlay with backdrop blur effect
    <div className='fixed top-0 left-0 right-0 bottom-0 z-30 backdrop-blur-sm bg-black/40 flex justify-center items-center'>
      
      {/* Modal Container with glassmorphism effect */}
      <div className="relative bg-gradient-to-br from-black/80 to-gray-900/80 p-8 rounded-2xl shadow-2xl border border-orange-400/30 max-w-md w-full mx-4 backdrop-blur-md">
        
        {/* Close Button - positioned at top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-400 hover:text-orange-300 text-2xl font-bold transition-colors duration-200"
        >
          ×
        </button>

        {/* Modal Header Section */}
        <div className="text-center mb-8">
          {/* Main title with gradient text effect */}
          <h2 className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent text-3xl font-bold tracking-wider">
            CHOOSE GENRE
          </h2>
          {/* Subtitle with muted styling */}
          <p className="text-white/70 text-sm mt-2 tracking-wide">
            Select your preferred category
          </p>
        </div>

        {/* Options Container */}
        <div className="space-y-4">
          
          {/* Movies Selection Button */}
          <button
            onClick={onMoviesClick}
            className="w-full py-4 px-6 bg-transparent border border-orange-400/50 text-orange-400 font-semibold text-lg rounded-lg hover:bg-orange-400/10 hover:border-orange-300 hover:scale-105 transition-all duration-300 tracking-wide group"
          >
            {/* Button content with icon and text */}
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">🎬</span>
              <span className="group-hover:text-orange-300">MOVIES</span>
            </div>
            {/* Button description */}
            <p className="text-white/60 text-sm mt-1 group-hover:text-white/80">
              Discover underrated films
            </p>
          </button>

          {/* Series Selection Button */}
          <button
            onClick={onSeriesClick}
            className="w-full py-4 px-6 bg-transparent border border-orange-400/50 text-orange-400 font-semibold text-lg rounded-lg hover:bg-orange-400/10 hover:border-orange-300 hover:scale-105 transition-all duration-300 tracking-wide group"
          >
            {/* Button content with icon and text */}
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">📺</span>
              <span className="group-hover:text-orange-300">SERIES</span>
            </div>
            {/* Button description */}
            <p className="text-white/60 text-sm mt-1 group-hover:text-white/80">
              Explore hidden TV gems
            </p>
          </button>

        </div>

        {/* Decorative Corner Elements */}
        {/* Top-left corner decoration */}
        <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-orange-400/40 rounded-tl-lg"></div>
        {/* Top-right corner decoration */}
        <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-orange-400/40 rounded-tr-lg"></div>
        {/* Bottom-left corner decoration */}
        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-orange-400/40 rounded-bl-lg"></div>
        {/* Bottom-right corner decoration */}
        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-orange-400/40 rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default GenraPage;