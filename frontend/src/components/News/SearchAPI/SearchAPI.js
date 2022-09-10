import axios from "axios";

// API KEY 1 = e49fb9919e6a4f38b85897d49c053ab0
// API KEY 2 = 8ed58e44541746268b2815cb9b51a472

export default async function getNewsData(topics) {
    if (topics == null) return;
    let query = "";
    let API_KEY = "e49fb9919e6a4f38b85897d49c053ab0";

    for (const topic of topics) {
        if (topic.selected) query += topic.label + " ";
    }
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&pageSize=5`;
    const formattedArticles = [];
    try {
        const res = await axios.get(url);
        const articlesResponse = res.data.articles;
        for (let i = 0; i < articlesResponse.length; i++) {
            const article = articlesResponse[i];
            formattedArticles.push({
                id: i,
                title: article.title,
                date: formatDate(new Date(article.publishedAt)),
                link: article.url,
            });
        }
    } catch (error) {
        console.error(error);
        return;
    }

    if (formattedArticles.length == 0) return;
    return formattedArticles;
}

function formatDate(date) {
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}