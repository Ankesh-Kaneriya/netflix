import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
            const data = await response.json();
            setMovies(data.results);
        }
        fetchData();
    }, [fetchUrl]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <RowContainer>
            <h2>{title}</h2>
            <RowPosters>
                {movies.map((movie) => (
                    <Poster
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        isLargeRow={isLargeRow}
                    />
                ))}
            </RowPosters>
        </RowContainer>
    );
};

const RowContainer = styled.div`
    margin-left: 20px;
`;

const RowPosters = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Poster = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: ${({ isLargeRow }) => (isLargeRow ? "250px" : "100px")};
    margin-right: 10px;
    transition: transform 450ms;
    &:hover {
        transform: scale(1.2);
    }
`;

export default Row;
