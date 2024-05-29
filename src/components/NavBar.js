import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <NavContainer>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="User Avatar"
            />
        </NavContainer>
    );
};

const NavContainer = styled.div`
    height: 60px;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #111;
    z-index: 1;
`;

export default NavBar;
