import { StatusCode } from "./statusCode.enum";

export interface IResponse {
  statusCode: StatusCode;
  data?: string;
}
