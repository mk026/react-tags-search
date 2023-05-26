import { useQuery } from "@tanstack/react-query";

import { fakeGetArticleRequest } from "../api/fakeApi";

export const useArticlesQuery = () =>
  useQuery({ queryKey: ["articles"], queryFn: fakeGetArticleRequest });
