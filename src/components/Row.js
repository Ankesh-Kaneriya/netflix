import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
      <ScrollContainer>
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <Poster>
              <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
              <Info>
                <h3>{movie.title || movie.name || movie.original_name}</h3>
                <p>
                  <strong>Release Date:</strong>{" "}
                  {movie.release_date || movie.first_air_date}
                </p>
                <p>
                  <strong>Rating:</strong> {movie.vote_average}
                </p>
                <Overview>{movie.overview}</Overview>
              </Info>
            </Poster>
          </Link>
        ))}
      </ScrollContainer>
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

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  padding: 20px;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Poster = styled.div`
position: relative;
    min-width: 20vw;
    max-width: 20vw;
    height: auto;
    transition: transform 450ms;
    overflow: hidden;

  @media (max-width: 550px) {
    min-width: 25vw;
    max-width: 25vw;
    height: auto;
  }

  @media (max-width: 350px) {
    min-width: 32vw;
    height: auto;
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
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

export default Row;
