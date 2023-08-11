import { useCallback } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { axios } from "@/app";
import { IApiResponse } from "./useFetch.types";
import { useConfig } from "..";

const useFetch = () => {
  const { config } = useConfig();
  const request = useCallback(async <T>(params: AxiosRequestConfig) => {
    let axiosResponse: AxiosResponse<IApiResponse<T>>;
    try {
      axiosResponse = await axios.request({
        ...params,
        baseURL: config?.apiURL,
      });
      return {
        content: axiosResponse?.data as T,
        statusCode: axiosResponse?.status,
      };
    } catch (error: any) {
      axiosResponse = error.response;
      return Promise.reject({
        message: axiosResponse?.data || "error",
        statusCode: axiosResponse?.status,
      });
    }
  }, []);

  return { request };
};

export default useFetch;
