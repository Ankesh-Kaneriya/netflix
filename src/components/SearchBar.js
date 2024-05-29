import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <Form id='searchBar' onSubmit={handleSubmit}>
            <Input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for a movie..."
            />
            <Button type="submit">Search</Button>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
    width: 300px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #e50914;
    color: white;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #f40612;
    }
`;

export default SearchBar;
