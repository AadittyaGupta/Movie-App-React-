import React from 'react';
import { useMovieContext } from '../MovieContext';

const MovieCard = ({movie}) => {

    const {addToFavourites, removeFromFavourites, isFavourite} = useMovieContext();
    const favourite = isFavourite(movie.id);

    function heart(e){
        e.preventDefault();
        if(favourite) removeFromFavourites(movie.id);
        else addToFavourites(movie);
    }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">

                {/* <button className={`Fav-btn ${favourite ? "active" : " " }`} onClick={heart}>🤍</button> */}
                <button className='favorite-btn' > M </button>
                <button className={`fav-btn ${favourite ? "active" : "" }`} onClick={heart}>
                    {favourite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h2>{movie.title}</h2>
            <h4>Rating: {movie.vote_average.toFixed(1)}</h4>
            <p>{movie.release_date?.split('-')[0]}</p>
        </div>
      </div>
    </>
  )
}

export default MovieCard
