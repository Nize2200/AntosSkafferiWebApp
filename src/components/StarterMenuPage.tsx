import React, {useEffect, useState} from "react";
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import Styledline from "../typographi/styledline.tsx";
import Greystyledline from "../typographi/greystyledline.tsx";
import {fetchStarters} from "../api/ApiFetch.tsx";

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
            <StyledMainTitle>
                Förrätter:
                <Styledline/>
            </StyledMainTitle>
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