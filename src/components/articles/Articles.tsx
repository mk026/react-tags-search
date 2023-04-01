import { FC } from "react";

import { IArticle } from "../../types/article";
import Article from "./article";

interface ArticlesProps {
  articles: IArticle[];
}

const Articles: FC<ArticlesProps> = ({ articles }) => {
  return (
    <ul>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </ul>
  );
};

export default Articles;
