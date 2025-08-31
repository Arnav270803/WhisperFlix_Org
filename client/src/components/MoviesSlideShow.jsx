// MoviesSlideShow.jsx - Animated movies carousel component
import React, { useState } from 'react';
import { motion } from "motion/react";
import { assets } from '../assets/assets';

const MoviesSlideShow = () => {
  // State to control slideshow animation
  const [isPlaying, setIsPlaying] = useState(true);
  // State to track which movie is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Array of all movie images with metadata
  const movieImages = [
    { src: assets.fairStreet, alt: "Fair Street" },
    { src: assets.incantation, alt: "Incantation" },
    { src: assets.lighthouse, alt: "Lighthouse" },
    { src: assets.lightsout, alt: "Lights Out" },
    { src: assets.themedium, alt: "The Medium" },
    { src: assets.thetakingofdeborahlogan, alt: "The Taking of Deborah Logan" },
    { src: assets.Edgeoftomorrow, alt: "Edge of tomorro" },
     { src: assets.bosslevel, alt: "boss level" },
    { src: assets.bladerunner, alt: "bladerunner" },
    { src: assets.gravity, alt: "gravity" },
    { src: assets.images, alt: "images" },
    { src: assets.Readyplayerone, alt: "Ready player one" },
    { src: assets.themapofperfectthings, alt: "the map of perfect things" },
    { src: assets.finch, alt: "finch" },
    { src: assets.Grandturismo, alt: "Grandturismo" },
    { src: assets.Journeytothemisteriousisland, alt: "Journey to the misterious island" },
    { src: assets.Rimoftheworldjpeg, alt: "Rim of the worldjpeg" },
    { src: assets.themazerunner, alt: "the maze runner" },
    { src: assets.Thetomorrowwar, alt: "The tomorrow war" },
    { src: assets.Tron, alt: "Tron" },
    { src: assets.Twisters, alt: "Twisters" },
    { src: assets.Worldwarz, alt: "World war z " },
    { src: assets.fordvsfararri, alt: "ford vs fararri " },
    { src: assets.myoldschool, alt: "my old school" },
    { src: assets.searchingforsugarman, alt: "searching for sugarman" },
    { src: assets.shinkers, alt: "shinkers " },
    { src: assets.theactofkilling, alt: "the act of killing" },
    { src: assets.thebarkleymarathon, alt: "the barkley marathon" },
    { src: assets.anomalisa, alt: "anomalisa" },
    { src: assets.ernestandcelestine, alt: "ernestandcelestine" },
    { src: assets.ilostmybody, alt: "i lost my body" },
    { src: assets.soul, alt: "soul" },
    { src: assets.spiceandg, alt: "spiceandg " },
    { src: assets.theinvitation, alt: "the invitation " },
  ];

  // Duplicate the array to create seamless infinite scroll effect
  const duplicatedImages = [...movieImages, ...movieImages];

  // Handle movie hover
  const handleMouseEnter = (index) => {
    setIsPlaying(false);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
    setHoveredIndex(null);
  };

  return (
    // Main container - full width with transparent background
    <div className='w-full py-8 bg-transparent overflow-hidden relative'>
      
      {/* Background overlay for blur effect */}
      {hoveredIndex !== null && (
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 pointer-events-none transition-all duration-500" />
      )}
      
      {/* Slideshow container with top margin for title spacing */}
      <div className="flex whitespace-nowrap mt-12 relative z-20">
        {/* Framer Motion animated container */}
        <motion.div
          initial={{ x: 0 }}
          animate={isPlaying ? { x: `-${(movieImages.length) * (144 + 16)}px` } : {}}
          transition={{
            ease: "linear",
            repeat: isPlaying ? Infinity : 0,
            duration: 39,
            repeatType: "loop"
          }}
          className="flex gap-4"
        >
          {/* Map through duplicated images array */}
          {duplicatedImages.map((movie, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
            
            return (
              // Individual movie card container
              <motion.div 
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`flex-shrink-0 p-1 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg shadow-xl transition-all duration-500 cursor-pointer relative ${
                  isOtherHovered ? 'blur-md opacity-30' : ''
                }`}
                animate={{
                  scale: isHovered ? 1.4 : 1,
                  zIndex: isHovered ? 50 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                style={{
                  transformOrigin: "center center"
                }}
              >
                {/* Movie poster image */}
                <img
                  src={movie.src}
                  alt={movie.alt}
                  className='h-48 w-36 object-cover rounded-md shadow-lg'
                />
                
                {/* Enhanced shadow for hovered item */}
                {isHovered && (
                  <div className="absolute inset-0 rounded-lg shadow-2xl ring-4 ring-white ring-opacity-50 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default MoviesSlideShow;