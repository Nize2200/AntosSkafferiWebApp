import React from "react";
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import Greystyledline from "../typographi/greystyledline.tsx";

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin-top: -5rem;
    @media (max-width: 768px) {
        width: 100%;
        margin-top: 0;
    }
`;

const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

const FoodListContainer = styled.div`
    width: 90%;
`;

const FoodContainer = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;

const LineContainer = styled.div`
    width: 100%;
    margin-top: 1px;
`;

const StyledMainTitle = styled.div`
    text-align: center;
    font-size: 70px;
    font-family: "Kapakana", sans-serif;
    margin-bottom: 20px;
`;

const StyledTitle = styled.div`
    text-align: left;
    font-size: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const StyledPrice = styled.div`
    text-align: right;
`;

const StyledImage = styled.img`
    border-radius: 55px;
    width: 25vw;
    height: 25vw;
    max-width: 400px;
    max-height: 400px;
    margin-top: 2rem;
`;

const StyledText = styled.div`
    font-size: 1.2rem;
    color: #939393;
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
            <ImageContainer>
                <StyledImage src="images/meatball.png" alt="Meatball"/>
            </ImageContainer>
            <ListContainer>
                <FoodListContainer>
                    <StyledMainTitle>
                        Varmrätter
                    </StyledMainTitle>
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
            </ListContainer>
        </PageContainer>
    );
}

export default MainMenuPage;