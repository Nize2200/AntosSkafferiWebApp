import React from "react";
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import Styledline from "../typographi/styledline.tsx";
import Greystyledline from "../typographi/greystyledline.tsx";

const StyledMainTitle = styled.div`
    text-align: center;
    font-size: 70px;
    font-family: "Kapakana", sans-serif;
    margin-left: 100px;
    width: 40%;
`;

const StyledTitle = styled.div`
    text-align: left;
    font-size: 30px;
    margin-left: 100px;
    width: 40%;
`;

const StyledText = styled.div`
    text-align: left;
    font-size: 17px;
    color: #939393;
    margin-left: 100px;
    width: 40%;
`;

const StarterMenuPage: React.FC = () => {
    return (
        <><GlobalStyle/>
            <StyledMainTitle>
                Förrätter:
                <Styledline/>
            </StyledMainTitle>
            <StyledTitle>
                Toast Skagen
                <Greystyledline/>
            </StyledTitle>
            <StyledText>
                Räkor, majonnäs, dill, citron, rostat bröd.
            </StyledText>
            <StyledTitle>
                Löjromstoast
            </StyledTitle>

        </>

    );
}

export default StarterMenuPage;