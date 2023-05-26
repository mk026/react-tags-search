import { FC } from "react";

import SearchArticlesForm from "./search-articles-form";
import ArticlesGrid from "./articles-grid/ArticlesGrid";
import { useArticlesQuery } from "../../hooks/useArticlesQuery";

const Articles: FC = () => {
  const { data } = useArticlesQuery();
  return (
    <>
      <SearchArticlesForm />
      <ArticlesGrid articles={data || []} />
    </>
  );
};

export default Articles;
