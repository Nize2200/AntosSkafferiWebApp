import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import LunchListComponent from "./LunchListComponent.tsx";
import {fetchLunches} from "../api/ApiFetch.tsx";

const Main = styled.div`

`;

function thisWeek() {
    const today = new Date();
    const onejan = new Date(today.getFullYear(), 0, 1);
    //Returns the week number for this date
    return Math.ceil((((today.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
}


const DagensFrontPage: React.FC = () => {
    const [lunches, setLunches] = useState([]);

    useEffect(() => {
        const getLunches = async () => {
            try {
                const data = await fetchLunches(thisWeek());
                console.log("data:"+data)
                setLunches(data);
            } catch (error) {
                console.error('Error fetching lunches:', error);
            }
        };
        getLunches().then(r => console.log("lunches fetched"));
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