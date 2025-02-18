import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import LunchListComponent from "./LunchListComponent.tsx";

const Main = styled.div`

`;

const StyledTitle = styled.div`
    text-align: center;
    font-size: 50px;
    font-family: "Kapakana", sans-serif;
`;
const StyledText = styled.div`


`;


const lunches = [
    {
        lunchName: "Vegansk Buddha Bowl",
        lunchWeek: 1,
        lunchDay: 1,
        lunchPrice: 140.0,
        lunchDescription: "En blandning av grönsaker, quinoa, hummus och avocado."
    },
    {
        lunchName: "Margherita Pizza",
        lunchWeek: 1,
        lunchDay: 2,
        lunchPrice: 120.0,
        lunchDescription: "Tomatsås, mozzarella och färsk basilika."
    }
];

function App() {


    return (
        <>
            <GlobalStyle/>
            <Main>
                <LunchListComponent lunches={lunches} />
            </Main>
        </>
    );
}


export default App;