---
sidebar_position: 5
---

# API Tiendanube

La [API Tiendanube](https://tiendanube.github.io/api-documentation/intro) es una herramienta para interactuar con nuestra plataforma y expandir las funcionalidades de su aplicación. Antes de comenzar a utilizar nuestra API, es crucial [autenticar su aplicación](../applications/overview.md#autenticando-seu-aplicativo). Después de hacerlo, obtendrá un `access_token` único de autenticación que le permitirá explorar y utilizar nuestros recursos de la API.

## Permisos y alcances

Nuestra API está organizada en alcances, lo que significa que cada aplicación creada debe seleccionar qué alcances desea acceder. Por ejemplo, si una aplicación obtiene permisos para el alcance `products` para `Write products`, podrá crear, modificar y eliminar productos y categorías de la tienda. O, en el caso de `Read products`, la aplicación solo podrá ver productos y categorías sin capacidad para realizar cambios.

Recuerde que, si es necesario [modificar el alcance de una aplicación](../applications/overview#editando-as-permissões-do-seu-aplicativo) ya creada, deberá reinstalar la aplicación y repetir el proceso de autenticación para obtener un nuevo `access_token` con los permisos actualizados.

Ahora, echemos un vistazo a un ejemplo de uso de nuestra API para ilustrar cómo puede aprovechar al máximo esta poderosa herramienta.

## Acceso a la API de Productos

Para interactuar con nuestra API de productos, todos los URL comienzan con `https://api.tiendanube.com/v1/{store_id}` o `https://api.nuvemshop.com.br/v1/{store_id}`, asegurando la seguridad a través de **SSL**. La ruta está precedida por el ID de la tienda y la versión de la API. En caso de cambios incompatibles con versiones anteriores, incrementaremos la versión para garantizar el soporte estable de las URL antiguas.

Supongamos que desea acceder a la tienda con el ID `123456` a través de la API. La URL será `https://api.tiendanube.com/v1/123456` o `https://api.nuvemshop.com.br/v1/123456`.

- Para realizar una solicitud de todos los productos de la tienda, utilizaría el siguiente comando en curl:

  ```bash
  curl -H 'Authentication: bearer ACCESS_TOKEN' \
  -H 'User-Agent: MyApp (name@email.com)' \
  https://api.tiendanube.com/v1/123456/products
  ```

  Certifíquese de reemplazar `ACCESS_TOKEN` con el token de acceso de la tienda para su aplicación ([consulte Autenticación](../applications/authentication.md)). Esto le permitirá obtener los detalles de todos los productos de la tienda identificada por el ID `123456`.

  Esta solicitud, en caso de éxito, debería devolver una lista de todos los productos de su tienda en el siguiente [formato](https://tiendanube.github.io/api-documentation/resources/product#get-products-1).

- Para crear un nuevo producto, debe incluir el encabezado `Content-Type` y los datos del producto en formato JSON:

  ```bash
  curl -H 'Authentication: bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: MyApp (name@email.com)' \
  -d '{ "name": "Meu novo produto" }' \
  https://api.tiendanube.com/v1/123456/products
  ```

  Recuerda reemplazar `ACCESS_TOKEN` con el token de acceso de la tienda para tu aplicación ([consulta Autenticación](../applications/authentication.md)) y ajusta el nombre del producto según sea necesario. Esto te permitirá crear un nuevo producto en la tienda identificada por el ID `123456`.

  Esta solicitud, en caso de éxito, debería devolver el producto creado en el siguiente [formato](https://tiendanube.github.io/api-documentation/resources/product#post-products).

Recuerda que esto es solo una guía rápida de uso de nuestra API. Para obtener más detalles y explorar todas las funciones disponibles, consulta la [documentación completa](https://tiendanube.github.io/api-documentation/intro) de nuestra API.

---

## Próximos pasos

- Obtén más información sobre la [API Tiendanube](https://tiendanube.github.io/api-documentation/intro)
- Obtén más información sobre las [Aplicaciones](../applications/overview)
- Obtén más información sobre la [Autenticación de aplicaciones](../applications/authentication)
