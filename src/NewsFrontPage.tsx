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