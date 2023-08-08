import { Request, Response } from "express";
import {
  DeleteProductsService,
  GetTotalProductsService,
  InsertFiveProductsService,
  ListAllProductsService,
} from "./services";

class ProductController {
  async store(_req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await InsertFiveProductsService.store();
    return res.status(statusCode).json(data);
  }

  async getTotal(_req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await GetTotalProductsService.findAll();
    return res.status(statusCode).json(data);
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await ListAllProductsService.findAll();
    return res.status(statusCode).json(data);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await DeleteProductsService.deleteById(
      req.params.id as string
    );
    return !data
      ? res.status(statusCode).json(req.params.id)
      : res.status(statusCode).json(data);
  }
}

export default new ProductController();
