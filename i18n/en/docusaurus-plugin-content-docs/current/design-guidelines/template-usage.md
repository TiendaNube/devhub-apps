---
sidebar_position: 2
title: Use of Design Templates
---

# Use of Design Templates

Nimbus design templates are valuable tools for ensuring visual consistency and a solid experience across Nuvemshop products. By using these templates, our goal is to ensure a uniform experience aligned with the interface of Nuvemshop's store admin.

Prioritizing the adoption of these templates is essential to maintain brand identity and streamline the homologation process.

[Check the homologation checklist](../homologation/checklist#uso-de-templates-nimbus---prioridade-alta)

## Empty and Initial State Page

Empty and initial states represent a pattern designed to guide users on screens where there is currently no information available. There are two variants of this pattern, each suitable for different situations where the lack of information is due to different reasons.

| Empty Type                                                                                                                                                                 | Variant                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Empty state** - recommended Used when a search or information loading returns no results, either due to a failure or because of selected criteria in filters.            | [With Icon](https://nimbus.tiendanube.com/documentation/patterns/empty-message)         |
| **Initial state** - recommended Its use is recommended when a screen has no information to show due to the absence of some configuration or interactions from other users. | [With Illustration](https://nimbus.tiendanube.com/documentation/patterns/empty-message) |

### Use of Illustrations

In the [With Illustration](https://nimbus.tiendanube.com/documentation/patterns/empty-message) variant, there is the possibility of including an illustration to provide a friendlier feeling. For this, we have an [illustration repository](https://www.figma.com/file/Ed1Gl8an2iBqL2GXHJEK6Y/%E2%98%81%EF%B8%8F-Tiendanube-Illustrations-Repo?type=design&node-id=60-2&mode=design) that can be reused in similar contexts.

### Empty Message Actions

In both variants, it is essential to offer plausible actions that assist the user in resolving the empty state. This can include configurations, page reloading, or help links.

## Error Page

An error page is the interface displayed when a problem or error occurs during user interaction with an application. It provides information about the error, if possible, instructions for handling the situation, reload buttons, and partner support contact information.

These pages are essential to maintain a consistent experience and minimize user frustration in the face of technical failures, delimiting error responsibility.

## Form Page

A [form page template](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-form--basic) is a predefined structure that demonstrates how different types of information in a form should be organized and displayed to users. This template aims to provide a consistent and intuitive experience when filling out information.

The form template includes examples for receiving the following types of information:

| Card Name                    | Recommendation                                             |
| ---------------------------- | ---------------------------------------------------------- |
| Text Inputs                  | Used to receive and validate short or long text            |
| File Upload Inputs           | Used to receive and validate files                         |
| URL Input                    | Used to receive and validate links                         |
| Price Inputs                 | Used to receive and validate price information             |
| Stock Inputs                 | Used to receive and validate stock information             |
| Weight and Dimensions Inputs | Used to receive and validate product dimensions and weight |
| Multiple Choice Options      | Used to receive options from predefined lists              |
| Categories                   | Used to receive custom information                         |

## Confirmation Modal

A [confirmation modal template](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic) is a pop-up window that requests user confirmation before taking a critical or irreversible action. It usually includes a clear message about the action's impacts and "Confirm" and "Cancel" buttons to allow the user to make an informed decision.

### Recommended Use

**Form Abandonment**: Whenever there is a form with unsaved information, we should display a modal to confirm page abandonment and prevent accidental data loss.

**Destructive Actions**: Whenever there is a destructive action, we should warn the user with a confirmation modal, asking if they really want to proceed with their action.

## Settings Page

A [settings page template](https://tiendanube.github.io/nimbus-patterns/index.html?path=/docs/templates-settingspage--docs) is a structure designed to allow users to customize and configure different aspects of an application according to their preferences. This template offers an interface where users can explore and modify settings, options, and system features consistently with Nuvemshop products.

The settings page includes examples for configuring the following types of information:

| Setting Type        | Recommendation                            |
| ------------------- | ----------------------------------------- |
| Checkbox            | Used to select multiple options           |
| Radio               | Used to select a single option            |
| Card with Toggle    | Used to enable instant settings           |
| Collapsible Card    | Used to hide optional filling information |
| Additional Settings | Used to take the user to other settings   |
| Card with Action    | Used to take the user to other pages      |

## Simple Table Page

A simple table template is a structure that allows the organized display of tabular information, with rows and columns efficiently categorizing data.

This template is used for quick analysis and typically includes column headers and sorting features while maintaining a minimalist design for readability and focusing on essential data.

### Information Order

The information order should be maintained as shown in the template, prioritizing the most basic information on the left and actions on the right.

## Product Table Page

A product table template is an essential tool for the organized display of feature and stock information. This template is used for quick data editing, including column headers, inputs, and status while maintaining readability and focusing on essential data.

### Information Order

The information order should be maintained as shown in the template, prioritizing the most basic information on the left and actions on the right.

## Template Customization Limits

Modifying template contents is allowed as long as the logic and order of elements are maintained, considering existing use cases in Nuvemshop products, and preserving data prioritization and compositions already built.

### Building New Compositions

If there is no similar case in the template, building new compositions is free, as long as component and pattern assignments are respected.

---

## Next Steps

- Explore [Components and Patterns](./component-usage.md)
