import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setSearchTerm }) => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setSearchTerm(input);
            navigate(`/search/${input}`);
        }
    };

    return (
        <Nav>
            <Logo src="/logo.png" alt="Logo" />
            <SearchForm onSubmit={handleSearch}>
                <SearchInput 
                    type="text" 
                    placeholder="Search for a movie..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <SearchButton type="submit">Search</SearchButton>
            </SearchForm>
        </Nav>
    );
};

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #111;
`;

const Logo = styled.img`
    height: 40px;
`;

const SearchForm = styled.form`
    display: flex;
`;

const SearchInput = styled.input`
    padding: 5px;
    border: none;
    border-radius: 5px;
`;

const SearchButton = styled.button`
    padding: 5px 10px;
    margin-left: 10px;
    border: none;
    background-color: #e50914;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`;

export default Navbar;
