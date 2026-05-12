---
sidebar_position: 2
title: Autenticación
---

## **Autenticación**  
La autenticación en la API de Nuvemshop utiliza una implementación restringida de OAuth 2.0, específicamente el flujo de "Código de Autorización". Este proceso permite que las aplicaciones obtengan tokens de acceso que no expiran, permaneciendo válidos hasta que se renueven o hasta que el usuario desinstale la aplicación.

![img](image5.png)
[Link para criação do aplicativo](https://partners.nuvemshop.com.br/)

### **Flujo de Autorización:**  

- **Inicio de la Instalación**: El usuario, desde el panel administrativo de Nuvemshop, hace clic para instalar la aplicación o accede directamente a una URL específica para autorización.  
- **Solicitud de Permisos**: El usuario es redirigido a una página donde debe autorizar los alcances que la aplicación solicita. Si ya los ha autorizado previamente, este paso se omite.  
- **Redirección con Código de Autorización**: Después de la autorización, el usuario es redirigido a la URL de redirección de la aplicación con un código de autorización que expira en 5 minutos.  
- **Intercambio por el Token de Acceso**: La aplicación utiliza sus credenciales y el código de autorización para obtener un token de acceso mediante una solicitud POST a un endpoint específico.  

### **Ejemplo de Solicitud para Obtener el Token de Acceso:**  

```bash
curl -d '{
"client_id": "123",
"client_secret": "abcdef",
"grant_type": "authorization_code",
"code": "xyz"
}' \
-H 'Content-Type: application/json' \
-X POST "https://www.nuvemshop.com/apps/authorize/token"
```

Junto con el token de acceso, se proporciona un **user_id**, que corresponde al **ID de la tienda**.  

Este **user_id** es esencial para realizar solicitudes a la API y puede utilizarse para autenticar usuarios de la aplicación en su sitio web.  
