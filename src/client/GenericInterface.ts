import { AxiosInstance } from "axios";
import { QueryClient, useQuery, UseQueryResult } from "react-query";

export interface GenericOutput<T> {
  prefetchFindAll(): Promise<ResultList<T>>;
  queryFindAll(): UseQueryResult<ResultList<T>>;
  prefetchPaginate(): Promise<Page<T>>;
  queryPaginate(): UseQueryResult<Page<T>>;
}

export const GenericInterface = <T>(
  path: string,
  client: AxiosInstance,
  rcQuery: QueryClient
): GenericOutput<T> => {
  const prepareKey = (preFix: string) => `${preFix}${path.replace("/", "-")}`;
  const privateMethods = {
    Paginate: async (params = {}): Promise<Page<T>> =>
      client.get(`${path}/paginate`, { params }),
    FindAll: async (params = {}): Promise<T[]> => client.get(path, { params }),
  };

  return Object.keys(privateMethods).reduce(
    (a, c) => ({
      ...a,
      [`prefetch${c}`]: async () => {
        await rcQuery.prefetchQuery(prepareKey(c), privateMethods[c]);
      },
      [`query${c}`]: () => {
        return useQuery(prepareKey(c), privateMethods[c]);
      },
    }),
    {}
  ) as GenericOutput<T>;
};

export default GenericInterface;
