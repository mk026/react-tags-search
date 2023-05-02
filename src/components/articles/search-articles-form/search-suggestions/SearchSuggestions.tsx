import { FC } from "react";

interface SearchSuggestionsProps {
  isOpen: boolean;
}

const SearchSuggestions: FC<SearchSuggestionsProps> = ({ isOpen }) => {
  return isOpen ? <div>SearchSuggestions</div> : null;
};

export default SearchSuggestions;
