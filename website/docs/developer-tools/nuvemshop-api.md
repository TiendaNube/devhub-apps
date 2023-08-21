---
sidebar_position: 5
---

# Nuvemshop API

A [Nuvemshop API](https://tiendanube.github.io/api-documentation/intro), é uma ferramenta poderosa para interagir com nossa plataforma e expandir as funcionalidades do seu aplicativo. Antes de começar a utilizar nossa API, é crucial [autenticar seu aplicativo](../applications/overview.md#autenticando-seu-aplicativo). Após isso, você terá acesso a um `access_token` único de autenticação, permitindo que explore e utilize nossos recursos da API.

## Permissões e escopos

Nossa API é organizada em escopos, o que significa que cada aplicativo criado precisa selecionar quais escopos deseja acessar. Por exemplo, se um aplicativo obtiver a permissão do escopo `products` para `Write products`, ele poderá criar, modificar e excluir produtos e categorias da loja. Ou, no caso de `Read products`, o aplicativo só poderá visualizar produtos e categorias sem a capacidade de fazer alterações.

Lembre-se de que, se for necessário [alterar o escopo de um aplicativo](../applications/overview#editando-as-permissões-do-seu-aplicativo) já criado, será necessário reinstalar o app e repetir o processo de autenticação para obter um novo `access_token` com as permissões atualizadas.

Agora, vamos dar uma olhada em um exemplo de uso da nossa API para ilustrar como você pode aproveitar ao máximo essa ferramenta poderosa.

## Acessando a API de Produtos

Para interagir com a nossa API de produtos, todos os URLs começam com `https://api.tiendanube.com/v1/{store_id}` ou `https://api.nuvemshop.com.br/v1/{store_id}`, garantindo a segurança por meio do **SSL**. O caminho é prefixado com o ID da loja e a versão da API. Caso haja mudanças incompatíveis com versões anteriores, faremos o incremento da versão para garantir suporte estável aos URLs antigos.

Suponhamos que você queira acessar a loja com o ID `123456` por meio da API. A URL será `https://api.tiendanube.com/v1/123456` ou `https://api.nuvemshop.com.br/v1/123456`.

- Para realizar uma solicitação de todos os produtos da loja, você utilizaria o seguinte comando no curl:

  ```bash
  curl -H 'Authentication: bearer ACCESS_TOKEN' \
  -H 'User-Agent: MyApp (name@email.com)' \
  https://api.tiendanube.com/v1/123456/products
  ```

  Certifique-se de substituir `ACCESS_TOKEN` pelo token de acesso da loja para o seu aplicativo ([consulte Autenticação](../applications/authentication.md)). Isso permitirá que você obtenha os detalhes de todos os produtos da loja identificada pelo ID `123456`.

  Essa solicitação, em caso de sucesso, deve retornar a listagem de todos os produtos da sua loja no seguinte [formato](https://tiendanube.github.io/api-documentation/resources/product#get-products-1).

- Para criar um novo produto, você deve incluir o cabeçalho `Content-Type` e os dados do produto em formato JSON:

  ```bash
  curl -H 'Authentication: bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'User-Agent: MyApp (name@email.com)' \
  -d '{ "name": "Meu novo produto" }' \
  https://api.tiendanube.com/v1/123456/products
  ```

  Lembre-se de substituir `ACCESS_TOKEN` pelo token de acesso da loja para o seu aplicativo ([consulte Autenticação](../applications/authentication.md)) e ajustar o nome do produto conforme necessário. Isso permitirá que você crie um novo produto na loja identificada pelo ID `123456`.

  Essa solicitação, em caso de sucesso, deve retornar o produto criado no seguinte [formato](https://tiendanube.github.io/api-documentation/resources/product#post-products).

Lembre-se de que este é apenas um guia rápido de uso da nossa API. Para obter mais detalhes e explorar todos os recursos disponíveis, acesse a [documentação completa](https://tiendanube.github.io/api-documentation/intro) da nossa API.

---

## Próximos passos

- Saiba mais sobre a [Nuvemshop API](https://tiendanube.github.io/api-documentation/intro)
- Saiba mais sobre os [Aplicativos](../applications/overview.md)
- Saiba mais sobre a [Autenticação dos aplicativos](../applications/authentication.md)
