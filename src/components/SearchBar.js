import React, { useState } from 'react';
import styled from 'styled-components';
import SearchResults from './SearchResults';

const SearchBar = ({ setSearchResults }) => {
    const [query, setQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query) return;

        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1f0a969ae1c5c0d783759e5c50e1e967&query=${query}`);
        const data = await response.json();
        setSearchResults(data.results);
    };

    return (
        <SearchContainer>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </SearchContainer>
    );
};

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    form {
        display: flex;
    }

    input {
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 5px 0 0 5px;
    }

    button {
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 0 5px 5px 0;
        background-color: #e50914;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: #f40612;
    }
`;

export default SearchBar;
