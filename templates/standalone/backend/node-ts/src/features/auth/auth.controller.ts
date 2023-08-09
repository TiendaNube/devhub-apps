import {NextFunction, Request, Response} from "express";
import { StatusCode } from "@utils";
import  { AuthenticationAppService } from "@features/auth";

class AuthenticationController {
  async auth(req: Request, res: Response, next: NextFunction): Promise<Response|void> {
    try {
      const data = await AuthenticationAppService.auth(
          req.query.code as string
      );
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      return next(e);
    }
  }
}

export default new AuthenticationController();
