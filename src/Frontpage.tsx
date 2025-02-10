import styled from "styled-components"
import DagensFrontPage from "./DagensFrontPage.tsx";
import VeckansFrontpage from "./VeckansFrontpage.tsx";
import NavigationBar from "./NavigationBar.tsx";
import SolidLine from "./Typographi/styledline.tsx";


const Main = styled.div`
`;
const StyledHeader = styled.div`
    text-align: center;
    font-family: "Blackadder ITC";
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
        <Main>
            <StyledHeader>
                Antos Skafferi
            </StyledHeader>
            <SolidLine/>
            <StyledNavigation>
                <NavigationBar/>
            </StyledNavigation>
            <DagensFrontPage/>
            <VeckansFrontpage/>
        </Main>

    );
}

export default App;
