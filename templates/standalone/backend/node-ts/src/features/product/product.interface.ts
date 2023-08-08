import { StatusCode } from "@utils/index";

export interface IProductResponse {
  statusCode: StatusCode;
  data: number[] | string;
}

export interface IProduct {
  images: [{ src: string }];
  name: { en: string; pt: string; es: string };
}
