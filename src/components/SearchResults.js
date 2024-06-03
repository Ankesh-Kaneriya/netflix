import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchResults = () => {
    const { searchTerm } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchSearchResults() {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1f0a969ae1c5c0d783759e5c50e1e967&query=${searchTerm}`);
            const data = await response.json();
            setResults(data.results);
        }
        fetchSearchResults();
    }, [searchTerm]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <ResultsContainer>
            {results.map((movie) => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <Result>
                        <img src={`${base_url}${movie.poster_path}`} alt={movie.title} />
                        <Info>
                            <h3>{movie.title || movie.name || movie.original_name}</h3>
                            <p><strong>Release Date:</strong> {movie.release_date || movie.first_air_date}</p>
                            <p><strong>Rating:</strong> {movie.vote_average}</p>
                            <Overview>{movie.overview}</Overview>
                        </Info>
                    </Result>
                </Link>
            ))}
        </ResultsContainer>
    );
};

const ResultsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    color: white;
`;

const Result = styled.div`
    position: relative;
    width: 300px;
    height: 450px;
    transition: transform 450ms;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }

    &:hover div {
        transform: translateY(0);
        opacity: 1;
    }
`;

const Info = styled.div`
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    transition: transform 450ms ease-in-out, opacity 450ms ease-in-out;
    transform: translateY(100%);
    opacity: 0;

    h3 {
        margin: 5px 0;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        margin: 2px 0;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const Overview = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export default SearchResults;
