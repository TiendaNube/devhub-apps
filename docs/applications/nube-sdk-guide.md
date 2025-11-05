# Guía para migrar apps al SDK en el contexto de storefronts

## Contexto

Los nuevos temas de Tiendanube, comenzando con el tema Patagonia, marcan el inicio de una nueva era para el comercio electrónico.

Creado para superar las limitaciones técnicas del pasado, ofrece una base moderna, flexible y de alto rendimiento que permite a las marcas expresar todo su potencial visual, sin necesidad de código ni procesos complejos.

Con él, cada tienda puede ser única, combinando libertad creativa y velocidad para crecer.

El **Nube SDK** es el nuevo entorno de desarrollo que permite a los partners crear aplicaciones compatibles con el checkout y el nuevo editor de tiendas, garantizando estabilidad, performance y coherencia visual dentro de las tiendas. En lugar de que cada app se conecte al storefront de manera independiente —lo que generaba conflictos, afectaba la velocidad y en algunos casos podía romper la experiencia del usuario—, el SDK ofrece un marco seguro y estandarizado para integrar funcionalidades directamente en la interfaz del nuevo editor y tiendas.

### ¿Qué cambia con el NubeSDK?

👉🏻 [Documentación](https://dev.tiendanube.com/docs/applications/nube-sdk/overview)

El NubeSDK redefine completamente cómo se desarrollan apps en Tiendanube:

- Corre dentro de un **Web Worker** por seguridad y aislamiento
  > Para usar Nube SDK es necesario migrar los scripts a nuestro CDN.

- Usa **eventos** para comunicarse con el checkout o storefront
  > (Disponible solo para Patagonia, el nuevo tema de Tiendanube)

- La UI se declara de forma **declarativa o con JSX**, no tenés acceso directo al DOM

- Se renderiza en **slots** predeterminados mediante `nube.render()`

- Tiene acceso restringido a APIs compatibles con Web Workers.

---

## 1. Migrá tu app al modelo del SDK

### GPT Assistant

[Usá el especialista en creación y migración de aplicaciones de Nube SDK](https://chatgpt.com/g/g-6812298534c88191be0705ba82fea093-nubesdk-assistant)

Escribe un prompt como el siguiente ejemplo y sigue los pasos del Assistant:

> "Analice el codigo compartido y sugiera los pasos para convertir el script de legacy para el Nube SDK. Este es una aplicación para los Storefronts que será migrado para el tema Patagonia. [Código JS]"

### Estructura base de una app

Asegurate de tener un archivo de entrada principal (por ejemplo `src/main.tsx`) con la siguiente forma:

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  // Acá va tu lógica principal
}
```

Esta función será ejecutada automáticamente por el SDK.

---

## 2. Prepará tu entorno

Usá el comando `npm create nube-app@latest` para preparar todo el entorno de desarrollo necesario para que puedas empezar a trabajar.

[Más detalles](https://dev.nuvemshop.com.br/docs/applications/nube-sdk/getting-started)

---

## 3. Activá el uso del SDK en el Partner Portal

Al registrar o editar tu app en el Partner Portal, activá la opción **"Usa NubeSDK"** para que se ejecute dentro de un worker seguro.

Recordá que es necesario tener los scripts dentro de nuestro CDN para que se ejecuten.

---

## 4. Empezá a escuchar eventos

Migrá tus interacciones con el entorno de esta forma:

### Antes (ejemplo clásico):

```javascript
document.querySelector('.buy-button').addEventListener('click', () => {
  // lógica...
});
```

### Ahora (NubeSDK):

```typescript
nube.on("location:update", ({ location }) => {
  if (location.page.type === "product") {
    // lógica en el inicio del checkout
  }
});
```

Consulta los eventos disponibles en la [documentación de eventos](https://dev.tiendanube.com/docs/applications/nube-sdk/events).

---

## 5. Renderizá UI con nube.render

Migrá cualquier código que manipulaba el DOM directamente usando componentes declarativos:

```tsx
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

nube.render("after_line_items", () => (
  <Box padding="16px">
    <Text>¡Gracias por tu compra!</Text>
  </Box>
));
```

**No uses** `document.createElement` ni `innerHTML`.

---

## 6. Validación y configuración

Si tu app necesita bloquear el checkout o modificar comportamiento, podés enviar configuraciones iniciales:

```typescript
nube.send("config:set", () => ({
  config: {
    has_cart_validation: true,
  },
}));
```

Y luego reaccionar:

```typescript
nube.on("cart:update", ({ cart }) => {
  if (cart.items.length === 0) {
    nube.send("cart:validate", () => ({
      cart: {
        validation: {
          status: "fail",
          reason: "El carrito no puede estar vacío",
        },
      },
    }));
  }
});
```

---

## 7. Usá DevTools para debuggear

Instalá **Nube DevTools** para ver:

- Qué apps están corriendo
- Qué componentes están en cada slot
- Qué eventos se están disparando
- Qué estado tiene la app

---

## 8. Checklist de migración

- [ ] Tenés una función `App(nube: NubeSDK)` como punto de entrada
- [ ] Toda la UI se declara con componentes del SDK (JSX o `@tiendanube/nube-sdk-ui`)
- [ ] Toda la lógica usa `nube.on`, `nube.send`, `nube.render`
- [ ] No usás `window`, `document`, ni bibliotecas externas como React
- [ ] Estás corriendo en dev y el script está apuntando a `localhost:8080/main.min.js`
- [ ] El script tiene habilitado el **flag NubeSDK** en el Partner Portal

---

## 📘 Recursos útiles

- **Documentación oficial:** [https://dev.tiendanube.com/docs/applications/nube-sdk/overview](https://dev.tiendanube.com/docs/applications/nube-sdk/overview)
- **Componentes disponibles:** [Documentación de componentes](https://dev.tiendanube.com/docs/applications/nube-sdk/components/overview)
- **Lista de eventos:** [Documentación de eventos](https://dev.tiendanube.com/docs/applications/nube-sdk/events)
- **Lista de slots:** [Documentación de slots](https://dev.tiendanube.com/docs/applications/nube-sdk/ui-slots)
- **¿Qué hacer si te falta un componente, slot o evento?** Envía un email a [api@tiendanube.com](mailto:api@tiendanube.com) con tu solicitud compartiendo el mayor detalle posible, idealmente acompañado de un soporte visual.
- **Mail de soporte técnico:** [api@tiendanube.com](mailto:api@tiendanube.com)
