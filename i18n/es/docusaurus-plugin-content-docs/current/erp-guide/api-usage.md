---
sidebar_position: 3
title: Control de uso de la API
---

## **Rate Limit - Control de Uso de la API**  

Actualmente, utilizamos el algoritmo Leaky Bucket para limitar el uso de la API.  

Por defecto, el bucket tiene capacidad para **40 solicitudes**, con una tasa de filtrado (leaky rate) de 2 solicitudes por segundo.  

Esto significa que puedes hacer hasta **2 solicitudes por segundo** en paquetes de hasta **40 solicitudes**, sin recibir el error **429 (Too Many Requests)**.  

Para monitorear el consumo de la API, proporcionamos los siguientes encabezados:  

- **x-rate-limit-limit**: Total de solicitudes permitidas en un período determinado (equivalente al tamaño del bucket).  
- **x-rate-limit-remaining**: Número de solicitudes restantes antes de llenar el bucket.  
- **x-rate-limit-reset**: Tiempo restante, en milisegundos, para que el bucket se vacíe completamente.  

**Nota importante**: El límite de uso de la API se aplica individualmente a cada tienda y aplicación.  

**Para tiendas en los planes Next o Evolution (planes superiores), el límite de tasa se multiplica por 10, permitiendo una mayor capacidad de solicitudes.**  

---

## **Filtros Generales y Paginación**  

Las solicitudes que devuelven múltiples elementos **no tienen la paginación habilitada por defecto**.  

Para navegar por los resultados, es necesario utilizar el parámetro **page** para especificar páginas adicionales.  

Además, puedes personalizar el tamaño de cada página utilizando el parámetro **per_page**, que acepta valores de hasta **200 elementos por página**.  

La numeración de las páginas comienza en 1. Si se omite el parámetro **page**, la solicitud devolverá la primera página por defecto.  

**Información útil:**  

- **Conteo total de resultados**: El encabezado **x-total-count** indica la cantidad total de elementos disponibles.  

```bash
x-total-count: 156
```

- **Enlaces de navegación**: El encabezado **Link** proporciona las URLs para las páginas siguiente y anterior, facilitando la implementación de la paginación.  

Este mecanismo permite obtener los resultados de forma organizada y eficiente, incluso en grandes conjuntos de datos.  
