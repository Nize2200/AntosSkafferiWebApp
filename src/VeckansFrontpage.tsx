import styled from "styled-components";
import GlobalStyle from "./Typographi/KapakanaFontStyle.tsx";

const Main = styled.div`

`;

const StyledTitle = styled.div`
    text-align: center;
    font-size: 50px;
    font-family: "Kapakana", sans-serif;

`;
const StyledText = styled.div`
    font-family: "Kapakana", sans-serif;
    font-size: 20px;
    text-align: center;
    

`;

function VeckansFrontpage() {


    return (
        <>
            <GlobalStyle/>
            <Main>
            <StyledTitle>Veckans:</StyledTitle>
            <StyledText>

            </StyledText>
        </Main></>

    )
        ;
}


export default VeckansFrontpage;