---
sidebar_position: 1
---

import { Alert } from '@nimbus-ds/components';

# Autenticación

Este guía presenta métodos de autenticación de aplicaciones con la plataforma Nuvemshop. Descubre cómo garantizar seguridad y acceso autorizado para integraciones perfectas entre tus aplicaciones y nuestra plataforma.

## Autenticación de la API

La autenticación y autorización del usuario se proporcionan mediante una implementación restringida de OAuth 2. Actualmente, solo admitimos el flujo de ["Código de Autorización"](https://oauth.net/2/grant-types/authorization-code/) para otorgar acceso. Al seguir este flujo, obtienes [tokens de acceso](https://oauth.net/2/access-tokens/) que no caducan y permanecen válidos hasta que se renuevan.

## Tokens de Acceso e Identificación

Los tokens de acceso que proporcionamos no tienen fecha de vencimiento. Solo se vuelven inválidos cuando se obtiene un nuevo token o cuando el usuario desinstala la aplicación. Junto con el token de acceso, también se proporciona un `user_id`, que corresponde al ID de la tienda. Este `user_id` es esencial para realizar solicitudes a nuestra API y también se puede utilizar para autenticar a los usuarios de la aplicación en tu sitio.

La autenticación es un paso fundamental para acceder a nuestros servicios a través de la API. Asegúrate de incluir el `user_id` en tus solicitudes para garantizar una autenticación y autorización adecuadas.

## Tipos de Métodos de Autenticación

La elección del método de autenticación depende del tipo de aplicación que estás desarrollando:

- Si estás creando aplicaciones independientes, ya sea con o sin nuestra plantilla, es necesario utilizar OAuth 2.
- Para aplicaciones que se integran con el administrador de Nuvemshop utilizando Nexo, se utilizan tokens de acceso generados en el administrador de Nuvemshop.

Nuestros modelos de creación de aplicaciones ya incluyen un sistema de autenticación integrado con nuestra API. Esto reduce significativamente el tiempo de desarrollo para nuestros socios que eligen utilizar estas plantillas. Sin embargo, si el socio decide no usar una de nuestras plantillas, es posible realizar la autenticación manualmente. A continuación, te mostraremos cómo se puede hacer de manera efectiva.

## Obtención del token de acceso

<Alert appearance="warning" title="Atención">
    Al finalizar el proceso de obtención, recibirás un código cURL, esencial para generar el access_token. Es importante destacar que este código tiene una validez de solo 5 minutos. Asegúrate de usarlo dentro de ese período para garantizar un acceso exitoso.
</Alert>

<br />

### Cambio de la URL de Redirección

Si has modificado la URL de redirección, por favor, reemplázala y guarda la nueva URL en `https://partners.nuvemshop.com.br/applications/authentication/:app-id` para acceder a la página con el código cURL. El campo de URL de redirección se encuentra en el formulario de **Datos Básicos**.

![Datos básicos](../../../../../static/img/card-basic-data.png "Datos básicos")

Este paso es crucial para asegurar que el redireccionamiento funcione correctamente y que puedas acceder a la página de código cURL sin problemas. Asegúrate de actualizar la URL de redirección según sea necesario.

### Realizar la Solicitud con el Código cURL

Después de completar la instalación, serás redirigido a una nueva página que contiene el código cURL necesario para generar tu `access_token`. Simplemente copia este código y realiza la solicitud utilizando la herramienta de tu elección.

![cURL de Autenticación](../../../../../static/img/authentication-curl.png "cURL de Autenticación")

La estructura del cURL generado consta de:

- **client_id**: El ID de la aplicación;
- **client_secret**: Tu secreto de cliente;
- **code**: El código obtenido en la URL después de instalar la aplicación en la tienda de demostración.

Este paso es fundamental para obtener con éxito el access_token y garantizar el acceso autorizado a nuestra plataforma.

Si la solicitud tiene éxito, recibirás una respuesta en un formato similar a este ejemplo:

![Éxito de cURL de Autenticación](../../../../../static/img/authentication-curl-success.png "Éxito de cURL de Autenticación")

```javascript
{
    "access_token": "88a2fdd17e10327ed96f4f2dc96b00bca60dfe60",
    "token_type": "bearer",
    "scope": "write_products",
    "user_id": 2093261
}
```

Puedes armar manualmente el comando cURL en función del ejemplo proporcionado. Aquí tienes el comando cURL para realizar la solicitud POST utilizando la información mencionada:

```bash
curl -X POST "https://www.tiendanube.com/apps/authorize/token" \
-d "client_id=client_id" \
-d "client_secret=client_secret" \
-d "code=code"
```

Asegúrate de reemplazar `client_id`, `client_secret` y `code` con los valores correctos de tu aplicación creada en el Portal de Socios.
Recuerda que puedes ejecutar este comando en una terminal o en una herramienta que admita cURL para probar la solicitud y obtener el access_token.

### Cómo obtener un nuevo código cURL

Para hacerlo, sigue estos pasos:

1. Cuando recibas la alerta que indique que la solicitud no se ha confirmado, haz clic en el botón **Intentar de nuevo**.
2. Serás redirigido a la sección **Mis aplicaciones** en el administrador de tu tienda de demostración.
3. En el administrador de tu tienda de demostración, en la sección **Mis aplicaciones**, verifica si la aplicación está instalada. Si está instalada, procede a [desinstalarla](./overview.md#desinstalando-un-aplicativo).

Si la solicitud falló debido a la caducidad del código cURL o algún error, puedes obtener un nuevo código [desinstalando](./overview.md#desinstalando-un-aplicativo) y [reinstalando](./overview.md#instalando-seu-aplicativo) tu aplicación en la tienda nuevamente.

![Authentication curl fail](../../../../../static/img/authentication-curl-fail.png "Authentication curl fail")

Siguiendo estos pasos, podrás obtener un nuevo código cURL válido y continuar con éxito el proceso de [autenticación](./authentication#obtendo-o-token-de-acesso). Asegúrate de seguir las instrucciones cuidadosamente para evitar problemas futuros.

---

## Próximos pasos

- Aprende más sobre [Aplicaciones](./overview.md)
