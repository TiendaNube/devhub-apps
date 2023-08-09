
import { generateProductMock } from "@features/product/__mock__/product.mock";
import { buildPath, tiendanubeApiClient} from "@config";
import { IProductRequest, IProductResponse} from "@features/product";

class ProductService {

    private path = '/products';
     async create(): Promise<IProductResponse> {
        const randomProduct: IProductRequest = generateProductMock();
        const data: IProductResponse  = await tiendanubeApiClient.post(buildPath(this.path), randomProduct)

         return {
            id: data.id,
            ...randomProduct
         } as IProductResponse
    }

    async delete(productId: string): Promise<any> {
        const data: any = await tiendanubeApiClient.delete(buildPath(this.path, productId))
        return data;
    }

     async findAll(): Promise<IProductResponse[]> {
        return this.findAllFromApi()
    }

    async findAllCount(): Promise<{ total: number }> {
        return {
            total: (await this.findAllFromApi()).length
        }
    }

    private async findAllFromApi(): Promise<IProductResponse[]> {
         return await tiendanubeApiClient.get(buildPath(this.path)) as IProductResponse[];
    }
}

export default new ProductService();


