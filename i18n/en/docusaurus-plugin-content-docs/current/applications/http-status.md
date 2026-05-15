---
title: HTTP Status Patterns
---

# HTTP Status Patterns

This documentation defines the response standards used by our APIs. We adhere to global HTTP protocol specifications to ensure that integration with our services is predictable, efficient, and easy to debug.

## 🔹 Why is standardization important?

The correct use of HTTP status codes is not just a "best practice," but a fundamental pillar of REST architecture:

* **Interoperability:** HTTP clients, proxies, and load balancers understand these codes natively.
* **Ease of Debugging:** Identifying the cause of an error (e.g., lack of permission vs. non-existent resource) accelerates analysis based solely on the code.
* **Caching and Performance:** Many caching systems decide whether to store a response based on the status code (e.g., 200 is cacheable, whereas 500 is not).
* **Reduced Support:** Predictable APIs generate fewer questions and technical support tickets.

## 🔹 Code Categories

Responses are grouped into five classes, identified by the first digit:

| Class | Meaning | Description |
| :---- | :---- | :---- |
| **2xx** | Success | The action was successfully received, understood, and accepted. |
| **3xx** | Redirection | Further action is needed to complete the request. |
| **4xx** | Client Error | The request contains incorrect syntax or cannot be fulfilled due to an integrator error. |
| **5xx** | Server Error | The server failed to fulfill an apparently valid request. |

## 🔹 Most Used Codes in our API

### Success (2xx)

* **200 OK:** The request was successful. The response body contains the requested data.
* **201 Created:** The resource was successfully created. Usually returned after a `POST` request.
* **204 No Content:** The request was successfully processed, but there is no content to return (common for `DELETE` or `PUT`).

### Client Errors (4xx)

* **400 Bad Request:** The request is malformed or missing required fields.
* **401 Unauthorized:** Authentication failed. The `API Key` or `Token` is invalid or has expired.
* **403 Forbidden:** The client is authenticated but does not have permission to access the specific resource.
* **404 Not Found:** The requested resource (e.g., a product SKU) does not exist on the server.
* **422 Unprocessable Entity:** The syntax is correct, but there are semantic errors (e.g., business rule validation failure).
* **429 Too Many Requests:** The rate limit has been exceeded.

### Server Errors (5xx)

* **500 Internal Server Error:** An unexpected error occurred on the server side.
* **503 Service Unavailable:** The server is temporarily down for maintenance or is overloaded.

## 🔹 Implementation Best Practices

* **Do not use only 200 OK:** Avoid returning `200 OK` with an error message in the body (`{ "error": true }`). This confuses monitoring tools and client libraries.
* **Idempotency:** Ensure that `GET`, `PUT`, and `DELETE` requests can be repeated without causing unintended side effects, maintaining consistent return codes.
* **Diagnostic Logs:** For `5xx` errors, always provide a `Request-ID` in the response header to facilitate internal tracking.
