import {
  Axios,
  StatusCode,
  getCredentials,
  ICredentials,
  IResponse,
  IHeaders,
} from "@utils/index";
import { getHeaders } from "@features/product";

class DeleteProductsService {
  public async deleteById(id: string): Promise<IResponse> {
    try {
      const credentials: ICredentials = getCredentials();
      const headers = getHeaders(credentials.access_token as string);
      await this.deleteProductById(+id, credentials.user_id as number, headers);
      return {
        statusCode: StatusCode.OK,
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

  private async deleteProductById(
    productId: number,
    storeId: number,
    headers: IHeaders
  ) {
    const axios = Axios.setHeaders(headers).getAxiosInstance(
      `${process.env.TIENDANUBE_API}`
    );

    return axios
      .delete(`/${storeId}/products/${productId}`)
      .catch((error: any) => {
        const errorObject = {
          statusCode: error.response.status,
          data: error.response.data.description,
        };
        throw new Error(JSON.stringify(errorObject));
      });
  }
}

export default new DeleteProductsService();
