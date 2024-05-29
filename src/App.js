import React, { useState } from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

const App = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (query) => {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=1f0a969ae1c5c0d783759e5c50e1e967&language=en-US&query=${query}&page=1&include_adult=false`
        );
        const data = await response.json();
        setSearchResults(data.results);
    };

    return (
        <div className="App">
            <NavBar />
            <Banner />
            <SearchBar onSearch={handleSearch} />
            {searchResults.length > 0 && <SearchResults results={searchResults} />}
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
};

export default App;
