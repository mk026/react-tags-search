import { FC, useState } from "react";

import { IArticle } from "../../../../types/article";
import Card from "../../../ui/card";

import classes from "./Article.module.css";
import Button from "../../../ui/button/Button";

interface ArticleProps {
  article: IArticle;
  expand?: boolean;
}

const Article: FC<ArticleProps> = ({ article }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  let { content } = article;
  const isExpandable = content.length > 200;

  if (isExpandable && !isExpanded) {
    content = content.slice(0, 200) + "...";
  }

  return (
    <Card className={classes.article}>
      <p className={classes["article__header"]}>{article.title}</p>
      <p className={classes["article__content"]}>{content}</p>
      {isExpandable && !isExpanded && (
        <Button onClick={() => setIsExpanded(true)}>Read more</Button>
      )}
    </Card>
  );
};

export default Article;
