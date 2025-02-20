import React from "react";
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import Greystyledline from "../typographi/greystyledline.tsx";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row-reverse; /* Spegelvänd layout */
    justify-content: space-between;
    width: 100%;
    margin-top: 100px;
`;

const ImageContainer = styled.div`
    width: 30%;
    height: 30%;
    display: flex;
`;

const FoodListContainer = styled.div`
    width: 100%;
    margin-top: 200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 100px;
`;

const FoodContainer = styled.div`
    margin-bottom: 20px;
`;

const LineContainer = styled.div`
    width: 40%;
    margin-top: 1px;
    margin-left: 100px;
`;

const StyledMainTitle = styled.div`
    text-align: center;
    font-size: 70px;
    font-family: "Kapakana", sans-serif;
    margin-left: 100px;
    width: 40%;
`;

const StyledTitle = styled.div`
    text-align: left;
    font-size: 30px;
    margin-left: 100px;
    width: 40%;
    display: flex;
    justify-content: space-between;
`;

const StyledPrice = styled.div`
    text-align: right;
`;

const StyledImage = styled.img`
    width: 70%;
    height: 70%;
    margin-left: 100px;
    margin-top: 60px;
    border-radius: 50px;
`;

const StyledText = styled.div`
    text-align: left;
    font-size: 17px;
    color: #939393;
    margin-left: 100px;
    width: 30%;
`;

interface Food {
    foodID: number;
    foodName: string;
    foodType: string;
    foodCategory: string;
    foodDescription: string;
    foodPrice: number;
}

type FoodListProps = {
    foods: Food[];
}

const MainMenuPage: React.FC<FoodListProps> = ({foods}) => {
    return (
        <PageContainer>
            <GlobalStyle/>
            <TitleContainer>
                <StyledMainTitle>
                    Varmrätter
                </StyledMainTitle>
                <ImageContainer>
                    <StyledImage src="images/meatball.png" alt="Meatball"/>
                </ImageContainer>
            </TitleContainer>

            <FoodListContainer>
                {foods.map((food, index) => (
                    <FoodContainer key={index}>
                        <StyledTitle>
                            {food.foodName}
                            <StyledPrice>
                                {food.foodPrice}kr
                            </StyledPrice>
                        </StyledTitle>
                        <LineContainer>
                            <Greystyledline/>
                        </LineContainer>
                        <StyledText>
                            {food.foodDescription}
                        </StyledText>
                    </FoodContainer>
                ))}
            </FoodListContainer>
        </PageContainer>
    );
}

export default MainMenuPage;