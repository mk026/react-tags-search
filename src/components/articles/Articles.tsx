import { FC } from "react";

import SearchArticlesForm from "./search-articles-form";
import { getFakeArticles } from "../../utils/getFakeData";
import ArticlesGrid from "./articles-grid/ArticlesGrid";

const Articles: FC = () => {
  const articles = getFakeArticles(10);
  return (
    <>
      <SearchArticlesForm />
      <ArticlesGrid articles={articles} />
    </>
  );
};

export default Articles;
