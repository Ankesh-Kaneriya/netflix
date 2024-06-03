import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=1f0a969ae1c5c0d783759e5c50e1e967`);
            const data = await response.json();
            setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
        }
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <Header
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <Content>
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <Buttons>
                    <button>Play</button>
                    <button>My List</button>
                </Buttons>
                <h2>{truncate(movie?.overview, 150)}</h2>
            </Content>
        </Header>
    );
};

const Header = styled.header`
    color: white;
    object-fit: contain;
    height: 448px;
    overflow: auto;
`;

const Content = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;

    h1 {
        font-size: 3rem;
        font-weight: 800;
        padding-bottom: 0.3rem;
    }

    h2 {
        width: 45rem;
        line-height: 1.3;
        padding-top: 1rem;
        font-size: 1.2rem;
        max-width: 360px;
        height: 80px;
    }
`;

const Buttons = styled.div`
    button {
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

        &:hover {
            color: #000;
            background-color: #e6e6e6;
            transition: all 0.2s;
        }
    }
`;



export default Banner;
