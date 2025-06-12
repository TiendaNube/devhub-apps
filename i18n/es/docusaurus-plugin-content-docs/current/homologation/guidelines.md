---
sidebar_position: 5
title: Buenas Prácticas
---

## Buenas prácticas

Antes de comenzar el desarrollo de una aplicación, es muy importante que **leas atentamente la documentación de la API** para garantizar un buen desarrollo. <br/>
A continuación, preparamos un material con una **guía de buenas prácticas** para que, en el momento de la homologación de tu aplicación, se sigan estos puntos con el fin de garantizar una **buena calidad técnica y de usabilidad**.<br/><br/>

* **Uso de paginación** <br/>
    De gran importancia, especialmente considerando merchants que tienen una gran cantidad de información retornada en las solicitudes. <br/>
    Recomendamos la lectura de la documentación de <a href="https://tiendanube.github.io/api-documentation/intro#pagination" target="_blank">Pagination</a>.

* **El User-Agent del encabezado debe contener el nombre de la app y el correo electrónico.**<br/> Esto garantiza seguridad y claridad en los registros generados por tu aplicación. <br/>
    Recomendamos la lectura de la documentación de <a href="https://tiendanube.github.io/api-documentation/intro#identify-your-app" target="_blank">Identify your app</a>.

* **Uso de webhook para garantizar una cantidad adecuada de solicitudes**<br/>
    Evita múltiples solicitudes de la misma operación, por ejemplo, en un corto período de tiempo.<br/>
    Suponiendo que tu aplicación necesite solicitar el endpoint de productos y/o pedidos, se recomienda el uso del webhook de productos creados y notificados, para que así las solicitudes a la API ocurran solamente cuando haya un evento activador, evitando solicitudes repetitivas sin cambios en la base del merchant.

* **Garantizar el uso de los scopes y permisos necesarios**<br/>
    Es importante que el diagrama enviado con los scopes que serán utilizados por tu aplicación sean los mismos con los cuales los merchants deben "aceptar" para su uso. <br/>
    También se debe prestar atención a que este uso sea consciente y realmente requiera solo los scopes necesarios para el funcionamiento de la aplicación.

* **El idioma de la aplicación debe estar alineado con las geografías seleccionadas para la publicación.**

* **Presta atención al rate limit de solicitudes**<br/>
    La API implementa un rate limit para controlar el tráfico y garantizar la estabilidad del servicio. Por defecto, este límite permite procesar 2 solicitudes por segundo. Esto significa que si envías 20 solicitudes simultáneamente, serán procesadas dentro de este límite, tardando aproximadamente 10 segundos en completarse.<br/>
    Es importante destacar que este límite se aplica por cada merchant y aplicación que realiza las solicitudes. Sin embargo, si el merchant está en el plan Next, el límite base se multiplica por 10, permitiendo así un mayor número de solicitudes.<br/>
    En la respuesta se devuelven encabezados que informan sobre el límite disponible y utilizado:
    * `x-rate-limit-limit`: indica el tamaño del límite.
    * `x-rate-limit-remaining`: cuántas solicitudes faltan para alcanzar el límite.
    * `x-rate-limit-reset`: cuánto tiempo (en milisegundos) falta para que el límite esté disponible nuevamente.<br/>
    Recomendamos la lectura de la documentación de <a href="https://tiendanube.github.io/api-documentation/intro#rate-limiting" target="_blank">Rate Limit</a>.
