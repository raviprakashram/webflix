const API_Key = '3b9ac240ff9f7bf0d41fb0a9799a1d2b'  //3b9ac240ff9f7bf0d41fb0a9799a1d2b;

const requests = {
    fetchTrending: `/trending/all/week?api_key= ${API_Key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&witg_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`
}

export default requests;