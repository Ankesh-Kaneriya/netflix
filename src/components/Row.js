import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Row = ({ title, fetchUrl }) => {
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
            <GridContainer>
                {movies.map((movie) => (
                    <Poster key={movie.id}>
                        <img
                            src={`${base_url}${movie.poster_path}`}
                            alt={movie.name}
                        />
                        <Info>
                            <h3>{movie.title || movie.name || movie.original_name}</h3>
                            <p><strong>Release Date:</strong> {movie.release_date || movie.first_air_date}</p>
                            <p><strong>Rating:</strong> {movie.vote_average}</p>
                            {/* <p>{movie.overview}</p> */}
                        </Info>
                    </Poster>
                ))}
            </GridContainer>
        </RowContainer>
    );
};

const RowContainer = styled.div`
    margin: 20px;
    color: white;

    h2 {
        margin-left: 20px;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    padding: 20px;
`;

const Poster = styled.div`
    position: relative;
    transition: transform 450ms;

    &:hover {
        transform: scale(1.2);
        z-index: 1;
    }

    img {
        border-radius: 10px;
        width: 100%;
        height: auto;
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
    background: rgb(13 13 13 / 70%);
    color: white;
    padding: 20px;
    width: 100%;
    height: 100%;
    border-radius: 0 0 10px 10px;
    overflow-y: scroll;

    h3 {
        margin: 0 0 10px 0;
        font-size: 18px;
    }

    p {
        margin: 5px 0;
        font-size: 14px;
    }
`;

export default Row;
