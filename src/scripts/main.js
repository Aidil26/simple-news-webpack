import "../scripts/components/card-element/index.js";

function main() {
    const baseUrl = "https://newsapi.org/v2";

    // code getArticles with newsapi

    const getBbcNews = async () => {
        try {
            const response = await fetch(
                `${baseUrl}/top-headlines?sources=bbc-news&apiKey=8e75d45ce3dd4fe3877f205eea1fe743`
            );
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderBBCNews(responseJson.articles);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const getBbcSport = async () => {
        try {
            const response = await fetch(
                `${baseUrl}/top-headlines?sources=bbc-sport&apiKey=8e75d45ce3dd4fe3877f205eea1fe743`
            );
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderBBCSport(responseJson.articles);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    const getGermany = async () => {
        try {
            const response = await fetch(
                `${baseUrl}/top-headlines?country=de&category=business&apiKey=8e75d45ce3dd4fe3877f205eea1fe743`
            );
            const responseJson = await response.json();
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderGermany(responseJson.articles);
            }
        } catch (error) {
            showResponseMessage(error);
        }
    };

    //  code render result from getArticles
    const renderBBCNews = (articles) => {
        const listArticleElement = document.querySelector("news-list");
        listArticleElement.news = articles;
    };

    const renderBBCSport = (articles) => {
        const listArticleElement = document.querySelector("news-list");
        listArticleElement.news = articles;
    };

    const renderGermany = (articles) => {
        const listArticleElement = document.querySelector("news-list");
        listArticleElement.news = articles;
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        const bbcNews = document.querySelector("#bbcNews");
        const bbcSport = document.querySelector("#bbcSport");
        const germanyNews = document.querySelector("#germanyNews");

        bbcNews.addEventListener("click", () => {
            getBbcNews();
        });

        bbcSport.addEventListener("click", () => {
            getBbcSport();
        });

        germanyNews.addEventListener("click", () => {
            getGermany();
        });

        getBbcNews();
    });
}

export default main;