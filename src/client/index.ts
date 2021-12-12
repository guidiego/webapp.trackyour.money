import axios, { AxiosInstance } from "axios";
import GenericInterface, { GenericOutput } from "./GenericInterface";

import { dehydrate, QueryClient } from "react-query";

class AppClient {
  private axios: AxiosInstance;
  private rcQuery: QueryClient;
  apis: {
    account: GenericOutput<Account>;
    entry: GenericOutput<Entry>;
    budget: GenericOutput<Budget>;
  };

  setup(baseURL, token) {
    this.axios = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    this.axios.interceptors.response.use((value) => value.data);

    this.rcQuery = new QueryClient();
    this.apis = {
      account: GenericInterface("/account", this.axios, this.rcQuery),
      entry: GenericInterface("/entry", this.axios, this.rcQuery),
      budget: GenericInterface("/budget", this.axios, this.rcQuery),
    };
  }

  getDehydratedState() {
    return dehydrate(this.rcQuery);
  }
}

export default new AppClient();
