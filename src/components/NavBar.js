import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");
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
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
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

const Nav = styled.div`
  height: 10%;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #111;
  z-index: 1;

  img {
    @media (max-width: 350px) {
      width: 20vw;
    }
  }
`;

const SearchForm = styled.form`
  display: flex;
`;

const SearchInput = styled.input`
  padding: 5px;
  border: none;
  border-radius: 5px;
  width: 30vw;
  @media (max-width: 350px) {
    width: 20vw;
    font-size: 3vw;
  }
`;

const SearchButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: none;
  background-color: #e50914;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  @media (max-width: 350px) {
    font-size: 3vw;
        padding: 0px 5px;
  }
`;

export default Navbar;
