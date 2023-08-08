import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "@config/routes";
import errorMiddleware from "@utils/errorMiddleware.function";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 7200;
const app = express();

app.use(cors());
app.use(errorMiddleware);
app.use(routes);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
