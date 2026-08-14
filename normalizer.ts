import apiResponse from "./response.ts";

type Article = {
  id: string;
  title: string;
  status: "published" | "draft";
  author: {
    name: string;
  };
  stats: {
    views: number;
  };
};

type ApiResponse = {
  data: Article[];
  meta: {
    total: number;
  };
};

type ArticleSummary = {
  id: string;
  title: string;
  authorName: string;
  views: number;
};

function toArticleSummary(article: Article): ArticleSummary {
  return {
    id: article.id,
    title: article.title,
    authorName: article.author.name,
    views: article.stats.views,
  };
}

function getPublishedArticles(response: ApiResponse): Article[] {
  return response.data.filter(
    (article) => article.status === "published"
  );
}

function normalizeArticles(response: ApiResponse): ArticleSummary[] {
  const publishedArticles = getPublishedArticles(response);

  return publishedArticles.map((article) => toArticleSummary(article));
}

console.log(normalizeArticles(apiResponse));
console.log(getPublishedArticles(apiResponse).length);
console.log(toArticleSummary(apiResponse.data[0]));