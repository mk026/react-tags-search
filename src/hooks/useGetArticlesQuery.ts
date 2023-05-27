import { useQuery } from "@tanstack/react-query";

import { fakeGetArticleRequest } from "../api/fakeApi";

export const useGetArticlesQuery = () =>
  useQuery({ queryKey: ["articles"], queryFn: fakeGetArticleRequest });
