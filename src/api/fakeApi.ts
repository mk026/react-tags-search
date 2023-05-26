import { IArticle } from "../types/article";
import { getFakeArticles } from "../utils/getFakeData";

export const fakeGetArticleRequest = (): Promise<IArticle[]> => {
  const fakeArticles = getFakeArticles(10);
  return new Promise((res) => setTimeout(() => res(fakeArticles), 1000));
};
