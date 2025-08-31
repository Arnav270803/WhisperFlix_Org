// GenraPageSeries.jsx - Series categories selection modal
import React from 'react';

const GenraPageSeries = ({ onClose, onCategorySelect }) => {
  // Array of series categories with emojis and descriptions
  const seriesCategories = [
    {
      id: 'horror',
      name: 'HORROR',
      emoji: '👻',
      description: 'Terrifying horror series',
      gradient: 'from-red-500 to-red-600'
    },
    {
      id: 'thriller',
      name: 'THRILLER',
      emoji: '🔍',
      description: 'Suspenseful mystery series',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'scifi',
      name: 'SCI-FI',
      emoji: '🚀',
      description: 'Futuristic series',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'drama',
      name: 'DRAMA',
      emoji: '🎭',
      description: 'Emotional drama series',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 'crime',
      name: 'CRIME',
      emoji: '🕵️',
      description: 'Crime investigation series',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'supernatural',
      name: 'SUPERNATURAL',
      emoji: '🔮',
      description: 'Paranormal series',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  // Handle category selection
  const handleCategoryClick = (categoryId) => {
    console.log(`Selected series category: ${categoryId}`);
    if (onCategorySelect) {
      onCategorySelect(categoryId);
    }
    // Optional: Close modal after selection
    // onClose();
  };

  return (
    // Full-screen overlay with backdrop blur effect
    <div className='fixed top-0 left-0 right-0 bottom-0 z-40 backdrop-blur-sm bg-black/40 flex justify-center items-center'>
      
      {/* Modal Container with glassmorphism effect */}
      <div className="relative bg-gradient-to-br from-black/80 to-gray-900/80 p-8 rounded-2xl shadow-2xl border border-orange-400/30 max-w-2xl w-full mx-4 backdrop-blur-md">
        
        {/* Close Button - positioned at top right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-orange-400 hover:text-orange-300 text-2xl font-bold transition-colors duration-200 z-10"
        >
          ×
        </button>

        {/* Modal Header Section */}
        <div className="text-center mb-8">
          {/* Main title with gradient text effect */}
          <h2 className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent text-3xl font-bold tracking-wider">
            SERIES CATEGORIES
          </h2>
          {/* Subtitle with muted styling */}
          <p className="text-white/70 text-sm mt-2 tracking-wide">
            Choose your preferred series genre
          </p>
        </div>

        {/* Categories Grid Container */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Map through series categories */}
          {seriesCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group relative py-6 px-4 bg-transparent border border-orange-400/50 text-orange-400 font-semibold text-lg rounded-lg hover:bg-orange-400/10 hover:border-orange-300 hover:scale-105 transition-all duration-300 tracking-wide overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Category content */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                {/* Category emoji */}
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {category.emoji}
                </span>
                {/* Category name */}
                <span className="group-hover:text-orange-300 transition-colors duration-300 font-bold">
                  {category.name}
                </span>
                {/* Category description */}
                <p className="text-white/60 text-xs mt-1 group-hover:text-white/80 transition-colors duration-300 text-center">
                  {category.description}
                </p>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-orange-400 to-yellow-400 blur-xl"></div>
            </button>
          ))}

        </div>

        {/* Back button */}
        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="text-white/60 hover:text-orange-400 text-sm transition-colors duration-200 underline"
          >
            ← Back to Main Menu
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

export default GenraPageSeries;