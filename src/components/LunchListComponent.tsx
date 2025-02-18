import React from "react";
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";

const LunchList = styled.div`
    padding: 20px;
`;

const LunchItem = styled.div`
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`;

const LunchName = styled.h2`
    font-size: 1.5rem;
    margin: 0;
`;

const LunchDescription = styled.p`
    margin: 5px 0;
`;

const LunchPrice = styled.p`
    font-weight: bold;
`;

const LunchDay = styled.p`
    font-style: italic;
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
    const weekdays = ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"];
    return weekdays[dayNumber - 1];
};

const LunchListComponent: React.FC<LunchListComponentProps> = ({ lunches }) => {
    return (
        <>
            <GlobalStyle />
            <LunchList>
                {lunches.map((lunch, index) => (
                    <LunchItem key={index}>
                        <LunchName>{lunch.lunchName}</LunchName>
                        <LunchDescription>{lunch.lunchDescription}</LunchDescription>
                        <LunchPrice>{lunch.lunchPrice} kr</LunchPrice>
                        <LunchDay>{getWeekday(lunch.lunchDay)}</LunchDay>
                    </LunchItem>
                ))}
            </LunchList>
        </>
    );
};

export default LunchListComponent;