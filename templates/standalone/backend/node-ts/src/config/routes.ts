import { Router } from "express";
import { AuthenticationController } from "@features/auth";
import { ProductController } from "@features/product";

const routes = Router();
routes.get("/auth", AuthenticationController.auth);
routes.post("/login", AuthenticationController.auth);
routes.post("/products", ProductController.create);
routes.get("/products/total", ProductController.getTotal);
routes.get("/products", ProductController.getAll);
routes.delete("/products/:id", ProductController.delete);

export default routes;
