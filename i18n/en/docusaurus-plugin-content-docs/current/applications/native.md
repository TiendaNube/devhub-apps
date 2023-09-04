---
title: Integrated
---

# Integrated applications

An integrated application is one that operates within the context of the Merchant's Admin, using an iframe to ensure integration and smoothness. This approach aims to provide more natural and integrated experiences for store management, enhancing interaction with external functionalities.

## Requirements for integrated applications

To develop an integrated application, it is crucial to understand the technical and functional requirements. Integration is done through [Nexo](../developer-tools//nexo.md), our communication tool between Integrated applications and the Merchant's Admin. Design is guaranteed by our design system [Nimbus](../developer-tools/nimbus.md), which ensures interface and experience standardization, streamlining development. It is essential to use the [React](https://react.dev) technology stack on the frontend since **Nimbus** is optimized for this platform.

## Development Start

Before we begin, we will provide an overview to understand the main actors and their roles in the initiation flow.

We identify three actors who interact with each other: the app developed by the partner (called **"Integrated app"**), the Merchant's Admin (called **"Admin"**), and the SDK that enables the connection between the Merchant's Admin and the integrated app (called **"Nexo"**). We will explore the responsibilities of each of these actors.

### Integrated app

This is the app you will develop. The final app will be publicly accessible through a URL. It will be loaded into the Admin through an iframe, which requires a public URL for the app. The public URL is provided during the app's creation in the [Partner Portal](https://partners.nuvemshop.com.br).

To ensure compatibility of the **"Integrated app"** with the **Admin**, it is essential to have the **Nexo** installed and configured. [In this documentation](../developer-tools/nexo.md), you will find detailed information on how Nexo works.

At this moment, we will only address the fundamental steps:

1. To initiate communication between the **"Integrated app"** and the **Admin**, you must use **Nexo**. Below is a code snippet demonstrating how this is done:

   ```jsx
   // nexoClient.ts
   import nexo from "@tiendanube/nexo";

   const instance = nexo.create({
     clientId: "123",
     log: true,
   });

   export default instance;
   ```

2. After establishing communication, the **"Integrated app"** must explicitly notify the **Admin** that it is ready to be displayed. This is done at the starting point of the React application, as shown in the code snippet below:

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

3. Finally, you will implement the business model logic of the **"Integrated app"** using the various actions we provide in Nexo. Check the list of available actions [here](../developer-tools/nexo.md#actions).

### Nexo

Nexo is the SDK that enables communication between **Admin** and the **Integrated app**. Developed by Nuvemshop, it is TypeScript compatible and can be accessed through NPM.

- Acts as the communication bridge between **Admin** and the **Integrated app**.
- Defines and manages available actions, which are exchanged through messages. See the list of available actions [here](../developer-tools/nexo.md#actions).
- Provides tools to facilitate action implementation in the app. Learn more about Helpers [here](../developer-tools/nexo.md#helpers).

### Admin

The actor **Admin** plays a fundamental role in managing the currently logged-in Nuvemshop merchant, including:

- **Admin** provides a specific development space that allows the creation and testing of your app without the need for approval in the App Store. We will explain how this can be done shortly.
- Defines the app's access (routes): Nuvemshop will provide a route (URL) where your app will be invoked.
- Establishes where the app should be loaded through an iframe.
- Initializes Nexo to receive and send messages as needed for the app.
- Checks if the app is ready to be displayed.
- Manages session tokens and shares them with the app via **Nexo** to identify the logged-in store.

## App Initialization Flow

Here is the initialization flow of a **Integrated app** from the moment the user decides to view the app:

1. The user chooses to open the app, which can be triggered through a saved favorite URL or a menu option.
2. **Admin** obtains app information and loads the app into the dashboard in an iframe while displaying a loading message.
3. After loading the **Integrated app**, it notifies **Admin** through **Nexo** about the connection and waits for confirmation that **Admin** is also connected.
4. Finally, when the **Integrated app** is ready to display content, it notifies through **Nexo** that it is ready. This allows **Admin** to replace the loading message with the **Integrated app** itself.

## Choosing My Template

Our development tools at Nuvemshop include [ready-made templates for app creation](../developer-tools/templates#tipos-de-template), covering all aspects of [authentication](../applications/overview#autenticando-seu-aplicativo) and construction. In the case of Integrated applications, the part related to **Nexo** is already pre-configured. We strongly recommend using these templates.

After selecting your desired template, we suggest reviewing the **"README.md"** file in the corresponding repository. There, you will find detailed guidance and practical steps to make the most of the capabilities offered by our development models.

## Developer Mode

To test and develop your Integrated app, it is essential to do so within the context of the Merchant's Admin. However, you need to have the Developer Mode option enabled. This feature is currently only available for stores that have been previously enabled. To gain access to this feature, please contact the Nuvemshop team.

When Developer Mode is activated, a new option is added to the menu with the name "Test App" or "Aplicación de Prueba," depending on the language. By selecting this option, you can enter the app's URL, which will be loaded into the Admin panel for testing and development.

![Developer mode](../../../../../static/img/dev-mode.png "Developer mode")

## Frequently Asked Questions

- [How to create a Nexo instance?](../developer-tools/nexo#create-a-nexo-instance)
- [How to initiate the app?](../developer-tools/nexo#check-if-the-app-is-connected)
- [How to synchronize URLs?](../developer-tools/nexo#enable-route-synchronization)
- [How to configure the axios interceptor to get the session token for each request?](../developer-tools/nexo#get-session-token)
- [What actions are available?](../developer-tools/nexo#actions)
- [What tools are available for action management?](../developer-tools/nexo#helpers)

## Recommendations

- We recommend following the UX/UI concepts defined by our design team. [Access the complete guide here](../design-guidelines/overview.md).
- For apps published in our app store, we recommend reviewing our [homologation checklist](../homologation/overview.md).

---

## Next Steps

- Learn more about [Homologation](../homologation/overview.md)
