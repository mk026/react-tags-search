import { FC } from "react";

import { IArticle } from "../../../../types/article";

interface ArticleProps {
  article: IArticle;
}

const Article: FC<ArticleProps> = ({ article }) => {
  return (
    <>
      <p>{article.title}</p>
      <p>{article.content}</p>
    </>
  );
};

export default Article;
