import React from 'react';
import styled from 'styled-components';

const SearchResults = ({ results }) => {
    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <ResultsContainer>
            {results.map((movie) => (
                <Result key={movie.id}>
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.title} />
                    <div>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </Result>
            ))}
        </ResultsContainer>
    );
};

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Result = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    width: 80%;
    background-color: #333;
    border-radius: 4px;

    img {
        width: 100px;
        margin-right: 20px;
    }

    h3 {
        margin: 0 0 10px 0;
    }

    p {
        margin: 0;
    }
`;

export default SearchResults;
