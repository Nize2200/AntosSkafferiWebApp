import React, {useEffect, useState} from "react";
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import Styledline from "../typographi/styledline.tsx";
import Greystyledline from "../typographi/greystyledline.tsx";


const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
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
    width: 20%;
    height: 20%;
    margin-right: 100px;
`;

const StyledText = styled.div`
    text-align: left;
    font-size: 17px;
    color: #939393;
    margin-left: 100px;
    width: 40%;
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

const StarterMenuPage: React.FC<FoodListProps> = ({ foods }) => {

    return (
        <><GlobalStyle/>
            <InfoContainer>

            <StyledMainTitle>
                Förrätter:
                <Styledline/>
            </StyledMainTitle>
                <StyledImage src="images/skagen.png" alt="Skagen"/>
            </InfoContainer>
            {foods.map((food, index) => (
                <div key={index}>
                    <StyledTitle>
                        {food.foodName}
                        <StyledPrice>
                            {food.foodPrice}kr
                        </StyledPrice>
                    </StyledTitle>
                    <StyledText>
                        <Greystyledline/>
                        {food.foodDescription}
                    </StyledText>
                </div>
            ))}

        </>

    );
}

export default StarterMenuPage;