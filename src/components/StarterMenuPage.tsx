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
`;

const StyledText = styled.div`
    text-align: left;
    font-size: 17px;
    color: #939393;
    margin-left: 100px;
    width: 40%;
`;

interface foodID {
    foodID: number;
    foodName: string;
    foodType: string;
    foodCategory: string;
    foodDescription: string;
    foodPrice: number;
}

const StarterMenuPage: React.FC = () => {
    const [starters, setStarters] = useState([]);

    useEffect(() => {
        const getStarters = async () => {
            try {
                const data = await fetchStarters();
                console.log("data:"+data)
                setStarters(data);
            } catch (error) {
                console.error('Error fetching starters:', error);
            }
        };

        getStarters();
    }, []);

    return (
        <><GlobalStyle/>
            <StyledMainTitle>
                Förrätter:
                <Styledline/>
            </StyledMainTitle>
            {starters.map((starter: foodID) => (
                <div key={starter.foodID}>
                    <StyledTitle>
                        {starter.foodName}
                        {starter.foodPrice} kr
                        <Greystyledline/>
                    </StyledTitle>
                    <StyledText>
                        {starter.foodDescription}
                    </StyledText>
                </div>
            ))}
        </>

    );
}

export default StarterMenuPage;