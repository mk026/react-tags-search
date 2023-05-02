import { FC } from "react";

import classes from "./SearchArticleForm.module.css";

const SearchArticlesForm: FC = () => {
  return (
    <div className={classes["search-articles"]}>
      <form>
        <input
          type="text"
          placeholder="Search articles..."
          className={classes["search-articles__input"]}
        />
        <button className={classes["search-articles__button"]}>Search</button>
      </form>
    </div>
  );
};

export default SearchArticlesForm;
