import { FC } from "react";

import ArticlesList from "./articles-list";
import SearchArticlesForm from "./search-articles-form";

const Articles: FC = () => {
  return (
    <>
      <SearchArticlesForm />
      <ArticlesList articles={[]} />
    </>
  );
};

export default Articles;
