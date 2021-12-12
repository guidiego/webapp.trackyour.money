import axios, { AxiosInstance } from "axios";
import GenericInterface from "./GenericInterface";

import { dehydrate, QueryClient } from "react-query";

class AppClient {
  private axios: AxiosInstance;
  private rcQuery: QueryClient;
  apis: {
    account: GenericInterface<Account>;
    entry: GenericInterface<Entry>;
    budget: GenericInterface<Any>;
  };

  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3000/api",
    });

    this.axios.interceptors.response.use((value) => value.data);

    this.rcQuery = new QueryClient();
    this.apis = {
      account: new GenericInterface("/account", this.axios, this.rcQuery),
      entry: new GenericInterface("/entry", this.axios, this.rcQuery),
      budget: new GenericInterface("/budget", this.axios, this.rcQuery),
    };
  }

  getDehydratedState() {
    return dehydrate(this.rcQuery);
  }
}

export default new AppClient();
