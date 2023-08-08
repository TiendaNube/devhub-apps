import {
  Axios,
  StatusCode,
  getCredentials,
  setCredentials,
  ICredentials,
} from "@utils/index";
import {
  IAuthenticationResponse,
  IAuthenticationRequest,
} from "@features/auth";

const axios = Axios.getAxiosInstance(`${process.env.AUTHENTICATION_API}`);

class AuthenticationAppService {

  
  public async auth(code: string): Promise<IAuthenticationResponse> {
    try {
      if (!code) {
        const credentials = getCredentials();
        if (credentials) {
          return {
            statusCode: StatusCode.OK,
            data: credentials,
          };
        }
        return {
          statusCode: StatusCode.BAD_REQUEST,
          data: "The authorization code not found",
        };
      }

      const body: IAuthenticationRequest = {
        client_id: process.env.CLIENT_ID as string,
        client_secret: process.env.CLIENT_SECRET as string,
        grant_type: "authorization_code",
        code: code,
      };

      const authenticateResponse = await this.authenticateApp(body);
      // This condition will be true when the code has been used or is invalid.
      if (
        authenticateResponse.error &&
        authenticateResponse.error_description
      ) {
        return {
          statusCode: StatusCode.BAD_REQUEST,
          data: authenticateResponse.error_description,
        };
      }

      // Insert response of Authentication API at db.json file
      setCredentials(authenticateResponse);

      return {
        statusCode: StatusCode.OK,
        data: authenticateResponse,
      };
    } catch (error: any) {
      return {
        statusCode: StatusCode.INTERNAL_SERVER_ERROR,
        data: "Retrieve the CLIENT_ID and CLIENT_SECRET from the Partners Portal, replace them in the .env file, and reinstall the app at store",
      };
    }
  }

  private async authenticateApp(
    body: IAuthenticationRequest
  ): Promise<ICredentials> {
    return await axios
      .post(process.env.AUTHENTICATION_API as string, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: any): ICredentials => {
        return response.data;
      });
  }
}

export default new AuthenticationAppService();
