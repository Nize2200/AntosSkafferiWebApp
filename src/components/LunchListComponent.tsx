import React from "react";
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";


const LunchList = styled.div`
    padding: none;
`;

const LunchItem = styled.div`
    padding-left: 20px;
    padding-bottom: 5px;
    padding-top: 10px;
    border-bottom: 1px solid #b8b8b8;
    font-weight: lighter;
`;

const WeeksLunchesTag = styled.div`
    font-family: "Kapakana", sans-serif;
    font-size: 3rem;
    padding-left: 20px;
    border-bottom: 1px solid #000000;
`;

const TodaysLunch = styled.div`
    text-align: center;
    justify-content: center;
    align-content: center;
`;

interface Lunch {
    lunchName: string;
    lunchWeek: number;
    lunchDay: number;
    lunchPrice: number;
    lunchDescription: string;
}

interface LunchListComponentProps {
    lunches: Lunch[];
}

const getWeekday = (dayNumber: number): string => {
    const weekdays = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
    return weekdays[dayNumber -1 ];
};

const CalculateTodaysLunch = (lunches: Lunch[]): Lunch | undefined => {
    const today = new Date();
    console.log("lunches"+lunches)
    const weekday = today.getDay();
    return lunches.find((lunch) => lunch.lunchDay ===  weekday);
}

const LunchListComponent: React.FC<LunchListComponentProps> = ({ lunches }) => {
    const todaysLunch = CalculateTodaysLunch(lunches);
    console.log(todaysLunch);

    return (
        <>
            <GlobalStyle />
            <TodaysLunch>
                {todaysLunch ? (
                    <h1>Dagens lunch: {todaysLunch.lunchName} {todaysLunch.lunchPrice} :-</h1>
                ) : (
                    <h1>Ingen lunch tillgänglig idag</h1>
                )}
            </TodaysLunch>

            <WeeksLunchesTag>Veckans luncher</WeeksLunchesTag>
            <LunchList>
                {lunches.map((lunch, index) => (
                    <LunchItem key={index}>
                        {getWeekday(lunch.lunchDay)}: {lunch.lunchName}
                    </LunchItem>
                ))}
            </LunchList>
        </>
    );
};

export default LunchListComponent;