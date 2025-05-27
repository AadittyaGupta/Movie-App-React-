import React from 'react';

const SeriesCard = ({series}) => {

  if (!series || !series.poster_path) return null;

    // const {addToFavourites, removeFromFavourites, isFavourite} = useMovieContext();
    // const favourite = isFavourite(movie.id);

    function heart(e){
      alert("liked");
        // e.preventDefault();
        // if(favourite) removeFromFavourites(series.id);
        // else addToFavourites(series);
    }

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster">
            <    img src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} 
                alt={series.name} 
            />

            <div className="movie-overlay">

                {/* <button className={`Fav-btn ${favourite ? "active" : " " }`} onClick={heart}>🤍</button> */}
                <button className='favorite-btn' > S </button>
                <button className='fav-btn ' onClick={heart}>
                    🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h2>{series.name}</h2>
            <h4>Rating: {series.vote_average.toFixed(1)}</h4>
            <p>{series.first_air_date?.split('-')[0]}</p>
        </div>
      </div>
    </>
  )
}

export default SeriesCard
