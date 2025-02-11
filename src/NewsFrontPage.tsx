import styled from "styled-components";

const Main = styled.div`

`;

const StyledTitle = styled.div`
    text-align: center;
    font-size: 50px;
    font-family: "Kapakana";
    src: url('/Fonts/Kapakana[wght].ttf');
`;
const StyledText = styled.div`


`;

function NewsFrontPage() {


    return (
        <Main>
            <StyledTitle style={{ fontfamily: "'Kapakana', sans-serif" }}>
                Nyheter:
            </StyledTitle>
            <StyledText>
                import from api
            </StyledText>
        </Main>

    )
        ;
}


export default NewsFrontPage;