import { FC, FocusEvent, useState } from "react";

import SearchSuggestions from "./search-suggestions";

import classes from "./SearchArticleForm.module.css";

const SearchArticlesForm: FC = () => {
  const [suggestionsIsOpen, setSuggestionsIsOpen] = useState(false);

  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    setSuggestionsIsOpen(true);
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    setSuggestionsIsOpen(false);
  };

  return (
    <div className={classes["search-articles"]}>
      <form>
        <input
          type="text"
          placeholder="Search articles..."
          className={classes["search-articles__input"]}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <button className={classes["search-articles__button"]}>Search</button>
      </form>
      <SearchSuggestions isOpen={suggestionsIsOpen} />
    </div>
  );
};

export default SearchArticlesForm;
