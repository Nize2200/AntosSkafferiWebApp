import React, {useEffect, useState} from "react";
import SolidLine from "../typographi/styledline.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import styled from "styled-components";
import StarterMenuPage from "../components/StarterMenuPage.tsx";
import MainMenuPage from "../components/MainMenuPage.tsx";
import {fetchFoods} from "../api/ApiFetch.tsx";


const Main = styled.div`
`;
const StyledHeader = styled.div`
    text-align: center;
    justify-content: center;
    align-content: center;
    font-family: "Kapakana", sans-serif;
    font-size: 4rem;
    margin-bottom: 50px;
    margin-top: 4rem;

`;

const StyledNavigation = styled.div`
    text-align: center;
    font-size: 110px;
    margin-bottom: 50px;

`;


interface Food {
    foodID: number;
    foodName: string;
    foodType: string;
    foodCategory: string;
    foodDescription: string;
    foodPrice: number;
}

const MenuPage: React.FC = () => {
    const [starters, setStarters] = useState<Food[]>([]);
    const [mainCourses, setMainCourses] = useState<Food[]>([]);
    const [desserts, setDesserts] = useState<Food[]>([]);

    const getFoods = async () => {
        try {
            const data: Food[] = await fetchFoods();
            setStarters(data.filter(food => food.foodCategory === "STARTER"));
            setMainCourses(data.filter(food => food.foodCategory === "MAIN_COURSE"));
            setDesserts(data.filter(food => food.foodCategory === "DESSERT"));
        } catch (error) {
            console.error('Error fetching foods:', error);
        }
    };

    useEffect(() => {
        getFoods();
    }, []);

    return (
        <Main>
            <StyledHeader>
                Antons skafferi
                <SolidLine/>
            </StyledHeader>
            <StyledNavigation>
                <NavigationBar/>
            </StyledNavigation>
            <StarterMenuPage foods={starters}/>
            <MainMenuPage foods={mainCourses}/>
        </Main>
    );
};

export default MenuPage;