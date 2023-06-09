import { FC } from "react";

import { IArticle } from "../../../types/article";
import Article from "./article";

import classes from "./ArticlesGrid.module.css";

interface ArticlesGridProps {
  articles: IArticle[];
}

const ArticlesGrid: FC<ArticlesGridProps> = ({ articles }) => {
  return (
    <div className={classes["articles-grid"]}>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesGrid;
