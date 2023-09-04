---
sidebar_position: 5
---

# Nuvemshop API

The [Nuvemshop API](https://tiendanube.github.io/api-documentation/intro) is a tool for interacting with our platform and extending the functionality of your application. Before you start using our API, it's crucial to [authenticate your application](../applications/overview.md#autenticando-seu-aplicativo). After doing so, you will obtain a unique `access_token` for authentication, allowing you to explore and utilize our API resources.

## Permissions and Scopes

Our API is organized into scopes, which means that each created application needs to select which scopes it wants to access. For instance, if an application obtains permission for the `products` scope for `Write products`, it can create, modify, and delete products and categories in the store. Alternatively, for `Read products`, the application can only view products and categories without the ability to make changes.

Remember that if you need to [alter the scope of an already created application](../applications/overview#editando-as-permissões-do-seu-aplicativo), you will need to reinstall the app and repeat the authentication process to obtain a new `access_token` with updated permissions.

Now, let's take a look at an example of using our API to illustrate how you can make the most of this powerful tool.

## Accessing the Product API

To interact with our product API, all URLs start with `https://api.tiendanube.com/v1/{store_id}` or `https://api.nuvemshop.com.br/v1/{store_id}`, ensuring security through **SSL**. The path is prefixed with the store's ID and the API version. In case of changes that are incompatible with previous versions, we will increment the version to ensure stable support for old URLs.

Suppose you want to access the store with ID `123456` through the API. The URL will be `https://api.tiendanube.com/v1/123456` or `https://api.nuvemshop.com.br/v1/123456`.

- To make a request for all products in the store, you would use the following curl command:

  ```bash
  curl -H 'Authentication: bearer ACCESS_TOKEN' \
  -H 'User-Agent: MyApp (name@email.com)' \
  https://api.tiendanube.com/v1/123456/products
  ```

  Make sure to replace `ACCESS_TOKEN` with the store's access token for your application ([see Authentication](../applications/authentication.md)). This will allow you to retrieve the details of all the products from the store identified by the ID `123456`.

  This request, if successful, should return a listing of all the products in your store in the following [format](https://tiendanube.github.io/api-documentation/resources/product#get-products-1).

- To create a new product, you should include the `Content-Type` header and the product data in JSON format:

  ```bash
  curl -H 'Authentication: bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: MyApp (name@email.com)' \
  -d '{ "name": "Meu novo produto" }' \
  https://api.tiendanube.com/v1/123456/products
  ```

  Remember to replace `ACCESS_TOKEN` with the store's access token for your application ([see Authentication](../applications/authentication.md)) and adjust the product name as needed. This will allow you to create a new product in the store identified by the ID `123456`.

  This request, if successful, should return the created product in the following [format](https://tiendanube.github.io/api-documentation/resources/product#post-products).

Please note that this is just a quick guide to using our API. For more details and to explore all available features, check out the [full documentation](https://tiendanube.github.io/api-documentation/intro) of our API.

---

## Next Steps

- Learn more about the [Nuvemshop API](https://tiendanube.github.io/api-documentation/intro)
- Learn more about [Applications](../applications/overview)
- Learn more about [Application Authentication](../applications/authentication)
