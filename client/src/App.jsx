// App.jsx - Main application component with routing
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FavouritePage from './components/FavouritePage'; // Add this import
import GenraSeriesHorrorMovies from './components/GenraSeriesHorrorMovies';
import GenraSeriesSiFiMovies from './components/GenraSeriesSiFiMovies';
import GenraSeriesCrimeMovies from './components/GenraSeriesCrimeMovies';
import GenraSeriesDramaMovies from './components/GenraSeriesDramaMovies';
import GenraSeriesSuperNaturalMovies from './components/GenraSeriesSupernaturalMovies';
import GenraSeriesThrillerMovies from './components/GenraSeriesThrillerMovies';
import GenraMoviesHorrorMovies from './components/GenraMoviesHorrorMovies';
import GenraMoviesAdventureMovies from './components/GenraMoviesAdvantureMovies';
import GenraMoviesAnimationMovies from './components/GenraMoviesAnimationMovies';
import GenraMoviesDocumentaryMovies from './components/GenraMoviesDocumentaryMovies';
import GenraMoviesSifiMovies from './components/GenraMoviesSifiMovies';
import GenraMoviesCreepyMovies from './components/GenraMoviesCreepyMovies';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourite" element={<FavouritePage />} /> {/* Add this route */}
      <Route path="/series/horror" element={<GenraSeriesHorrorMovies />} />
      <Route path="/series/scifi" element={<GenraSeriesSiFiMovies />}/>
      <Route path="/series/crime" element={<GenraSeriesCrimeMovies />}/>
      <Route path="/series/drama" element={<GenraSeriesDramaMovies />}/>
      <Route path="/series/supernatural" element={<GenraSeriesSuperNaturalMovies />}/>
      <Route path="/series/thriller" element={<GenraSeriesThrillerMovies />}/>
       
      <Route path="/movies/horror" element={<GenraMoviesHorrorMovies />}/>
      <Route path="/movies/adventure" element={<GenraMoviesAdventureMovies />}/>
      <Route path="/movies/animation" element={<GenraMoviesAnimationMovies />}/>
      <Route path="/movies/documentary" element={<GenraMoviesDocumentaryMovies />}/>
      <Route path="/movies/scifi" element={<GenraMoviesSifiMovies />}/>
      <Route path="/movies/creepy" element={<GenraMoviesCreepyMovies />}/>
       <Route path="/LoginPage" element={<LoginPage />} />  
      {/* Add more routes here as you create more pages */}
    </Routes>
  );
};

export default App;