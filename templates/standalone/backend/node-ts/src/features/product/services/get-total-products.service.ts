import {
  Axios,
  IResponse,
  ICredentials,
  StatusCode,
  getCredentials,
  IHeaders,
} from "@utils/index";
import { getHeaders } from "@features/product";

class GetTotalProductsService {
  public async findAll(): Promise<IResponse> {
    try {
      const credentials: ICredentials = getCredentials();
      const headers = getHeaders(credentials.access_token as string);
      const products = await this.getAllProductsId(
        credentials.user_id as number,
        headers
      );
      return {
        statusCode: StatusCode.OK,
        data: products.length,
      };
    } catch (error: any) {
      let statusCode;
      let data;

      if (error instanceof Error) {
        const errorObject = JSON.parse(error.message);
        statusCode = errorObject.statusCode;
        data = errorObject.data;
      } else {
        statusCode = StatusCode.INTERNAL_SERVER_ERROR;
        data = "Unknown error";
      }

      return {
        statusCode,
        data,
      };
    }
  }

  private async getAllProductsId(storeId: number, headers: IHeaders) {
    const axios = Axios.setHeaders(headers).getAxiosInstance(
      `${process.env.TIENDANUBE_API}`
    );

    return axios
      .get(`/${storeId}/products?fields=id`)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        const errorObject = {
          statusCode: error.response.status,
          data: error.response.data.description,
        };
        throw new Error(JSON.stringify(errorObject));
      });
  }
}

export default new GetTotalProductsService();
