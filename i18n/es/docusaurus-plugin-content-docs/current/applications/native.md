---
title: Incorporada
---

# Aplicaciones Incorporadas

Una aplicación incorporada es aquella que opera en el contexto del Administrador de tiendas, utilizando un iframe para garantizar la integración y fluidez. Este enfoque busca ofrecer experiencias más naturales e integrada para la gestión de las tiendas, mejorando la interacción con funcionalidades externas.

## Requisitos para aplicaciones incorporada

Para desarrollar una aplicación incorporada, es crucial comprender los requisitos técnicos y funcionales. La integración se realiza a través de [Nexo](../developer-tools//nexo.md), nuestra herramienta de comunicación entre aplicaciones incorporada y el Administrador de tiendas. El diseño está garantizado por nuestro sistema de diseño [Nimbus](../developer-tools/nimbus.md), que asegura la estandarización de la interfaz y la experiencia, agilizando el desarrollo. Es esencial utilizar la pila tecnológica de [React](https://react.dev) en el frontend, ya que **Nimbus** está optimizado para esta plataforma.

## Inicio del desarrollo

Antes de comenzar, haremos una visión general para comprender los actores principales y sus roles en el flujo de inicio.

Identificamos tres actores que interactúan entre sí: la aplicación desarrollada por el socio (**"Aplicación Incorporada"**), el Administrador de tiendas (en adelante, **"Admin"**) y el SDK que permite la conexión entre el Administrador de tiendas y la aplicación incorporada (en adelante, **"Nexo"**). Exploraremos las responsabilidades de cada uno de estos actores.

### Aplicación incorporada

Esta es la aplicación que desarrollarás. La aplicación final estará públicamente accesible a través de una URL. Se cargará en el Admin mediante un iframe, lo que requiere una URL pública para la aplicación. La URL pública se proporciona durante la creación de la aplicación en el [Portal de socios](https://partners.nuvemshop.com.br).

Para garantizar la compatibilidad de la **"Aplicación Incorporada"** con el **Admin**, es esencial tener instalado y configurado el **Nexo**. [En esta documentación](../developer-tools//nexo.md), encontrarás información detallada sobre cómo funciona el Nexo.

En este momento, solo abordaremos los pasos fundamentales:

1. Para iniciar la comunicación entre la **"Aplicación Incorporada"** y el **Admin**, debes utilizar el **Nexo**. A continuación, se muestra un fragmento de código que demuestra cómo se hace esto:

   ```jsx
   // nexoClient.ts
   import nexo from "@tiendanube/nexo";

   const instance = nexo.create({
     clientId: "123",
     log: true,
   });

   export default instance;
   ```

2. Después de establecer la comunicación, la **"Aplicación Incorporada"** debe notificar explícitamente al **Admin** que está lista para mostrarse. Esto se hace en el punto de inicio de la aplicación React, como se muestra en el fragmento de código a continuación:

   ```jsx
   import { useEffect, useState } from "react";
   import { connect, iAmReady } from "@tiendanube/nexo/helpers";
   import nexo from "./nexoClient";

   const App: React.FC = () => {
     const [isConnect, setIsConnect] = useState(false);

     useEffect(() => {
       connect(nexo).then(async () => {
         setIsConnect(true);
         iAmReady(nexo);
       });
     }, []);

     if (!isConnect) return <div>connecting..</div>;

     return <div>My app</div>;
   };

   export default App;
   ```

3. Finalmente, implementarás la lógica del modelo de negocio de la **"Aplicación Incorporada"** utilizando las diversas acciones que proporcionamos en Nexo. Consulta la lista de acciones disponibles [aquí](../developer-tools/nexo.md#actions).

### Nexo

Nexo es el SDK que permite la comunicación entre **Admin** y la **Aplicación Incorporada**. Desarrollado por Nuvemshop, es compatible con TypeScript y se puede acceder a través de NPM.

- Actúa como el puente de comunicación entre **Admin** y la **Aplicación Incorporada**.
- Define y gestiona las acciones disponibles, que se intercambian a través de mensajes. Consulta la lista de acciones disponibles [aquí](../developer-tools/nexo.md#actions).
- Ofrece herramientas para facilitar la implementación de acciones en la aplicación. Obtén más información sobre los Helpers [aquí](../developer-tools/nexo.md#helpers).

### Admin

El actor **Admin** desempeña un papel fundamental en la gestión del comerciante de Nuvemshop que actualmente ha iniciado sesión, incluyendo:

- **Admin** proporciona un espacio de desarrollo específico que permite la creación y prueba de tu aplicación sin necesidad de aprobación en la Tienda de aplicaciones. A continuación, explicaremos cómo se puede hacer esto.
- Define el acceso de la aplicación (rutas): Nuvemshop proporcionará una ruta (URL) en la que se llamará a tu aplicación.
- Establece dónde debe cargarse la aplicación a través de un iframe.
- Inicializa Nexo para recibir y enviar mensajes según sea necesario para la aplicación.
- Comprueba si la aplicación está lista para mostrarse.
- Administra tokens de sesión y los comparte con la aplicación a través de **Nexo** para identificar la Tienda conectada.

## Flujo de inicio de la aplicación

Aquí tienes el flujo de inicio de una **Aplicación Incorporada** desde el momento en que el usuario decide ver la aplicación:

1. El usuario elige abrir la aplicación, que puede activarse a través de una URL guardada como favorita o una opción en el menú.
2. **Admin** obtiene la información de la aplicación y carga la aplicación en el panel en un iframe, al tiempo que muestra un mensaje de carga.
3. Después de cargar la **Aplicación Incorporada**, notifica a **Admin** a través de **Nexo** sobre la conexión y espera la confirmación de que **Admin** también está conectado.
4. Finalmente, cuando la **Aplicación Incorporada** esté lista para mostrar el contenido, notifica a través de **Nexo** que está lista. Esto permite que **Admin** reemplace el mensaje de carga por la propia **Aplicación Incorporada**.

## Selección de mi plantilla

Nuestras herramientas de desarrollo en Nuvemshop incluyen [plantillas listas para la creación de aplicaciones](../developer-tools/templates#tipos-de-template), que abarcan toda la lógica de [autenticación](../applications/overview#autenticando-seu-aplicativo) y construcción. En el caso de las aplicaciones incorporadas, la parte relacionada con **Nexo** ya está preconfigurada. Recomendamos encarecidamente el uso de estas plantillas.

Después de seleccionar la plantilla deseada, sugerimos revisar el archivo **"README.md"** en el repositorio correspondiente. Allí encontrarás orientaciones detalladas y pasos prácticos para aprovechar al máximo las capacidades ofrecidas por nuestros modelos de desarrollo.

## Modo de desarrollador

Para probar y desarrollar tu Aplicación Incorporada, es esencial hacerlo dentro del contexto del Administrador de tiendas. Sin embargo, es necesario tener habilitada la opción de Modo de Desarrollador. Esta función actualmente solo está disponible para tiendas que han sido habilitadas previamente. Para obtener acceso a esta función, ponte en contacto con el equipo de Nuvemshop.

Cuando se activa el Modo de Desarrollador, se agrega una nueva opción al menú con el nombre "Aplicación de Prueba". Al seleccionar esta opción, puedes ingresar la URL de la aplicación, que se cargará dentro del panel de **Admin** para pruebas y desarrollo.

![Modo de desarrollo](../../../../../static/img/dev-mode.png "Modo de desarrollo")

## Preguntas frecuentes

- [¿Cómo crear una instancia de Nexo?](../developer-tools/nexo#create-a-nexo-instance)
- [¿Cómo iniciar la aplicación?](../developer-tools/nexo#check-if-the-app-is-connected)
- [¿Cómo sincronizar URLs?](../developer-tools/nexo#enable-route-synchronization)
- [¿Cómo configurar el interceptor axios para obtener el token de sesión en cada solicitud?](../developer-tools/nexo#get-session-token)
- [¿Qué acciones están disponibles?](../developer-tools/nexo#actions)
- [¿Qué herramientas están disponibles para la gestión de acciones?](../developer-tools/nexo#helpers)

## Recomendaciones

- Recomendamos seguir los conceptos de UX/UI definidos por nuestro equipo de diseño. [Accede aquí a la guía completa](../design-guidelines/overview.md).
- Para aplicaciones publicadas en nuestra tienda de aplicaciones, recomendamos revisar nuestra [lista de verificación de homologación](../homologation/overview.md).

---

## Próximos pasos

- Obtén más información sobre [Homologación](../homologation/overview.md)
