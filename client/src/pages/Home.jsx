// Home.jsx - Home page component with movie and series categories
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Component imports
import Navbar from '../components/Navbar';
import MainHeading from '../components/MainHeading';
import FindButton from '../components/FindButton';
import MoviesSlideShow from '../components/MoviesSlideShow';
import SeriesSlideShow from '../components/SeriesSlideShow';
import GenraPage from '../components/GenraPage';
import GenraPageMovies from '../components/GenraPageMovies';
import GenraPageSeries from '../components/GenraPageSeries';
import { assets } from '../assets/assets';
import LoginPage from '../components/LoginPage';
import { AppContext} from '../context/AppContext';


const Home = () => {
  const navigate = useNavigate();

    const { showLogin } = useContext(AppContext);

  
  // State to control which modal is visible
  const [showGenra, setShowGenra] = useState(false);
  const [showMovieCategories, setShowMovieCategories] = useState(false);
  const [showSeriesCategories, setShowSeriesCategories] = useState(false);

  // Handler to open main genre selection modal
  const handleGenraClick = () => {
    setShowGenra(true);
  };

  // Handler to close main genre selection modal
  const handleCloseGenra = () => {
    setShowGenra(false);
  };

  // Handler when user selects movies option - opens movie categories
  const handleMoviesClick = () => {
    console.log("Movies selected - opening movie categories");
    setShowGenra(false);           // Close main genre modal
    setShowMovieCategories(true);  // Open movie categories modal
  };

  // Handler to close movie categories modal
  const handleCloseMovieCategories = () => {
    setShowMovieCategories(false);
  };

  // Handler when user selects a specific movie category
  const handleMovieCategorySelect = (categoryId) => {
    console.log(`Movie category selected: ${categoryId}`);
    
    if(categoryId === 'horror'){
      navigate('/movies/horror')
    }else if(categoryId === 'adventure'){
      navigate('/movies/adventure')
    }else if(categoryId === 'animation'){
      navigate('/movies/animation')
    }else if(categoryId === 'creepy'){
      navigate('/movies/creepy')
    }else if(categoryId === 'scifi'){
      navigate('/movies/scifi')
    }else if(categoryId === 'documentary'){
      navigate('/movies/documentary')
    }

    setShowMovieCategories(false); // Close modal after selection
  };

  // Handler when user selects series option - opens series categories
  const handleSeriesClick = () => {
    console.log("Series selected - opening series categories");
    setShowGenra(false);           // Close main genre modal
    setShowSeriesCategories(true); // Open series categories modal
  };

  // Handler to close series categories modal
  const handleCloseSeriesCategories = () => {
    setShowSeriesCategories(false);
  };

  // Handler when user selects a specific series category
  const handleSeriesCategorySelect = (categoryId) => {
    console.log(`Series category selected: ${categoryId}`);
    
    // Navigate to specific series category pages
    if (categoryId === 'horror') {
      navigate('/series/horror');
    } else if (categoryId === 'scifi') { // added scifi path
      navigate('/series/scifi');
    }else if (categoryId === 'crime') { // added crime path
      navigate('/series/crime');
    }else if (categoryId === 'drama') { // added drama path
      navigate('/series/drama');
    }else if (categoryId === 'supernatural') { // added supernatural path
      navigate('/series/supernatural');
    }else if (categoryId === 'thriller') { // added thriller path
      navigate('/series/thriller');
    }
    // TODO: Add more navigation routes for other categories
    // else if (categoryId === 'thriller') {
    //   navigate('/series/thriller');
    // }
    
    setShowSeriesCategories(false); // Close modal after selection
  };

  return (
    <div className="relative min-h-screen w-screen text-white">
      {/* Background Image - positioned absolutely behind all content */}
      <img
        src={assets.background_image}
        alt="cinematic background"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />
      
      {/* Main Content Stack */}
      {/* Navigation bar with genre and favorite buttons */}
      <Navbar onGenraClick={handleGenraClick} />

     {showLogin && <LoginPage />}
      
      {/* Hero section with main title */}
      <MainHeading />
      
      {/* Call-to-action button - Now passes the same handler as navbar */}
      <FindButton onGenraClick={handleGenraClick} />
      
      {/* Movies carousel/slideshow */}
      <MoviesSlideShow />
      
      {/* Series carousel/slideshow */}
      <SeriesSlideShow />
      
      {/* Main Genre Selection Modal - Shows Movies vs Series choice */}
      {showGenra && (
        <GenraPage
          onClose={handleCloseGenra}
          onMoviesClick={handleMoviesClick}
          onSeriesClick={handleSeriesClick}
        />
      )}

      {/* Movie Categories Modal - Shows specific movie genres */}
      {showMovieCategories && (
        <GenraPageMovies
          onClose={handleCloseMovieCategories}
          onCategorySelect={handleMovieCategorySelect}
        />
      )}

      {/* Series Categories Modal - Shows specific series genres */}
      {showSeriesCategories && (
        <GenraPageSeries
          onClose={handleCloseSeriesCategories}
          onCategorySelect={handleSeriesCategorySelect}
        />
      )}
    </div>
  );
};

export default Home;