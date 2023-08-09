import {NextFunction, Request, Response} from "express";
import { StatusCode } from "@utils";
import { ProductService } from "@features/product";

class ProductController {
  async create(_req: Request, res: Response, next: NextFunction): Promise<Response|void> {
        try {
          const data = await ProductService.create();
          return res.status(StatusCode.CREATED).json(data);
        } catch (e) {
          next(e);
        }
  }

  async getTotal(_req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const data= await ProductService.findAllCount();
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }

  async getAll(_req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const data = await ProductService.findAll();
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const  data  = await ProductService.delete(
          req.params.id as string
      );
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }
}

export default new ProductController();
