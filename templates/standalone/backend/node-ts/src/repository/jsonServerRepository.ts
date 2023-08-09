import jsonServer from "json-server";
import path from "path";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import { TiendanubeAuthInterface } from "@features/auth";


/**
 * this repository is temporary, please use real database to production mode
 */

const jsonServerRepository = jsonServer.router(path.resolve("db.json"));

const server = jsonServer.create();
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(jsonServerRepository);

interface IDatabase {
  credentials: TiendanubeAuthInterface;
}

const adapter = new FileSync<IDatabase>(path.resolve("db.json"));
const database = low(adapter);


class UserRepository {
   findCredentials(): TiendanubeAuthInterface {
     return database.get("credentials").value();
   }

   saveCredentials(data: TiendanubeAuthInterface): void {
     database.set("credentials", data).write();
   }

}

export default new UserRepository();
