import { Router } from "express";
import { AuthenticationController } from "@features/auth";
import { ProductController } from "@features/product";
import { checkUserCredentialsMiddleware } from "@middlewares";

const routes = Router();
routes.get("/auth/install", AuthenticationController.install);
routes.post("/auth/login", AuthenticationController.login);
routes.param("user_id", checkUserCredentialsMiddleware);
routes.post("/:user_id/products", ProductController.create);
routes.get("/:user_id/products/total", ProductController.getTotal);
routes.get("/:user_id/products", ProductController.getAll);
routes.delete("/:user_id/products/:id", ProductController.delete);

export default routes;
