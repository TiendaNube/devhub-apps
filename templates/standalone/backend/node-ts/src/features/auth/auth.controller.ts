import { Request, Response } from "express";
import { AuthenticationAppService } from "./services";

class AuthenticationController {
  async auth(req: Request, res: Response): Promise<Response> {
    const { statusCode, data } = await AuthenticationAppService.auth(
      req.query.code as string
    );
    return res.status(statusCode).json(data);
  }
}

export default new AuthenticationController();
