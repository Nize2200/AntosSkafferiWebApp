import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; 
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    text-align: center;
    width: 100%; 
`;

const StyledTitle = styled.div`
    font-size: 50px;
    font-family: "Kapakana", sans-serif;
`;

const StyledText = styled.div`
    width: 30%;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <Section>
                    <StyledTitle>Boka bord</StyledTitle>
                    <StyledText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </StyledText>
                </Section>
                <Section>
                    <StyledTitle>Öppettider</StyledTitle>
                    <StyledText>
                        - <br /> Sön-Tors 10-22 <br />
                        Fre-Lör 10-00
                    </StyledText>
                </Section>
                <Section>
                    <StyledTitle>Kontakt</StyledTitle>
                    <StyledText>
                        - <br /> Telefon: <br />
                        076 123 123 12
                    </StyledText>
                </Section>
            </Main>
        </>
    );
}

export default App;
