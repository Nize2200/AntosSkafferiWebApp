import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";

const Main = styled.div`

`;

const StyledTitle = styled.div`
    text-align: center;
    font-size: 50px;
    font-family: "Kapakana", sans-serif;
`;
const StyledText = styled.div`


`;

function App() {


    return (
        <>
            <GlobalStyle/>
            <Main>
            <StyledTitle>
                Dagens:
            </StyledTitle>
            <StyledText>
                Import from api
            </StyledText>
        </Main></>

    )
        ;
}


export default App;