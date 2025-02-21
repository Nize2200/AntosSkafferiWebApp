import React, {useEffect, useState} from "react";
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import {fetchNews} from "../api/ApiFetch.tsx";

const Main = styled.div`

`;


const StyledTitle = styled.div`
    text-align: center;
    font-size: 50px;
    font-family: "Kapakana", sans-serif;
`;
const StyledText = styled.div`


`;
interface News {
    newsTitle: number;
    newsInfo: string;
    newsDate: string;
    newsURLImage: string;
    }
const NewsFrontPage: React.FC = () => {
    const [newsset, setNews] = useState<News[]>([]);
  ;

    const getNews = async () => {
        try {
            const data: News[] = await fetchNews();
            setNews(data);

        } catch (error) {
            console.error('Error fetching foods:', error);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <GlobalStyle />
            <Main>
                <StyledTitle>News</StyledTitle>
                {newsset.map((newsItem) => (
                    <StyledText key={newsItem.newsTitle}>
                        {newsItem.newsInfo} - {newsItem.newsDate} (
                        <img src={newsItem.newsURLImage} alt={newsItem.newsInfo} style={{ width: "100px" }} />
                        )
                    </StyledText>
                ))}
            </Main>
        </>
    );
};

export default NewsFrontPage;