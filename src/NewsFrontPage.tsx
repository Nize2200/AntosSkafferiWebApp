import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Kapakana";
    src: url("/Fonts/Kapakana[wght].ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

const Main = styled.div`

`;

const StyledTitle = styled.div`
    text-align: center;
    font-size: 50px;
    font-family: "Kapakana", sans-serif;
`;
const StyledText = styled.div`


`;

function NewsFrontPage() {


    return (
        <>
            <GlobalStyle/>
            <Main>
            <StyledTitle>
                Nyheter:
            </StyledTitle>
            <StyledText>
                import from api
            </StyledText>
        </Main></>

    )
        ;
}


export default NewsFrontPage;