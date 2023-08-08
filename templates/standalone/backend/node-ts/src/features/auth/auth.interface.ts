import { ICredentials, StatusCode } from "@utils/index";

export interface IAuthenticationResponse {
  statusCode: StatusCode;
  data: ICredentials | string;
}

export interface IAuthenticationRequest {
  client_id: string;
  client_secret: string;
  grant_type: string;
  code: string;
}
