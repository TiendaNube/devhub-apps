---
title: Publication Guidelines
---

# Publication Guidelines for Tiendanube Partners

This document aims to provide a comprehensive and detailed guide for partners who wish to develop and publish applications on the **Nuvemshop/Tiendanube** app store. It establishes the essential guidelines and requirements that must be followed during the homologation phase, ensuring that the applications are safe, reliable, and offer a high-quality experience for *merchants* and *consumers*.

The information presented here was compiled from the official Tiendanube documentation, with the goal of offering clarity and conciseness, following a reference documentation model for the e-commerce ecosystem. The sources used are the [Nuvemshop API](https://dev.nuvemshop.com.br/docs/developer-tools/nuvemshop-api) and the [Tiendanube API](https://tiendanube.github.io/api-documentation/intro).

 
## 1. General Requirements for All Apps

The guidelines in this section apply to all apps published in the Tiendanube app store. Depending on the app's configuration, it may also need to meet the specific requirements detailed in the following sections.

### 1.1. Prohibited and Restricted App Configurations
Some types of apps are not allowed in the Tiendanube app store, and others must have their visibility limited.

#### Prohibited App Types:
- **Apps that do not use Tiendanube APIs:** Apps that do not use Tiendanube's public APIs are not allowed. Merchants should not be required to configure custom apps as part of the app's functionality.
- **Apps that falsify data:** Apps must not violate the General Terms and Conditions of the Tiendanube Partner Program. Your app must only use truthful information in pop-ups and notifications.
- **Apps that process payments outside of the Tiendanube checkout:** Tiendanube cannot guarantee the security of an order processed by an external checkout. Apps that bypass the checkout or payment processing are prohibited.
- **Multiple apps with duplicate functionalities:** An app cannot be identical to another app you have already published.
- **Apps that primarily share merchant data:** Apps that share merchant data with third parties require prior written consent from Tiendanube and must comply with the API Terms. It is important that you follow the privacy guidelines.

## 2. Installation and Configuration

These requirements ensure that merchants can set up and start using your app quickly.

### 2.1. Permissions (Scopes)
Permissions are the levels of access your app has to a store's data through the API. The list of requested permissions is displayed to the merchant on the OAuth access grant page.

- Your app will only have access to the permission scopes that are strictly necessary for its functionality.

### 2.2. Setup and Merchant Flows
- Apps must be installed and initiated only within Tiendanube services. Your app must not require manual entry of a store URL during installation.
- For the merchant's security, your app should not use pop-up windows for essential functionalities, such as OAuth execution.

## 3. Functionality and Quality
For your app to be successful, it must offer a consistent and positive experience for merchants.

### 3.1. User Interface (UI)
- Your app must be fully functional through a UI, without displaying errors such as 404, 500, or 300.
- When developing an embedded solution, your app must follow the [Tiendanube design guidelines](https://dev.nuvemshop.com.br/docs/design-guidelines/overview) (still pointing to the original source), such as the component library and style guide, for a cohesive experience within the merchant's panel.
### 3.2. Billing
Tiendanube offers an API-managed billing system for different app billing types. This makes it easier for merchants to track their payments, as billing is done through the same system as their Tiendanube subscription.
- We recommend that your application uses the **Tiendanube Billing API** to charge merchants, if the billing model is suitable.
- Your app must allow merchants to upgrade and downgrade their pricing plans without having to contact support or reinstall the app.
### 3.3. App Status
- Your app must be complete and testable. There should be no bugs in the interface, display problems, or error pages that prevent the review team from testing the app.
- If your app syncs data between Tiendanube and an external platform, it must ensure that all data is consistent.
- Apps that no longer reflect the original core functionality submitted will be re-evaluated and will need to be resubmitted for a new review.

## 4. App Performance
For merchants to be successful, their online stores must have first-class speed and user experience.
- Apps that affect the store's frontend (the storefront) must have a minimal impact on performance.
- Apps that use webhooks to sync data need to ensure that synchronization is efficient and does not overload the store's resources.


## 5. App Listing on the Store
Your app listing is the business card for merchants. It needs to be **clear, concise, and directly answer the questions** that a potential user might have. To ensure all essential information is there, highlight the following mandatory sections in the app profile:

* **What is the application?**
    - Start with a direct and objective description. Explain the problem your app solves and who it is for. Use simple language so the merchant quickly understands the value of your solution.
* **How does the application work?**
    - Describe the usage flow clearly, step-by-step. You can use lists or small paragraphs to show how the merchant interacts with the app, from installation to daily use.
* **What are the application's functionalities?**
    - List the main functionalities of the app in an organized way. Use bullet points or topics to facilitate reading. Highlight the features that are most connected to the problem the app solves.
* **Advantages of installing the application**
    - Focus on the benefits. Instead of just listing features, explain what the merchant gains by using your app. For example: "save time," "increase your sales," or "improve customer experience."
* **How to integrate the application**
    - Provide simple instructions for integration. If the process is automatic, say so. If there are manual steps, describe them clearly so the merchant feels secure and can perform the integration without difficulties.
* **Pricing and plans for merchants**
    - Be transparent about your pricing structure. Explain the different plans, what each includes, and if there is a free trial period. Clarity here avoids surprises and aids the merchant's decision.
* **Merchant support**
    - Make it clear how the merchant can get in touch to ask questions or solve problems. Include support channels such as email, chat, or a help center (FAQ). Showing that there is reliable support increases confidence in your product.

These sections ensure that your listing is complete and answers all the questions a merchant might have before installing your application.

### 5.1. Basic App Information
* **App Name:** The app name cannot include Tiendanube trademarks and must be 30 characters or less. It must begin with a unique term or brand.
  - Ex: Nube, nuvem.
* **App Icon:** The icon must be in JPEG or PNG format, with dimensions of 1200x1200px. It should not contain text, screenshots, or photographs. The logo must not touch the edges.

* **App Categorization:** Select the main category that best describes your app's functionality.

## 6. Security and Data
Security is a critical part of any online business, and failure to comply with security requirements will directly impact the availability of your app.
### 6.1. Security
- Your app must have a valid and error-free SSL/TLS certificate.
- Your app must protect iframes and prevent external domains from using the app in an iframe.
- Your app must protect against common web security vulnerabilities.
- Your app must use OAuth for authentication.


### 6.2. User Data and Privacy
- If your app collects, stores, processes, or shares personal data, it is your responsibility to ensure compliance with privacy laws.
- All public apps must subscribe to mandatory webhooks to receive data deletion requests from merchants.


## 7. Support
After submission, you must offer support to the merchants who use your app.

- You must have an email address that merchants can use to contact you.
- Support contact information must be easy to find and include clear and specific instructions on how your app integrates with Tiendanube.
- **Multilingual Support:** It is mandatory (and, consequently, will bring quality to the app for the merchant) that the support accommodates the language of the country where the app will be available. For example: An app developed in Brazil but made available in Argentina, it is important to have support in Spanish.


## 8. Specific Requirements for Certain App Configurations
If your app falls into one of the following categories, it must meet these additional requirements.
### 8.1. Apps for Online Store
If your app modifies the store's storefront or the merchant's theme, you must use theme app extensions.
- The app must allow the merchant to add, reposition, or remove app blocks in the theme editor.
- App blocks must be responsive to the size of the section they are added to.
### 8.2. Embedded Apps
An embedded app uses app extensions and libraries so that merchants can access its features directly in the Tiendanube admin panel.
- Your app must use the official Tiendanube library (Nuvemshop App Bridge) to ensure a consistent experience.
- The app must have a navigation icon that meets the following requirements: 16x16px in SVG format, a single color path, and a transparent background.


## 9. Instructions for App Homologation
In this section, you must provide detailed instructions on how to test your app during the review.
- Provide login credentials if your app integrates with third-party platforms.
- Include a screencast that demonstrates the configuration process and all app functionalities, with step-by-step instructions. The language appropriate for your target market or include subtitles in that language.


## 10. App Homologation and Review Policy
This section establishes the rules and procedures governing the app analysis and approval process, ensuring the integrity and efficiency of the homologation queue. This includes the specification of the points to be reviewed, detailed in a checklist for ERP, Shipping, and Payments apps, ensuring the integrity and efficiency of the homologation queue.
### 10.1. Submission of Applications Under Development
The homologation process is intended for applications that are **complete and ready for use**. Applications that are submitted and, during analysis, are identified as being in the development phase or incomplete, will be **removed from the current queue**. The partner will be notified and will need to restart the submission process only after the app's development is complete.
### 10.2. Lack of Response to Review Team Requests
Communication is essential during the homologation stage. If the Tiendanube homologation team attempts to contact you to request information, clarifications, or adjustments and does not receive a response within 5 days, the application will be **removed from the homologation queue**. The partner will need to return to the ticket when the process is complete, as this will re-enter the application into the queue. This helps avoid delays for other partners.
### 10.3. Consequences for Failure to Implement Adjustments
In the homologation process, it is essential that the adjustments requested by the technical team are properly implemented before the application's revalidation.

If the developer or person responsible for the app informs that the adjustments have been made, but upon being submitted for a new analysis, it is found that no modification has been made or that critical points remain unchanged, the application will be considered **unsuitable**. In this circumstance, the app will be removed from the current homologation queue and repositioned at the end of the queue, requiring the validation process to be restarted from its initial stage.

This measure aims to guarantee **technical integrity**, **transparency** in the process, and **respect for the established guidelines**.