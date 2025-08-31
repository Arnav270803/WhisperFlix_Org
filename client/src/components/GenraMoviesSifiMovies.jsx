import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const GenraMoviesSifiMovies = () => {
  const navigate = useNavigate();

  // Sci-Fi movies data
  const sifiMovies = [
    { 
      id: 1, src: assets.Arrival, title: "Arrival", rating: "7.9", year: "2016",
      description: "A linguist deciphers alien language as humanity faces mysterious extraterrestrial visitors.",
      platforms: ["Apple TV", "Amazon Prime"],
      trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g"
    },
    { 
      id: 2, src: assets.bosslevel, title: "Boss Level", rating: "6.8", year: "2021",
      description: "A retired soldier relives his death in a time loop, uncovering a secret project to escape.",
      platforms: ["Netflix", "Amazon Prime"],
      trailer: "https://www.youtube.com/watch?v=PGHD0bqjZWQ"
    },
    { 
      id: 3, src: assets.Edgeoftomorrow, title: "Edge Of Tomorrow", rating: "7.9", year: "2014",
      description: "Astronauts seek a new home for humanity through a wormhole.",
      platforms: ["Netflix", "Amazon Prime"],
      trailer: "https://www.youtube.com/watch?v=vw61gCe2oqI"
    },
    { 
      id: 4, src: assets.elysium, title: "Elysium", rating: "6.8", year: "2013",
      description: "A programmer tests an AI’s humanity with chilling results.",
      platforms: ["Netflix", "Amazon Prime"],
      trailer: "https://www.youtube.com/watch?v=XYGzRB4Pnq8"
    },
    { 
      id: 5, src: assets.finch, title: "Finch", rating: "6.9", year: "2021",
      description: "A hacker discovers reality is a simulated prison.",
      platforms: ["Apple tv"],
      trailer: "https://www.youtube.com/watch?v=-0bYWnP3jH4"
    },
    { 
      id: 6, src: assets.gravity, title: "Gravity", rating: "7.7", year: "2013",
      description: "Two astronauts fight for survival after their shuttle is destroyed in space.",
      platforms: ["Netflix", "Amazon Prime"],
      trailer: "https://www.youtube.com/watch?v=OiTiKOy59o4"
    },
    { 
      id: 7, src: assets.Tron, title: "TRON: Legacy", rating: "6.8", year: "2010",
      description: "Sam Flynn enters a digital world to find his father, battling a rogue program.",
      platforms: ["Amazon Prime","Disney+"],
      trailer: "https://www.youtube.com/watch?v=P78pl1FUXfA"
    },
    { 
      id: 8, src: assets.images, title: "Ad Astra", rating: "6.5", year: "2019",
      description: "An astronaut searches for his missing father, uncovering cosmic secrets threatening humanity.",
      platforms: ["Amazon Prime" , "Hulu"],
      trailer: "https://www.youtube.com/watch?v=P6AaSMfXHbA"
    },
      { 
      id: 8, src: assets.Readyplayerone, title: "Ready Player One", rating: "7.4", year: "2018",
      description: "In a dystopian future, a teen hunts for a hidden digital Easter egg.",
      platforms: ["Netflix", "Amazon Prime"],
      trailer: "https://www.youtube.com/watch?v=cSp1dM2Vj48"
    },
      { 
      id: 8, src: assets.themapofperfectthings, title: "The Map Of Tiny Perfect things", rating: "6.8", year: "2021",
      description: "Two teens in a time loop seek perfect moments to break free.",
      platforms: ["Amazon Prime" , "Apple TV"],
      trailer: "https://www.youtube.com/watch?v=8g18jFHCLXk"
    }
  ];

  // Platform logos with working URLs


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
          <h1 className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-400 bg-clip-text text-transparent text-6xl md:text-7xl font-bold font-movie-title tracking-wider mb-4">
            SCI-FI MOVIES
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light tracking-wide">
            Mind-bending films that explore new worlds
          </p>
          
          {/* Decorative line */}
          <div className="mx-auto mt-4 h-1 w-48 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"></div>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="relative z-10 px-8 pb-12" id="movies-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sifiMovies.map((movie) => (
              <div
                key={movie.id}
                className="movie-card group relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-cyan-400/20 shadow-2xl hover:shadow-cyan-500/30 hover:scale-110 hover:border-cyan-400/60 transition-all duration-500 hover:backdrop-blur-xl hover:bg-gradient-to-br hover:from-black/80 hover:to-gray-900/80 hover:z-50"
                onMouseEnter={(e) => {
                  const blurElement = document.getElementById('background-blur');
                  if (blurElement) {
                    blurElement.classList.add('backdrop-blur-md', 'bg-black/40');
                  }
                  const allCards = document.querySelectorAll('.movie-card');
                  allCards.forEach(card => {
                    if (card !== e.currentTarget) {
                      card.classList.add('blur-sm', 'opacity-50');
                    }
                  });
                }}
                onMouseLeave={(e) => {
                  const blurElement = document.getElementById('background-blur');
                  if (blurElement) {
                    blurElement.classList.remove('backdrop-blur-md', 'bg-black/40');
                  }
                  const allCards = document.querySelectorAll('.movie-card');
                  allCards.forEach(card => {
                    card.classList.remove('blur-sm', 'opacity-50');
                  });
                }}
              >
                {/* Image Container - Clickable */}
                <div 
                  className="relative overflow-hidden cursor-pointer"
                  onClick={() => window.open(movie.trailer, '_blank')}
                >
                  <img
                    src={movie.src}
                    alt={movie.title}
                    className="w-full h-80 md:h-96 object-cover group-hover:scale-125 group-hover:brightness-125 group-hover:contrast-110 transition-all duration-700 ease-out"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-16 h-16 bg-cyan-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Rating Badge with IMDb logo */}
                  <div className="absolute top-4 right-4 bg-cyan-500/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" 
                      alt="IMDb" 
                      className="w-6 h-3 object-contain"
                    />
                    <span className="text-white text-sm font-bold">{movie.rating}</span>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-400/30">
                    <span className="text-cyan-400 text-sm font-medium">{movie.year}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Title */}
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-300 bg-clip-text text-transparent mb-3 group-hover:from-cyan-300 group-hover:to-purple-200 transition-all duration-300">
                    {movie.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-4">
                    {movie.description}
                  </p>

                  {/* Platform Logos */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-white/60 text-xs">Available on:</span>
                    <div className="flex gap-2">
                      {movie.platforms.slice(0, 3).map((platform, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                          <span className="text-white/80 text-xs font-medium group-hover:text-white">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Smaller Watch Now Button */}
                  <button 
                    onClick={() => window.open(movie.trailer, '_blank')}
                    className="w-full py-2 px-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/50 text-cyan-400 font-medium text-sm rounded-lg hover:from-cyan-500/40 hover:to-purple-500/40 hover:border-cyan-300 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden group-button"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Watch Now</span>
                      <span className="text-sm">▶</span>
                    </span>
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  </button>

                  {/* Enhanced glow effect for entire card */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 blur-2xl -z-10 animate-pulse"></div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenraMoviesSifiMovies;