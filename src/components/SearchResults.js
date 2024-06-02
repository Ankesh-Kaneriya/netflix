import React from 'react';
import styled from 'styled-components';

const SearchResults = ({ results }) => {
    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <ResultsContainer>
            {results.map((movie) => (
                <Result key={movie.id}>
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.title} />
                    <Info>
                        <h3>{movie.title || movie.name || movie.original_name}</h3>
                        <p><strong>Release Date:</strong> {movie.release_date || movie.first_air_date}</p>
                        <p><strong>Rating:</strong> {movie.vote_average}</p>
                        <p>{movie.overview}</p>
                    </Info>
                </Result>
            ))}
        </ResultsContainer>
    );
};

const ResultsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    color: white;
`;

const Result = styled.div`
    position: relative;
    transition: transform 450ms;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        object-fit: cover;
    }

    &:hover div {
        display: block;
    }
`;

const Info = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    width: 100%;
    border-radius: 0 0 10px 10px;
    overflow-y: scroll;
    height: 100%;

    h3 {
        margin: 0 0 10px 0;
        font-size: 18px;
    }

    p {
        margin: 5px 0;
        font-size: 14px;
    }
`;

export default SearchResults;
