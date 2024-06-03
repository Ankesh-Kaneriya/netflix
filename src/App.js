import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import requests from './requests';
import Row from './components/Row';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/NavBar';
import Banner from './components/Banner';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
      <div className="App">
          <Router>
              <Navbar setSearchTerm={setSearchTerm} />
              <Routes>
                  <Route path="/" element={
                      <>
                       <Banner fetchUrl={requests.fetchTrending} />
                          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
                          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
                          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
                      </>
                  } />
                  <Route path="/movie/:movieId" element={<MovieDetail />} />
                  <Route path="/search/:searchTerm" element={<SearchResults searchTerm={searchTerm} />} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
