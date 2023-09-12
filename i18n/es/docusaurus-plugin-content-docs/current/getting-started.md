---
sidebar_position: 1
title: Primeros pasos
---

# Primeros pasos

¡Bienvenido! En esta documentación encontrarás todos los recursos y contenidos para crear aplicaciones y ofrecerlos a la base de comerciantes que forman parte de Tiendanube. Ya seas un desarrollador, un socio o estés comenzando tu viaje en tecnología, aquí encontrarás información básica para desarrollar aplicaciones para Tiendanube.

## Tipos de aplicaciones

Antes de comenzar a desarrollar aplicaciones, es fundamental conocer los tipos de aplicaciones disponibles y comprender cuál se adapta mejor a las necesidades y limitaciones de tu proyecto.

### Aplicaciones integradas al administrador

Una [aplicación integradas al administrador](./applications/native.md) es aquella que opera en el contexto de los comerciantes, utilizando un iframe para garantizar la integración y la fluidez. Esta aproximación busca ofrecer experiencias más naturales e integradas para la gestión de las tiendas, mejorando la interacción con funciones externas y brindando una experiencia más integrada para el comerciante.

#### Requisitos para desarrollar

- Utilizar el [sistema de diseño Nimbus](./developer-tools/nimbus.md)
- Cumplir con los [requisitos de homologación](./homologation/checklist.md)

### Aplicaciones externas

Las [aplicaciones externas](./applications/standalone.md), a diferencia de las aplicaciones integradas que aparecen en el Panel de control de comerciantes, son soluciones independientes que se cargan fuera del panel. Operan de forma autónoma y pueden abarcar una amplia gama de funciones, desde marketing hasta gestión de inventario.

## Herramientas de desarrollo

### API de Tiendanube

La [API de Tiendanube](./developer-tools/nuvemshop-api.md) es una herramienta para interactuar con nuestra plataforma y expandir las funcionalidades de tu aplicación. Antes de comenzar a utilizar nuestra API, es crucial autenticar tu aplicación. Después de eso, tendrás acceso a un access_token único de autenticación que te permitirá explorar y utilizar nuestros recursos de la API.

### App Templates

Ofrecemos [app Templates](./developer-tools/templates.md) que sirven como base para iniciar y acelerar el proceso de desarrollo. Estas plantillas se dividen en dos categorías principales: aplicaciones integradas y aplicaciones externas. Cada categoría tiene sus propios modelos específicos, creados para satisfacer diferentes necesidades y escenarios.

**Autenticación preconfigurada** - Si estás utilizando una de nuestras plantillas, el proceso de autenticación estará listo para usar, incluida la conexión con la API de productos de Tiendanube. Esto automatiza significativamente el proceso; sigue la guía de configuración en el repositorio de la plantilla elegida y estarás en camino al desarrollo.

### Nexo

El [Nexo](./developer-tools/nimbus.md) proporciona recursos para facilitar la comunicación entre una aplicación externa y el administrador de Tiendanube. Esta interacción entre el Administrador y la aplicación se establece a través de mensajes, siguiendo el patrón del observador, lo que permite la suscripción y cancelación de eventos.

### Nimbus (Requisito para aplicaciones integradas)

El [Nimbus es el sistema de diseño](./developer-tools/nimbus.md) de código abierto de Tiendanube. Con componentes validados en productos Tiendanube, patrones y plantillas optimizadas, documentación con ejemplos y sincronización entre el kit de interfaz de usuario en Figma y el código, Nimbus permite a los desarrolladores y diseñadores crear interfaces coherentes, accesibles y de alto rendimiento. Puedes usarlo para crear tus aplicaciones dentro del ecosistema de Tiendanube o también para tu propio proyecto, considerando la licencia vigente.
