import { FC } from "react";

import AppInfo from "../app-info";
import SearchArticlesForm from "./search-articles-form";
import ArticlesGrid from "./articles-grid/ArticlesGrid";
import { useGetArticlesQuery } from "../../hooks/useGetArticlesQuery";

const Articles: FC = () => {
  const { data } = useGetArticlesQuery();

  return (
    <>
      <AppInfo />
      <SearchArticlesForm />
      <ArticlesGrid articles={data || []} />
    </>
  );
};

export default Articles;
