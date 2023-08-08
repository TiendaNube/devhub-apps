import { faker } from "@faker-js/faker";
import { IHeaders } from "@utils/index";
import { IProduct } from "./product.interface";

export const getHeaders = (accessToken: string): IHeaders => {
  return {
    "Content-Type": "application/json",
    Authentication: `bearer ${accessToken}`,
    "User-Agent": `${process.env.APP_NAME} (${process.env.USER_EMAIL})`,
  };
};

export const generateProduct = (): IProduct => {
  return {
    images: [
      {
        src: faker.image.abstract(72, 72, true),
      },
    ],
    name: {
      en: faker.commerce.productName(),
      pt: faker.commerce.productName(),
      es: faker.commerce.productName(),
    },
  };
};
