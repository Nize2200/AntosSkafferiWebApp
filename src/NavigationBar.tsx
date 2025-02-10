import React from "react";
import styled from "styled-components";

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
    font-family: "Blackadder ITC";
    font-size: 30px;
`;

const NavLinks = styled.div`
    font-size: 20px;
    display: flex;
    position: absolute;
    margin-left: 40%;
    justify-content: center;
    flex-grow: 1;
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
            <TopNavigation>
                <StyledLogo>
                    <MenuItem>Antos</MenuItem>
                </StyledLogo>
                <NavLinks>
                    <MenuItem href="meny">Meny</MenuItem>
                    <MenuItem href="nyheter">Nyheter</MenuItem>
                    <MenuItem href="bokabord">Boka bord</MenuItem>
                </NavLinks>
            </TopNavigation>
        </>
    );
};
export default NavigationBar;
