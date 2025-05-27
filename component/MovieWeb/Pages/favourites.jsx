import React from 'react'
import { useMovieContext } from '../MovieContext';
import MovieCard from '../Cards/movieCard';

const Favourites = () => {
    const {Favourites} = useMovieContext();

    if (Favourites) {
        return (
            <div className='favorites'>
                <h2>Your Favourites</h2>
            <div className='movies-grid'>
                {Favourites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
            </div>
        );
    };
  return (
    <>
      <div className="favourites-empty">
        <h2>No favourite movies yet</h2>
        <p>Start adding your favourite movies...</p>
        {/* {Favourites()}; */}
      </div>
    </>
  )
}

export default Favourites
