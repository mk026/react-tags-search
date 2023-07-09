import { FC } from "react";

import { ITag } from "../../../types/tag";

import classes from "./ArticleTag.module.css";

interface ArticleTagProps {
  tag: ITag;
}

const ArticleTag: FC<ArticleTagProps> = ({ tag }) => {
  return <div className={classes.tag}>{tag.title}</div>;
};

export default ArticleTag;
