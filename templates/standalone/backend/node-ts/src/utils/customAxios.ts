import axios, { AxiosInstance, AxiosHeaderValue } from "axios";
interface IHeaders {
  [key: string]: AxiosHeaderValue;
}

export class CustomAxios {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create();
  }

  public setHeaders(headers: IHeaders): CustomAxios {
    this.instance.interceptors.request.use((config) => {
      for (let key in headers) {
        config.headers[key] = headers[key];
      }
      return config;
    });
    return this;
  }

  public getAxiosInstance(baseURL = ""): AxiosInstance {
    this.instance.defaults.baseURL = baseURL;
    return this.instance;
  }
}

export default new CustomAxios();
