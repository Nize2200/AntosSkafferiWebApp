import styled from "styled-components"
import DagensFrontPage from "./DagensFrontPage.tsx";
import VeckansFrontpage from "./VeckansFrontpage.tsx";
import NavigationBar from "./NavigationBar.tsx";
import SolidLine from "./Typographi/styledline.tsx";
import NewsFrontPage from "./NewsFrontPage.tsx";
import GlobalStyle from "./Typographi/KapakanaFontStyle.tsx";


const Main = styled.div`
`;
const StyledHeader = styled.div`
    text-align: center;
    justify-content: center;
    align-content: center;
    font-family: "Kapakana", sans-serif;
    font-size: 110px;
    margin-bottom: 50px;
    margin-top: 50px;

`;

const StyledNavigation = styled.div`
    text-align: center;
    font-size: 110px;
    margin-bottom: 50px;

`;
function App() {


    return (
        <>
            <GlobalStyle/>
            <Main>

            <StyledHeader>
                Antons Skafferi
                <SolidLine/>
            </StyledHeader>

            <StyledNavigation>
                <NavigationBar/>
            </StyledNavigation>
            <DagensFrontPage/>
            <VeckansFrontpage/>
            <NewsFrontPage/>
        </Main></>

    );
}

export default App;
