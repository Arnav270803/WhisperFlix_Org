import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const FavouritePage = () => {
  const navigate = useNavigate();

  // Drama series data
  const FavCompilation = [
    { 
       id: 1, src: assets.themedium, title: "The Medium", rating: "6.5", year: "2021",
       description: "A shaman in Thailand discovers her niece's possession, revealing dark family secrets.",
       platforms: ["Amazon Prime", "Netflix"],
       trailer: "https://www.youtube.com/watch?v=wDtJ3M4arIc"
     },
   
    { 
        id: 2, src: assets.Arrival, title: "Arrival", rating: "7.9", year: "2016",
        description: "A linguist deciphers alien language as humanity faces mysterious extraterrestrial visitors.",
        platforms: ["Apple TV", "Amazon Prime"],
        trailer: "https://www.youtube.com/watch?v=tFMo3UJ4B4g"
    },
 
    { 
      id: 3, src: assets.theterror, title: "The Terror", rating: "7.8", year: "2018",
      description: "A fictional account of the doomed Franklin Expedition's crew facing monstrous threats in the Arctic.",
      platforms: ["Apple TV", "Amazon Prime"],
      trailer: "https://www.youtube.com/watch?v=pjq7Gl_hhPY"
    },     
    { 
        id: 4, src: assets.Readyplayerone, title: "Ready Player One", rating: "7.4", year: "2018",
        description: "In a dystopian future, a teen hunts for a hidden digital Easter egg.",
        platforms: ["Netflix", "Amazon Prime"],
        trailer: "https://www.youtube.com/watch?v=cSp1dM2Vj48"
    },
    { 
        id: 5, src: assets.themazerunner, title: "The Maze Runner", rating: "6.8", year: "2014",
        description: "Teens trapped in a mysterious maze fight to escape and uncover secrets.",
        platforms: ["Amazon Prime", "Hulu","Disney+"],
        trailer: "https://www.youtube.com/watch?v=AwwbhhjQ9Xk"
    },
    { 
        id: 6, src: assets.Worldwarz, title: "World War Z", rating: "7.0", year: "2013",
        description: "A former UN investigator races to stop a global zombie pandemic.",
        platforms: ["Netflix", "Amazon prime"],
        trailer: "https://www.youtube.com/watch?v=Md6Dvxdr0AQ"
    },
    { 
        id: 7, src: assets.fordvsfararri, title: "The Social Dilemma", rating: "8.1", year: "2019",
        description: "Carroll Shelby and Ken Miles build a car to beat Ferrari at Le Mans.",
        platforms: ["Amazon Prime" , "Disney+"],
        trailer: "https://www.youtube.com/watch?v=zyYgDtY2AMY"
    },
    { 
        id: 8, src: assets.thebarkleymarathon, title: "The Barkley Marathons: The Race That Eats Its Young", rating: "7.7", year: "2014",
        description: "Runners tackle a grueling 100-mile ultramarathon, testing human endurance limits.",
        platforms: ["Amazon Prime"],
        trailer: "https://www.youtube.com/watch?v=79IUKC9gS-8"
       },
    { 
      id: 9, src: assets.spiceandg, title: "Spies in Disguise", rating: "6.8", year: "2019",
      description: "A suave spy and nerdy inventor team up, transforming into a pigeon to save the world.",
      platforms: ["Disney+", "Amazon Prime"],
      trailer: "https://www.youtube.com/watch?v=C5YeOc0N6Ao"
    },
    { 
        id: 10, src: assets.ozark, title: "Ozark", rating: "8.5", year: "2017-2022",
        description: "A financial planner relocates to launder money for a cartel, facing danger.",
        platforms: ["Netflix"],
        trailer: "https://www.youtube.com/watch?v=5hAXVqrljbs"
    },
    { 
        id: 11, src: assets.peakyblinders, title: "Peaky Blinders", rating: "8.8", year: "2013-2022",
        description: "A gangster family runs a criminal empire in post-WWI Birmingham.",
        platforms: ["Netflix", "Amazon Prime"],
        trailer: "https://www.youtube.com/watch?v=Ruyl8_PT_y8"
    },
        { 
          id: 12, src: assets.queensgambit, title: "Queens gambit", rating: "8.5", year: "2020",
          description: "Quiet nine-year-old orphan discovers her extraordinary chess talent when she plays her first game.",
          platforms: ["Netflix"],
          trailer: "https://www.youtube.com/watch?v=oZn3qSgmLqI"
        },
       { 
         id: 13, src: assets.dark, title: "Dark", rating: "8.7", year: "2017",
         description: "Terminally ill teens share terrifying tales in this supernatural horror series.",
         platforms: ["Netflix", "Prime Video"],
         trailer: "https://www.youtube.com/watch?v=ESEUoa-mz2c"
       },
  ];

  // Platform logos with working URLs
  const platformLogos = {
    "Netflix": "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
    "Prime Video": "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Prime-Video-Logo.png", 
    "Hulu": "https://logos-world.net/wp-content/uploads/2020/06/Hulu-Logo.png",
    "HBO Max": "https://logos-world.net/wp-content/uploads/2022/01/HBO-Max-Logo.png",
    "Apple TV+": "https://logos-world.net/wp-content/uploads/2021/08/Apple-TV-Logo.png",
    "Paramount+": "https://logos-world.net/wp-content/uploads/2021/08/Paramount-Plus-Logo.png",
    "Disney+": "https://logos-world.net/wp-content/uploads/2020/06/Disney-Plus-Logo.png",
    "Vudu": "https://logos-world.net/wp-content/uploads/2020/06/Vudu-Logo.png",
    "AMC+": "https://logos-world.net/wp-content/uploads/2021/08/AMC-Plus-Logo.png",
    "Peacock": "https://logos-world.net/wp-content/uploads/2021/08/Peacock-Logo.png",
    "NBC": "https://logos-world.net/wp-content/uploads/2021/08/NBC-Logo.png"
  };

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
          <h1 className="bg-gradient-to-r from-green-500 via-teal-500 to-green-400 bg-clip-text text-transparent text-6xl md:text-7xl font-bold font-movie-title tracking-wider mb-4">
            Fav.
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light tracking-wide">
            Must watch 
          </p>
          
          {/* Decorative line */}
          <div className="mx-auto mt-4 h-1 w-48 bg-gradient-to-r from-green-500 to-teal-400 rounded-full"></div>
        </div>
      </div>

      {/* Series Grid */}
      <div className="relative z-10 px-8 pb-12" id="series-grid">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {FavCompilation.map((fav) => (
              <div
                key={fav.id}
                className="movie-card group relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-green-400/20 shadow-2xl hover:shadow-green-500/30 hover:scale-110 hover:border-green-400/60 transition-all duration-500 hover:backdrop-blur-xl hover:bg-gradient-to-br hover:from-black/80 hover:to-gray-900/80 hover:z-50"
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
                  onClick={() => window.open(fav.trailer, '_blank')}
                >
                  <img
                    src={fav.src} // Fixed: changed from series.src to fav.src
                    alt={fav.title}
                    className="w-full h-80 md:h-96 object-cover group-hover:scale-125 group-hover:brightness-125 group-hover:contrast-110 transition-all duration-700 ease-out"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-16 h-16 bg-green-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Rating Badge with IMDb logo */}
                  <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" 
                      alt="IMDb" 
                      className="w-6 h-3 object-contain"
                    />
                    <span className="text-white text-sm font-bold">{fav.rating}</span>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30">
                    <span className="text-green-400 text-sm font-medium">{fav.year}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Title */}
                  <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent mb-3 group-hover:from-green-300 group-hover:to-teal-200 transition-all duration-300">
                    {fav.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 mb-4">
                    {fav.description}
                  </p>

                  {/* Platform Logos */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-white/60 text-xs">Available on:</span>
                    <div className="flex gap-2">
                      {fav.platforms.slice(0, 3).map((platform, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                          <span className="text-white/80 text-xs font-medium group-hover:text-white">{platform}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Smaller Watch Now Button */}
                  <button 
                    onClick={() => window.open(fav.trailer, '_blank')}
                    className="w-full py-2 px-3 bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm border border-green-400/50 text-green-400 font-medium text-sm rounded-lg hover:from-green-500/40 hover:to-teal-500/40 hover:border-green-300 hover:text-green-200 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 relative overflow-hidden group-button"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>Watch Now</span>
                      <span className="text-sm">▶</span>
                    </span>
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  </button>

                  {/* Enhanced glow effect for entire card */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-green-500 via-teal-500 to-green-500 blur-2xl -z-10 animate-pulse"></div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r from-green-500 to-teal-500 blur-xl -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritePage;