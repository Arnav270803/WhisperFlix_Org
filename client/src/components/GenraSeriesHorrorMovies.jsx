// GenraSeriesHorrorMovies.jsx - Fast-loading horror series page with great styling
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const GenraSeriesHorrorMovies = () => {
  const navigate = useNavigate();

  // Horror series data
  const horrorSeries = [
    { 
      id: 1, src: assets.dark, title: "Dark", rating: "8.7", year: "2017",
      description: "Terminally ill teens share terrifying tales in this supernatural horror series.",
      platforms: ["Netflix", "Prime Video"],
      trailer: "https://www.youtube.com/watch?v=ESEUoa-mz2c"
    },
    { 
      id: 2, src: assets.midnightmass, title: "Midnight Mass", rating: "7.7", year: "2021",
      description: "An isolated island community experiences miraculous events—and frightening omens—after a charismatic, mysterious young priest arrives.",
      platforms: ["Netflix"],
      trailer: "https://www.youtube.com/watch?v=89UV8vmWXlY"
    },
    { 
      id: 3, src: assets.midnightclub, title: "The Night House", rating: "6.5", year: "2022",
      description: "A group of terminally ill teens in a hospice make a midnight pact: the first to die must send them a sign.",
      platforms: ["Netflix"],
      trailer: "https://www.youtube.com/watch?v=xtMa8MZhv1s"
    },
    { 
      id: 4, src: assets.terrortuesday, title: "Terror Tuesday", rating: "5.8", year: "2024",
      description: "Eight eerie stories based on real-life listener experiences from the Thai radio show 'Terror Tuesday'",
      platforms: ["Netflix"],
      trailer: "https://www.youtube.com/watch?v=tQp0n4sdMBQ"
    },
 
    { 
      id: 5, src: assets.thehauntingofhillhouse, title: "The Haunting of Hill House", rating: "7.4", year: "2020",
      description: "A young governess is hired at a haunted English manor, uncovering tragic secrets amid romantic and ghostly mysteries.",
      platforms: ["Netflix", "Prime Video"],
      trailer: "https://www.youtube.com/watch?v=08ZYXHNbaOw"
    },
    { 
      id: 6, src: assets.theoutsider, title: "The Outsider", rating: "7.6", year: "2020",
      description: "A detective investigates a young boy’s murder, uncovering a terrifying supernatural mystery.",
      platforms: ["HBO Max", "Hulu", "Prime Video"],
      trailer: "https://www.youtube.com/watch?v=eNDKWr3Xmjk"
    },

  ];



  return (
    <div className="relative min-h-screen w-screen text-white overflow-x-hidden">
      {/* Background Image */}
      <img
        src={assets.background_image}
        alt="cinematic background"
        className="fixed inset-0 h-full w-full object-cover -z-10"
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/30 -z-5 group-hover:bg-black/60 transition-all duration-500"></div>

      {/* Background blur overlay for hover effect */}
      <div id="background-blur" className="fixed inset-0 backdrop-blur-0 bg-black/0 -z-4 pointer-events-none transition-all duration-700"></div>

      {/* Header Section */}
      <div className="relative z-10 pt-8 pb-12">
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 px-4 py-2 bg-black/40 backdrop-blur-md border border-orange-400/30 rounded-lg hover:bg-orange-400/10 hover:border-orange-400/60 transition-all duration-300 group"
          >
            <span className="text-orange-400 group-hover:text-orange-300">←</span>
            <span className="text-orange-400 group-hover:text-orange-300 font-medium">Back</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent text-6xl md:text-7xl font-bold font-movie-title tracking-wider mb-4">
            HORROR SERIES
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light tracking-wide">
            Spine-chilling series that will keep you on the edge
          </p>
          
          {/* Decorative line */}
          <div className="mx-auto mt-4 h-1 w-48 bg-gradient-to-r from-red-500 to-orange-400 rounded-full"></div>
        </div>
      </div>

      {/* Series Grid */}
      <div className="relative z-10 px-8 pb-12" id="series-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {horrorSeries.map((series) => (
              <div
                key={series.id}
                className="movie-card group relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-orange-400/20 shadow-2xl hover:shadow-orange-500/30 hover:scale-110 hover:border-orange-400/60 transition-all duration-500 hover:backdrop-blur-xl hover:bg-gradient-to-br hover:from-black/80 hover:to-gray-900/80 hover:z-50"
                onMouseEnter={(e) => {
                  // Blur background
                  const blurElement = document.getElementById('background-blur');
                  if (blurElement) {
                    blurElement.classList.add('backdrop-blur-md', 'bg-black/40');
                  }
                  
                  // Blur all other movie cards
                  const allCards = document.querySelectorAll('.movie-card');
                  allCards.forEach(card => {
                    if (card !== e.currentTarget) {
                      card.classList.add('blur-sm', 'opacity-50');
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  // Remove background blur
                  const blurElement = document.getElementById('background-blur');
                  if (blurElement) {
                    blurElement.classList.remove('backdrop-blur-md', 'bg-black/40');
                  }
                  
                  // Remove blur from all other movie cards
                  const allCards = document.querySelectorAll('.movie-card');
                  allCards.forEach(card => {
                    card.classList.remove('blur-sm', 'opacity-50');
                  });
                }}
              >
                {/* Image Container - Clickable */}
                <div 
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => window.open(series.trailer, '_blank')}
                >
                  <img
                    src={series.src}
                    alt={series.title}
                    className="w-full h-80 md:h-96 object-cover group-hover:scale-125 group-hover:brightness-125 group-hover:contrast-110 transition-all duration-700 ease-out"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-16 h-16 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Rating Badge with IMDb logo */}
                  <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" 
                      alt="IMDb" 
                      className="w-6 h-3 object-contain"
                    />
                    <span className="text-white text-sm font-bold">{series.rating}</span>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-400/30">
                    <span className="text-orange-400 text-sm font-medium">{series.year}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Title */}
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent mb-3 group-hover:from-orange-300 group-hover:to-yellow-200 transition-all duration-300">
                    {series.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-4">
                    {series.description}
                  </p>

                  {/* Platform Logos */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-white/60 text-xs">Available on:</span>
                    <div className="flex gap-2">
                      {series.platforms.slice(0, 3).map((platform, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                          <span className="text-white/80 text-xs font-medium group-hover:text-white">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Smaller Watch Now Button */}
                  <button 
                    onClick={() => window.open(series.trailer, '_blank')}
                    className="w-full py-2 px-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/50 text-orange-400 font-medium text-sm rounded-lg hover:from-orange-500/40 hover:to-red-500/40 hover:border-orange-300 hover:text-orange-200 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 relative overflow-hidden group-button"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Watch Now</span>
                      <span className="text-sm">▶</span>
                    </span>
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/20 to-orange-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  </button>

                  {/* Enhanced glow effect for entire card */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 blur-2xl -z-10 animate-pulse"></div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-orange-500 to-red-500 blur-xl -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenraSeriesHorrorMovies;