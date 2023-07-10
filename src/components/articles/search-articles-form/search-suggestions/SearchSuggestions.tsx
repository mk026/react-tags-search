import { FC } from "react";

import classes from "./SearchSuggestions.module.css";

interface SearchSuggestionsProps {
  isOpen: boolean;
}

const SearchSuggestions: FC<SearchSuggestionsProps> = ({ isOpen }) => {
  return isOpen ? (
    <div className={classes.suggestions}>SearchSuggestions</div>
  ) : null;
};

export default SearchSuggestions;
