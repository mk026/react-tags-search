import { FC } from "react";

import { ITag } from "../../../../types/tag";

import classes from "./SearchSuggestions.module.css";

interface SearchSuggestionsProps {
  isOpen: boolean;
}

const SearchSuggestions: FC<SearchSuggestionsProps> = ({ isOpen }) => {
  const fakeTags: ITag[] = [
    { id: 1, title: "tag 1" },
    { id: 2, title: "tag 2" },
    { id: 3, title: "tag 3" },
  ];

  return isOpen ? (
    <div className={classes.suggestions}>
      <select multiple>
        {fakeTags.map((tag) => (
          <option className={classes.tag} key={tag.id} value={tag.id}>
            {tag.title}
          </option>
        ))}
      </select>
    </div>
  ) : null;
};

export default SearchSuggestions;
