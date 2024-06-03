import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [relatedMovies, setRelatedMovies] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1f0a969ae1c5c0d783759e5c50e1e967`);
            const data = await response.json();
            setMovie(data);

            const relatedResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=1f0a969ae1c5c0d783759e5c50e1e967`);
            const relatedData = await relatedResponse.json();
            setRelatedMovies(relatedData.results);
        }
        fetchMovie();
    }, [movieId]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    return (
        <DetailContainer>
            {movie && (
                <>
                    <Banner style={{ backgroundImage: `url(${base_url}${movie.backdrop_path})` }}>
                        <BannerContent>
                            <h1>{movie.title || movie.name || movie.original_name}</h1>
                            <p>{movie.release_date || movie.first_air_date}</p>
                            <p>{movie.overview}</p>
                        </BannerContent>
                    </Banner>
                    <Details>
                        <h2>Details</h2>
                        <p><strong>Release Date:</strong> {movie.release_date || movie.first_air_date}</p>
                        <p><strong>Rating:</strong> {movie.vote_average}</p>
                        <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
                    </Details>
                    <RelatedMovies>
                        <h2>Related Movies</h2>
                        <ScrollContainer>
                            {relatedMovies.map((relatedMovie) => (
                                <Link to={`/movie/${relatedMovie.id}`} key={relatedMovie.id}>
                                    <Poster>
                                        <img src={`${base_url}${relatedMovie.poster_path}`} alt={relatedMovie.title} />
                                        <Info>
                                            <h3>{relatedMovie.title}</h3>
                                            <p><strong>Release Date:</strong> {relatedMovie.release_date}</p>
                                            <p><strong>Rating:</strong> {relatedMovie.vote_average}</p>
                                            <Overview>{relatedMovie.overview}</Overview>
                                        </Info>
                                    </Poster>
                                </Link>
                            ))}
                        </ScrollContainer>
                    </RelatedMovies>
                </>
            )}
        </DetailContainer>
    );
};

const DetailContainer = styled.div`
    color: white;
`;

const Banner = styled.div`
    height: 60vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
    padding: 20px;
`;

const BannerContent = styled.div`
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;

    h1 {
        font-size: 36px;
    }

    p {
        margin: 10px 0;
    }
`;

const Details = styled.div`
    padding: 20px;

    h2 {
        margin-bottom: 20px;
    }

    p {
        margin: 5px 0;
    }
`;

const RelatedMovies = styled.div`
    padding: 20px;

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
    @media (max-width: 550px) {
    min-width: 25vw;
    max-width: 25vw;
    height: auto;
  }

  @media (max-width: 350px) {
    min-width: 32vw;
    height: auto;
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

export default MovieDetail;
