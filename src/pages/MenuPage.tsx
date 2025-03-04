import React, { useEffect, useState } from "react";
import SolidLine from "../typographi/styledline.tsx";
import NavigationBar from "../components/NavigationBar.tsx";
import styled from "styled-components";
import StarterMenuPage from "../components/StarterMenuPage.tsx";
import MainMenuPage from "../components/MainMenuPage.tsx";
import { fetchFoods, fetchDrinks } from "../api/ApiFetch.tsx";
import DessertMenuPage from "../components/DessertMenuPage.tsx";
import DrinksMenuPage from "../components/DrinksMenuPage.tsx";

const Main = styled.div``;
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

interface Drink {
    drinkID: number;
    drinkName: string;
    drinkCategory: string;
    drinkDescription: string;
    drinkPrice: number;
}

const MenuPage: React.FC = () => {
    const [starters, setStarters] = useState<Food[]>([]);
    const [mainCourses, setMainCourses] = useState<Food[]>([]);
    const [desserts, setDesserts] = useState<Food[]>([]);
    const [drinks, setDrinks] = useState<Drink[]>([]);

    const getFoodsAndDrinks = async () => {
        try {
            const foodData: Food[] = await fetchFoods();
            setStarters(foodData.filter(food => food.foodCategory === "STARTER"));
            setMainCourses(foodData.filter(food => food.foodCategory === "MAIN_COURSE"));
            setDesserts(foodData.filter(food => food.foodCategory === "DESSERT"));

            const drinkData: Drink[] = await fetchDrinks();
            setDrinks(drinkData);
        } catch (error) {
            console.error('Error fetching foods and drinks:', error);
        }
    };

    useEffect(() => {
        getFoodsAndDrinks();
    }, []);

    return (
        <Main>
            <StyledHeader>
                Antons skafferi
                <SolidLine />
            </StyledHeader>
            <StyledNavigation>
                <NavigationBar />
            </StyledNavigation>
            <StarterMenuPage foods={starters} />
            <MainMenuPage foods={mainCourses} />
            <DessertMenuPage foods={desserts} />
            <DrinksMenuPage drinks={drinks} />
        </Main>
    );
};

export default MenuPage;