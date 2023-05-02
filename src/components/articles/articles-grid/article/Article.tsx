import { FC } from "react";

import { IArticle } from "../../../../types/article";
import Card from "../../../ui/card";

import classes from "./Article.module.css";

interface ArticleProps {
  article: IArticle;
}

const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <Card className={classes.article}>
      <p className={classes["article__header"]}>{article.title}</p>
      <p className={classes["article__content"]}>{article.content}</p>
    </Card>
  );
};

export default Article;
