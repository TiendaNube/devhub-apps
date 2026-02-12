---
title: Customer
---

## `customer: Nullable<Customer>`

Details about the customer, including identification, contact information, and address.
This property may be null depending on the page it is accessed from.

| Property           | Type            | Always present | Description                               |
| ------------------ | --------------- | -------------- | ----------------------------------------- |
| `id`               | number or null  | No       | Unique identifier for the customer.       |
| `contact`          | object          | Yes      | Customer contact information (see below). |
| `shipping_address` | ShippingAddress | Yes      | Customer's shipping address.              |
| `billing_address`  | BillingAddress  | Yes      | Customer's billing address.               |

**Customer contact** (`customer.contact`):

| Property                       | Type            | Always present | Description                                                |
| ------------------------------ | --------------- | -------------- | ---------------------------------------------------------- |
| `email`                        | string or null  | No       | Customer's email address.                                  |
| `name`                         | string or null  | No       | Customer's full name.                                      |
| `phone`                        | string or null  | No       | Customer's phone number.                                   |
| `accepts_marketing`            | boolean or null | No       | Whether the customer accepts marketing communications.     |
| `accepts_marketing_updated_at` | string or null  | No       | Timestamp of when marketing preferences were last updated. |

**Address** (base shape for both `customer.shipping_address` and `customer.billing_address`):

| Property     | Type           | Always present | Description                               |
| ------------ | -------------- | -------------- | ----------------------------------------- |
| `zipcode`    | string         | Yes      | Postal code of the address.               |
| `first_name` | string or null | No       | First name of the address owner.          |
| `last_name`  | string or null | No       | Last name of the address owner.           |
| `address`    | string or null | No       | Street address.                           |
| `number`     | string or null | No       | Street number.                            |
| `floor`      | string or null | No       | Floor or apartment number.                |
| `locality`   | string or null | No       | Locality or neighborhood.                 |
| `city`       | string or null | No       | City name.                                |
| `state`      | string or null | No       | State or province.                        |
| `country`    | string or null | No       | Country name.                             |
| `phone`      | string or null | No       | Phone number associated with the address. |

**ShippingAddress** extends Address and adds:

| Property         | Type           | Always present | Description                                         |
| ---------------- | -------------- | -------------- | --------------------------------------------------- |
| `between_street` | string or null | No       | Additional address information between streets.     |
| `reference`      | string or null | No       | Reference points or additional address information. |

**BillingAddress** extends Address and adds:

| Property             | Type           | Always present | Description                                |
| -------------------- | -------------- | -------------- | ------------------------------------------ |
| `id_number`          | string or null | No       | Tax identification number.                 |
| `customer_type`      | string or null | No       | Type of customer (individual or business). |
| `business_name`      | string or null | No       | Legal business name.                       |
| `trade_name`         | string or null | No       | Trade name or commercial name.             |
| `state_registration` | string or null | No       | State registration number.                 |
| `fiscal_regime`      | string or null | No       | Fiscal regime classification.              |
| `invoice_use`        | string or null | No       | Invoice usage classification.              |
| `document_type`      | string or null | No       | Type of identification document.           |
| `business_activity`  | string or null | No       | Business activity or industry.             |

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Customer`, `ShippingAddress`, `BillingAddress`, `Address`).
