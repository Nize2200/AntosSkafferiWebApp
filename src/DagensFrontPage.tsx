import styled from "styled-components";

const Main = styled.div`

`;

const StyledTitle = styled.div`
    text-align: center;
    font-size: 50px;
    font-family: "Courier New";
`;
const StyledText = styled.div`


`;

function App() {


    return (
        <Main>
            <StyledTitle>
                Dagens:
            </StyledTitle>
            <StyledText>
                import from api
            </StyledText>
        </Main>

    )
        ;
}


export default App;