import { IArticle } from "../types/article";

const fakeContentText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, iste saepe! Ipsum magnam, non tenetur distinctio, qui similique harum vel sint veritatis laborum molestiae illum unde dicta delectus, fugiat maiores!";

export const getFakeArticles = (count: number) => {
  const articles: IArticle[] = [];
  for (let i = 1; i <= count; i++) {
    articles.push({
      id: i,
      title: `Article ${i}`,
      content: fakeContentText.repeat(Math.ceil(Math.random() * 10)),
      tags: [],
      createdAt: new Date().toLocaleDateString(),
    });
  }
  return articles;
};
