import React, { useState, useEffect } from 'react';
import requests from '../requests';
import styled from 'styled-components';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
            const data = await response.json();
            setMovie(
                data.results[
                    Math.floor(Math.random() * data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    return (
        <Header
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >
            <BannerContents>
                <Title>{movie?.title || movie?.name || movie?.original_name}</Title>
                <BannerButtons>
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </BannerButtons>
                <Description>{movie?.overview}</Description>
            </BannerContents>
            <FadeBottom />
        </Header>
    );
};

const Header = styled.header`
    color: white;
    object-fit: contain;
    height: 448px;
`;

const BannerContents = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`;

const BannerButtons = styled.div`
    .banner__button {
        cursor: pointer;
        color: #fff;
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: 0.2vw;
        padding-left: 2rem;
        padding-right: 2rem;
        margin-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background-color: rgba(51, 51, 51, 0.5);
    }
    .banner__button:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`;

const Description = styled.h1`
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 0.8rem;
    max-width: 360px;
    height: 80px;
`;

const FadeBottom = styled.div`
    height: 100%;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.61),
        #111
    );
`;

export default Banner;
