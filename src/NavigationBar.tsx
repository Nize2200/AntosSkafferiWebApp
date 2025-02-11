import React from "react";
import styled from "styled-components";
import HamburgerMenu from "./Buttons/HamburgerMenu.tsx";
import GlobalStyle from "./Typographi/KapakanaFontStyle.tsx";

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
    text-align: center;
    padding: 0 20px;
`;

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    font-family: "Kapakana", sans-serif;
    font-size: 30px;
`;

const NavLinks = styled.div`
    font-size: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-grow: 1;
    gap: 20px;
`;

const MenuItem = styled.a`
    margin: 0 15px;
    color: #000;
    text-decoration: none;

    &:hover {
        color: blue;
        text-decoration: underline;
    }
`;


const NavigationBar: React.FC = () => {


    return (
        <>
            <GlobalStyle/>
            <TopNavigation>
                <StyledLogo>
                    <MenuItem>Antons</MenuItem>
                </StyledLogo>
                <NavLinks>
                    <MenuItem href="meny">Meny</MenuItem>
                    <MenuItem href="nyheter">Nyheter</MenuItem>
                    <MenuItem href="bokabord">Boka bord</MenuItem>
                </NavLinks>
                <HamburgerStyle>
                    <HamburgerMenu/>
                </HamburgerStyle>
            </TopNavigation>
        </>
    );
};
export default NavigationBar;
