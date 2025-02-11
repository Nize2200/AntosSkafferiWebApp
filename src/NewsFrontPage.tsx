import styled from "styled-components";

const Main = styled.div`

`;

const StyledTitle = styled.div`
    text-align: center;
    font-size: 50px;
    font-family: -apple-system;
`;
const StyledText = styled.div`


`;

function NewsFrontPage() {


    return (
        <Main>
            <StyledTitle>
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