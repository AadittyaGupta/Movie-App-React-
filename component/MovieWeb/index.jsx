import React from 'react';
// import MovieCard from './movieCard';
import FirstPage from './Pages/firstPage';
import Home from './Pages/home';
import Favourites from './Pages/favourites';
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Series from './Cards/seriesCard';
import { MovieProvider } from './MovieContext';
import './index.css';

const Index = () => {
  return (
    <>
      {/* <MovieCard movie = {{title: 'ragnarock' , release_date: '2021'}}/> */}
      {/* <Home /> */}
    <MovieProvider>
        <NavBar />
      <main className='main-content'>
        <Routes>
            <Route path='/' element={<FirstPage />}/>
            <Route path='/Home' element={<Home />}/>
            <Route path='/Series' element={<Series />} />
            <Route path='/Favourites' element={<Favourites />}/>
        </Routes>
      </main>
    </MovieProvider> 
    </>
  )
}

export default Index
