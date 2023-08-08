import { Axios, ICredentials, StatusCode, getCredentials } from "@utils/index";
import {
  IProduct,
  IProductResponse,
  generateProduct,
  getHeaders,
} from "@features/product";

class InsertFiveProductsService {
  public async store(): Promise<IProductResponse> {
    try {
      const credentials: ICredentials = getCredentials();
      let products: number[] = [];
      for (let index = 0; index < 5; index += 1) {
        const randomProduct: IProduct = generateProduct();

        const product = await this.insertProduct(
          credentials.user_id as number,
          credentials.access_token as string,
          randomProduct
        );

        products.push(product);
      }
      return {
        statusCode: StatusCode.CREATED,
        data: products,
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

  private async insertProduct(
    storeId: number,
    accessToken: string,
    body: IProduct
  ) {
    const headers = getHeaders(accessToken);
    const axios = Axios.setHeaders(headers).getAxiosInstance(
      `${process.env.TIENDANUBE_API}`
    );

    return axios
      .post(`/${storeId}/products`, body)
      .then((response: any) => {
        return response.data.id;
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

export default new InsertFiveProductsService();
