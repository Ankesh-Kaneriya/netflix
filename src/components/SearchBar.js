import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <SearchBarContainer>
            <input
                type="text"
                placeholder="Search for a movie..."
                value={input}
                onChange={handleChange}
            />
        </SearchBarContainer>
    );
};

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;

    input {
        width: 50%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ddd;
        font-size: 16px;
    }
`;

export default SearchBar;
