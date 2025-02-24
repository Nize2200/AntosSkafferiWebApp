import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../typographi/KapakanaFontStyle.tsx";
import { fetchNews } from "../api/ApiFetch.tsx";

const Main = styled.div`
    max-width: 900px;
    margin: auto;
    text-align: left;
    
`;

const StyledTitle = styled.h1`
    font-size: 70px;
    font-family: "Kapakana", sans-serif;
    font-style: italic;
    text-align: center;
    font-weight: 200;
`;

const NewsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0;
`;

const NewsImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    margin-right: 30%; 
`;

const NewsText = styled.div`
    flex: 1;
`;

const NewsHeading = styled.h2`
    font-size: 40px;
    font-family: "Kapakana", sans-serif;
    font-style: italic;
    margin-bottom: 10px;
    font-weight: 200;
`;

const NewsInfo = styled.p`
    font-size: 16px;
    line-height: 1.5;
`;

interface News {
    newsTitle: string;
    newsInfo: string;
    newsDate: string;
    newsImage: string;
}

const NewsFrontPage: React.FC = () => {
    const [newsset, setNews] = useState<News[]>([]);

    const getNews = async () => {
        try {
            const data: News[] = await fetchNews();
            setNews(data);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <GlobalStyle />
            <Main>
                <StyledTitle>Nyheter</StyledTitle>
                {newsset.map((newsItem) => (
                    <NewsContainer key={newsItem.newsTitle}>
                        <NewsImage src={newsItem.newsImage} alt={newsItem.newsTitle} />
                        <NewsText>
                            <NewsHeading>{newsItem.newsTitle}</NewsHeading>
                            <NewsInfo>{newsItem.newsInfo}</NewsInfo>
                        </NewsText>
                    </NewsContainer>
                ))}
            </Main>
        </>
    );
};

export default NewsFrontPage;
