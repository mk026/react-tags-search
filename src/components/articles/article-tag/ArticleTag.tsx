import { FC } from "react";

import { ITag } from "../../../types/tag";

interface ArticleTagProps {
  tag: ITag;
}

const ArticleTag: FC<ArticleTagProps> = ({ tag }) => {
  return <div>{tag.title}</div>;
};

export default ArticleTag;
