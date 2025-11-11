---
title: Directrices de Publicación
---

# Directrices de Publicación para Socios de Tiendanube

Este documento tiene como objetivo proporcionar una guía completa y detallada para socios que deseen desarrollar y publicar aplicaciones en la tienda de aplicaciones de **Tiendanube**. Establece las directrices y los requisitos esenciales que deben seguirse durante la fase de homologación, asegurando que las aplicaciones sean seguras, confiables y ofrezcan una experiencia de alta calidad para los *merchants* y los *consumers*.

La información aquí presentada fue compilada a partir de la documentación oficial de Tiendanube, con el objetivo de ofrecer claridad y concisión, siguiendo un modelo de documentación de referencia para el ecosistema de e-commerce. Las fuentes utilizadas son la [Nuvemshop API](https://dev.nuvemshop.com.br/docs/developer-tools/nuvemshop-api) y la [Tiendanube API](https://tiendanube.github.io/api-documentation/intro).

 
## 1. Requisitos Generales para Todas las Aplicaciones

Las directrices en esta sección se aplican a todas las apps publicadas en la tienda de aplicaciones de Tiendanube. Dependiendo de la configuración de la app, también podrá necesitar cumplir con los requisitos específicos detallados en las secciones siguientes.

### 1.1. Configuraciones de Apps Prohibidas y Restringidas
Algunos tipos de apps no están permitidos en la tienda de aplicaciones de Tiendanube y otros deben tener su visibilidad limitada.

#### Tipos de Apps Prohibidas:
- **Apps que no utilizan las APIs de Tiendanube:** Las apps que no utilizan las APIs públicas de Tiendanube no están permitidas. Los comerciantes no deben ser obligados a configurar apps personalizadas como parte de la funcionalidad de la app.
- **Apps que falsean datos:** Las apps no deben violar los Términos y Condiciones Generales del Programa de Socios de Tiendanube. Su app debe usar solo información verdadera en pop-ups y notificaciones.
- **Apps que procesan pagos fuera del checkout de Tiendanube:** Tiendanube no puede garantizar la seguridad de un pedido procesado por un checkout externo. Las apps que ignoran el checkout o el procesamiento de pagos están prohibidas.
- **Múltiples apps con funcionalidades duplicadas:** Una app no puede ser idéntica a otra app que usted ya ha publicado.
- **Apps que principalmente comparten datos de comerciantes:** Las apps que comparten datos de comerciantes con terceros necesitan consentimiento previo por escrito de Tiendanube y deben cumplir con los Términos de la API. Es importante que sigan la directriz de privacidad.

## 2. Instalación y Configuración

Estos requisitos garantizan que los comerciantes puedan configurar y comenzar a usar su app rápidamente.

### 2.1. Permisos (Scopes)
Los permisos son los niveles de acceso que su app tiene a los datos de una tienda a través de la API. La lista de permisos solicitados se muestra al merchant en la página de concesión de acceso de OAuth.

- Su app solo tendrá acceso a los scopes de permisos que son estrictamente necesarios para su funcionalidad.

### 2.2. Flujos de Configuración y Merchant
- Las apps deben ser instaladas e iniciadas solo en los servicios de Tiendanube. Su app no debe solicitar la entrada manual de una URL de la tienda durante la instalación.
- Para la seguridad del comerciante, su app no debe usar ventanas pop-up para funcionalidades esenciales, como la ejecución de OAuth.

## 3. Funcionalidad y Calidad
Para que su app tenga éxito, debe ofrecer una experiencia consistente y positiva para los merchants.

### 3.1. Interfaz de Usuario (UI)
- Su app debe ser totalmente funcional a través de una UI, sin mostrar errores como 404, 500 o 300.
- En caso de desarrollo de una solución incrustada (embedded), su app debe seguir las [guías de diseño de Tiendanube](https://dev.nuvemshop.com.br/docs/design-guidelines/overview) (aún apuntando a la fuente original), como la biblioteca de componentes y la guía de estilo, para una experiencia cohesionada dentro del panel del comerciante.
### 3.2. Facturación
Tiendanube ofrece un sistema de facturación gestionado basado en API para diferentes tipos de cobro de apps. Esto facilita que los comerciantes hagan seguimiento de sus pagos, ya que la facturación se realiza a través del mismo sistema de su suscripción de Tiendanube.
- Recomendamos que su aplicación use la **API de Facturación de Tiendanube** para cobrar a los comerciantes, en caso de que el modelo de cobro se adecúe.
- Su app debe permitir que los comerciantes hagan upgrade y downgrade de sus planes de precios sin tener que contactar al soporte o reinstalar la app.
### 3.3. Estado de la App
- Su app debe ser completa y testeable. No debe haber bugs en la interfaz, problemas de visualización o páginas de error que impidan que el equipo de revisión pruebe la app.
- Si su app sincroniza datos entre Tiendanube y una plataforma externa, debe garantizar que todos los datos sean consistentes.
- Las apps que ya no reflejen la funcionalidad principal original sometida serán reevaluadas y deberán ser reenviadas para una nueva revisión.

## 4. Rendimiento de la App
Para que los merchants tengan éxito, sus tiendas online deben tener velocidad y experiencia de usuario de primera clase.
- Las apps que afectan el frontend de la tienda (el escaparate) deben tener un impacto mínimo en el rendimiento.
- Las apps que usan webhooks para sincronizar datos deben garantizar que la sincronización sea eficiente y no sobrecargue los recursos de la tienda.


## 5. Anuncio de la App en la Tienda
El anuncio de su app es la carta de presentación para los comerciantes. Necesita ser **claro, conciso y responder directamente a las preguntas** que un usuario potencial pueda tener. Para garantizar que toda la información esencial esté allí, destaque las siguientes secciones obligatorias en el perfil de la app:

* **¿Qué es la aplicación?**
    - Comience con una descripción directa y objetiva. Explique el problema que su app resuelve y para quién está destinada. Use un lenguaje simple para que el comerciante entienda rápidamente el valor de su solución.
* **¿Cómo funciona la aplicación?**
    - Describa el flujo de uso de forma clara, paso a paso. Puede usar listas o pequeños párrafos para mostrar cómo el comerciante interactúa con la app, desde la instalación hasta el uso diario.
* **¿Cuáles son las funcionalidades de la aplicación?**
    - Liste las principales funcionalidades de la app de forma organizada. Use bullet points o temas para facilitar la lectura. Destaque los recursos que más se conectan con el problema que la app resuelve.
* **Ventajas de instalar la aplicación**
    - Enfóquese en los beneficios. En lugar de solo listar recursos, explique lo que el comerciante gana al usar su app. Por ejemplo: "ahorre tiempo", "aumente sus ventas" o "mejore la experiencia del cliente".
* **Cómo integrar la aplicación**
    - Proporcione instrucciones simples para la integración. Si el proceso es automático, dígalo. Si hay pasos manuales, descríbalos de forma clara para que el comerciante se sienta seguro y logre hacer la integración sin dificultades.
* **Precios y planes para comerciantes**
    - Sea transparente sobre su estructura de precios. Explique los diferentes planes, qué incluye cada uno y si hay un período de prueba gratuito. La claridad aquí evita sorpresas y ayuda en la decisión del comerciante.
* **Soporte al comerciante**
    - Deje claro cómo el comerciante puede ponerse en contacto para hacer preguntas o resolver problemas. Incluya canales de soporte como e-mail, chat o un centro de ayuda (FAQ). Mostrar que hay un soporte confiable aumenta la confianza en su producto.

Estas secciones garantizan que su anuncio sea completo y responda a todas las dudas que un comerciante pueda tener antes de instalar su aplicación.

### 5.1. Información Básica de la App
* **Nombre de la App:** El nombre de la app no puede incluir marcas registradas de Tiendanube y debe tener 30 caracteres o menos. Debe comenzar con un término o marca únicos.
  - Ej: Nube, nuvem.
* **Ícono de la App:** El ícono debe ser en formato JPEG o PNG, con dimensiones de 1200x1200px. No debe contener texto, screenshots o fotografías. El logo no debe tocar los bordes.

* **Categorización de la App:** Seleccione la categoría principal que mejor describe la funcionalidad de su app.

## 6. Seguridad y Datos
La seguridad es una parte crítica de cualquier negocio online, y el incumplimiento de los requisitos de seguridad impactará directamente en la disponibilidad de su app.
### 6.1. Seguridad
- Su app debe tener un certificado SSL/TLS válido y sin errores.
- Su app debe proteger los iframes e impedir que dominios externos usen la app en un iframe.
- Su app debe protegerse contra vulnerabilidades de seguridad web comunes.
- Su app debe usar OAuth para autenticación.


### 6.2. Datos y Privacidad del Usuario
- Si su app recolecta, almacena, procesa o comparte datos personales, es su responsabilidad garantizar la conformidad con las leyes de privacidad.
- Todas las apps públicas deben suscribir webhooks obligatorios para recibir solicitudes de eliminación de datos de los comerciantes.


## 7. Soporte
Después de la sumisión, usted debe ofrecer soporte a los merchants que usan su app.

- Usted debe tener una dirección de correo electrónico que los comerciantes puedan usar para ponerse en contacto con usted.
- La información de contacto de soporte debe ser fácil de encontrar e incluir instrucciones claras y específicas sobre cómo su app se integra con Tiendanube.
- **Soporte Multilingüe:** Es obligatorio (y, consecuentemente, va a aportar calidad de la app para el merchant) que el soporte contemple el idioma del país donde la app será disponibilizada. Por ejemplo: Una app desarrollada en Brasil, pero que será disponibilizada en Argentina, es importante tener soporte en español.


## 8. Requisitos Específicos para Ciertas Configuraciones de Apps
Si su app encaja en una de las siguientes categorías, debe cumplir con estos requisitos adicionales.
### 8.1. Apps para Tienda Online
Si su app modifica el escaparate de la tienda o el tema del comerciante, debe usar las extensiones de app de tema.
- La app debe permitir que el comerciante añada, reubique o elimine bloques de app en el editor de tema.
- Los bloques de app deben ser responsivos al tamaño de la sección en que se añaden.
### 8.2. Apps Incrustadas (Embedded Apps)
Una app incrustada usa extensiones de app y bibliotecas para que los comerciantes puedan acceder a sus recursos directamente en el panel de administración de Tiendanube.
- Su app debe usar la biblioteca oficial de Tiendanube (Nuvemshop App Bridge) para garantizar una experiencia consistente.
- La app debe tener un ícono de navegación que cumpla con los siguientes requisitos: 16x16px en formato SVG, un único camino de color y fondo transparente.


## 9. Instrucciones para Homologación de la App
En esta sección, usted debe proporcionar instrucciones detalladas sobre cómo probar su app durante la revisión.
- Proporcione credenciales de login si su app se integra con plataformas de terceros.
- Incluya un screencast que demuestre el proceso de configuración y todas las funcionalidades de la app, con instrucciones paso a paso. El screencast debe estar en **español o incluir subtítulos en español**.


## 10. Política de Homologación y Revisión de Apps
Esta sección establece las reglas y los procedimientos que rigen el proceso de análisis y aprobación de apps, garantizando la integridad y la eficiencia de la fila de homologación. Esto incluye la especificación de los puntos a revisar, detallados en una checklist para los casos de las apps de ERP, Shipping y Payments, garantizando la integridad y la eficiencia de la fila de homologación.
### 10.1. Sumisión de Aplicaciones en Desarrollo
El proceso de homologación está destinado a aplicaciones **completas y listas para usar**. Las aplicaciones que se sometan y, durante el análisis, se identifiquen como estando en fase de desarrollo o incompletas, serán **removidas de la fila actual**. El socio será notificado y necesitará reiniciar el proceso de sumisión solamente después de la conclusión del desarrollo de la app.
### 10.2. Falta de Respuesta a las Solicitudes del Equipo de Revisión
La comunicación es esencial durante la etapa de homologación. En caso de que el equipo de homologación de Tiendanube intente contactar para solicitar informaciones, aclaraciones o ajustes y no reciba una respuesta en hasta 5 días, la aplicación será **removida de la fila de homologación**. Será necesario que el socio retorne al ticket cuando haya concluido el proceso, pues eso reingresará la aplicación en la fila. Esto ayuda a evitar retrasos para otros socios.
### 10.3. Consecuencias por Falla en la Implementación de Ajustes
En el proceso de homologación, es imprescindible que los ajustes solicitados por el equipo técnico sean debidamente implementados antes de la revalidación de la aplicación.

En caso de que el desarrollador o responsable por la app informe que los ajustes fueron realizados, pero, al ser sometido al nuevo análisis, se constate que ninguna modificación fue efectuada o que los puntos críticos permanecen inalterados, la aplicación será considerada **no apta**. En esa circunstancia, la app será removida de la fila actual de homologación y reposicionada al final de la fila, siendo necesario reiniciar el proceso de validación desde su etapa inicial.

Esta medida busca garantizar la **integridad técnica**, la **transparencia** en el proceso y el **respeto a las directrices establecidas**.