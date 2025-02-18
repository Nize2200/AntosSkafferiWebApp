import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import LunchListComponent from "./LunchListComponent.tsx";
import {fetchLunches} from "../api/ApiFetch.tsx";

const Main = styled.div`

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


const DagensFrontPage: React.FC = () => {
    const [lunches, setLunches] = useState<Lunch[]>([]);

    useEffect(() => {
        const getLunches = async () => {
            try {
                const data = await fetchLunches();
                setLunches(data);
            } catch (error) {
                console.error('Error fetching lunches:', error);
            }
        };

        getLunches();
    }, []);

    return (
        <>
            <GlobalStyle />
            <Main>
                <LunchListComponent lunches={lunches} />
            </Main>
        </>
    );
};

export default DagensFrontPage;