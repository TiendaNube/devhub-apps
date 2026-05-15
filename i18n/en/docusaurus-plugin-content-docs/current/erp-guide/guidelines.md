---
sidebar_position: 2
title: Best Practices
---


- ### Post-installation Guidelines

The post-installation experience is decisive for merchant retention. In complex solutions like ERPs, clarity in the first steps is essential.

The redirect should be smooth, eliminating friction for users exploring the tool for the first time.

For applications that require guided setup or commercial contact, make sure the destination page contains:

- ❖ **Immediate Onboarding:** After installation, direct the user to an intuitive Landing Page.
- ❖ **Assisted Support:** If the model requires direct contact, the destination screen should be objective, presenting step-by-step instructions for registration or credential generation.
- ❖ **Integration Guide:** Clear visual instructions through to the completion of the final setup.

We recommend reading our [Landing Page guide](https://dev.nuvemshop.com.br/en/docs/applications/landing-page) and understanding its importance.

- ### MultiCD Adaptation

It is extremely important that the application is adapted to [MultiCD](https://tiendanube.github.io/api-documentation/multi-inventory-guides) and consuming the APIs, this will ensure the use of multiple distribution centers.

Supporting stock in multiple locations means:

- Tracking inventory across multiple locations.
- Being able to choose the priority of locations from which stock will be picked for an order.
- Allowing shipment from multiple locations.
- Returning stock to the appropriate locations if an order is cancelled.
- Monitoring stock movement at each location.

During the purchase process, if there is a location capable of fulfilling the entire order, stock will be shipped from that location. If a single location cannot fulfill the entire order, it is split across different locations, creating multiple distribution centers.

When the ability to manage multiple inventories is implemented, the correct way to send the tracking code will be to send it via `POST /orders/\{id\}/fulfillment-orders/\{id\}/fulfill` in the payload.

Since an order can have multiple shipments, you need to know which shipment to associate the tracking code with. Imagine an order with three shipments from three different locations, and a tracking code was sent to `POST /orders/\{id\}/fulfill`. Which shipment should it be assigned to? To prevent the application from breaking, it must be assigned to a single Fulfillment Order, and so it was decided to assign it to the first one.

If the store does not have multiple locations, there is no problem, as there can only be one shipment per sale. But if the order has more than one location, the tracking code sent via `POST /orders/\{id\}/fulfill` may have been intended for a different shipment than the first, causing confusion for both merchants and consumers.

For this reason, we decided to introduce the concept of "multi-inventory ready" applications.

- ### Webhook Usage

To ensure healthy operation and compliance with Nuvemshop's best practices, it is essential that your application is prepared to react to status changes. The use