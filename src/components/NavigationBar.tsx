import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HamburgerMenu from "../buttons/HamburgerMenu.tsx";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";

const HamburgerStyle = styled.div`
    margin-right: 10px;
`;

const TopNavigation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    font-family: "Kapakana", sans-serif;
    font-size: 4rem;
`;

const NavLinks = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

const MenuItem = styled(Link)`
    color: #000;
    text-decoration: none;


    &:hover {
        color: #8a8a8a;
    }
`;

const NavigationBar: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <TopNavigation>
                <StyledLogo>
                    <MenuItem to="/">Antons</MenuItem>
                </StyledLogo>
                <NavLinks>
                    <MenuItem to="/meny">Meny</MenuItem>
                    <MenuItem to="/bokabord">Boka bord</MenuItem>
                </NavLinks>
                <HamburgerStyle>
                    <HamburgerMenu />
                </HamburgerStyle>
            </TopNavigation>
        </>
    );
};

export default NavigationBar;