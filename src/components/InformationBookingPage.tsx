import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
`;

const StyledTitle = styled.h2`
    font-size: 50px;
    font-family: "Kapakana", sans-serif;
    font-weight: lighter;
`;

const StyledText = styled.p`
    max-width: 600px;
    text-align: center;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin-top: 20px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledImage = styled.img`
    width: 30%;
    height: auto;
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
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </StyledText>
                </Section>

                <InfoContainer>
                    <TextContainer>
                        <Section>
                            <StyledTitle>Öppettider</StyledTitle>
                            <StyledText>
                                Sön-Tors: 10-22 <br />
                                Fre-Lör: 10-00
                            </StyledText>
                        </Section>
                        <Section>
                            <StyledTitle>Kontakt</StyledTitle>
                            <StyledText>Telefon: 076 123 123 12</StyledText>
                        </Section>
                    </TextContainer>
                    <StyledImage src="images/wineglass.png" alt="Wine Glass" />
                </InfoContainer>
            </Main>
        </>
    );
}

export default App;
