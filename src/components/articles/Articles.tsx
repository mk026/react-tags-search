import { FC, useState } from "react";

import AppInfo from "../app-info";
import SearchArticlesForm from "./search-articles-form";
import ArticlesGrid from "./articles-grid/ArticlesGrid";
import { useGetArticlesQuery } from "../../hooks/useGetArticlesQuery";

const Articles: FC = () => {
  const { data } = useGetArticlesQuery();
  const [infoIsVisible, setInfoIsVisible] = useState(true);

  const closeInfoHandler = () => setInfoIsVisible(false);

  return (
    <>
      {infoIsVisible && <AppInfo onClose={closeInfoHandler} />}
      <SearchArticlesForm />
      <ArticlesGrid articles={data || []} />
    </>
  );
};

export default Articles;
