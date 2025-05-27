const API_KEY = ""; // Replace with your API key from The Movie Database
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.results;
};

export const getPopularTvShows = async () => {
    try{
    const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results || []; //return an empty array if no results
} catch (err) {
    console.error("Error fetching popular TV shows:", err);
    return []; 
}
};

export const searchTvShows = async (query) => {
    try{
    const res = await fetch(`${BASE_URL}/tv/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.results || [];
} catch(err){
    console.error("Error searching TV shows:", err);
    return [];
}};

// export const getPopularTvShows = async () => {
//     const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
//     const data = await res.json();
//     return data.results ;
// }

// export const searchTvShows = async (query) => {
//     const res = await fetch(`${BASE_URL}/tv/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
//     const data = await res.json();
//     return data.results;
// }       


