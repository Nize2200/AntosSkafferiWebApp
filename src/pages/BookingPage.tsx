import React from "react";
import SolidLine from "../typographi/styledline.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import styled from "styled-components";
import InformationBookingPage from "../components/InformationBookingPage.tsx";

const Main = styled.div`
`;
const StyledHeader = styled.div`
    text-align: center;
    justify-content: center;
    align-content: center;
    font-family: "Kapakana", sans-serif;
    font-size: 4rem;
    margin-bottom: 50px;
    margin-top: 4rem;

`;

const StyledNavigation = styled.div`
    text-align: center;
    font-size: 110px;
    margin-bottom: 50px;

`;
const BookingPage: React.FC = () => {
    return (
        <Main>
            <StyledHeader>
                Antons skafferi
                <SolidLine/>
            </StyledHeader>
            <StyledNavigation>
                <NavigationBar/>
            </StyledNavigation>
            <InformationBookingPage/>
        </Main>
    )
        ;
};

export default BookingPage;