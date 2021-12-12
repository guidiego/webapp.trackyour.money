import { AxiosInstance } from "axios";
import { QueryClient, useQuery, UseQueryResult } from "react-query";

export class GenericInterface<T> {
  private path: string;
  private client: AxiosInstance;
  private query: QueryClient;

  constructor(path: string, client: AxiosInstance, rcQuery: QueryClient) {
    this.path = path;
    this.client = client;
    this.query = rcQuery;
  }

  private prepareKey(preFix: string) {
    return `${preFix}${this.path.replace("/", "-")}`;
  }

  private async paginate(params = {}): Promise<Page<T>> {
    return this.client.get(this.path, { params });
  }

  async prefetchPaginate(): Promise<void> {
    await this.query.prefetchQuery(
      this.prepareKey("paginate"),
      this.paginate.bind(this)
    );
  }

  queryPaginate(): UseQueryResult<Page<T>> {
    return useQuery(this.prepareKey("paginate"), this.paginate.bind(this));
  }
}

export default GenericInterface;
