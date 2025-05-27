import React, { useEffect, useState } from 'react';
import MovieCard from '../Cards/movieCard';
import SeriesCard from '../Cards/seriesCard';
import {searchMovies, getPopularMovies, getPopularTvShows, searchTvShows} from '../api';


const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [popularMovies, popularSeries] = await Promise.all([
                    getPopularMovies(),
                    getPopularTvShows()
                ]);
                setMovies(popularMovies);
                setSeries(popularSeries);
            } catch (err) {
                console.log(err);
                setError("Failed to fetch movies");
            } finally {
                setLoading(false);
            }
        };
        fetchData();

    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchText.trim()) return;
        if(loading) return;

        setLoading(true)
        try{
            const [movieResults, seriesResults] = await Promise.all([
                searchMovies(searchText),
                searchTvShows(searchText)
            ]);
            setMovies(movieResults);
            setSeries(seriesResults);
            setError(null);
        }catch (err){
            console.log(err);
            setError("Failed to fetch");
        } finally{
            setLoading(false);
        }
    };

  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className='search-form'>
            <input 
                type="text" 
                placeholder='Search for movies, series...' 
                className='search-input' 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button type='submit' className='search-button'>Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {/* {loading ? (
          <div className='loading'> Loading... </div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => 
              // movie.title.toLowerCase().startsWith(searchText) &&  
              (<MovieCard movie={movie}  key={movie.id}/>))}
          </div>
        )} */}

        {!loading && (
            //           RENDERING BOTH MOVIES AND SERIES
            <> 
            {/* <h2>Movies</h2> */}
            <div className="movies-grid">
               {movies.map((movie) => (
               <MovieCard movie={movie} key={movie.id} />
               ))}
            </div>
            
            {/* <h2>Series</h2> */}
            <div className="movies-grid">
                {series.map((series) => (
                <SeriesCard series={series} key={series.id} />
              ))}
            </div>
            </>
        )}

      </div>
    </>
  )
}

export default Home
