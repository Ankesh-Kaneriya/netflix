const api = "api_key=1f0a969ae1c5c0d783759e5c50e1e967";

const requests = {
    fetchTrending: `/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?${api}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?${api}&language=en-US`,
    fetchActionMovies: `/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?${api}&with_genres=99`,
};

export default requests;