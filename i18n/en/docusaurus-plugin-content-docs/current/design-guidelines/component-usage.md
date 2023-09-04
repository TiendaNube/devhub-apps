---
sidebar_position: 3
title: Components and Patterns
---

# Using Components and Patterns

Nimbus components are elements that enable creating custom interfaces as needed and should be used when there is no standard or template that meets the use case. When applying these templates, the goal is to ensure cohesion with Nuvemshop products and maintain consistency of use with existing interfaces.

Paying attention to component assignments is crucial to preserve consistency of experience, making navigation easier for users already familiar with Nuvemshop.

[Check the homologation checklist](../homologation/checklist.md#component-and-pattern-usage---high-priority)

## Atomic and Composite Components

### Component Categorization

- **Atomic Components:** are essential elements of the design system and are indivisible.
- **Composite Components:** are compositions of atomic components.

### Component Assignments

Each component falls into a category of assignment, in order to maintain consistency of experience across different apps and products, it is necessary to follow the uses described below.

| Assignment                  | Components                                                         |
|-----------------------------|---------------------------------------------------------------------|
| Navigation/Action            | [Button](https://nimbus.tiendanube.com/documentation/atomic-components/button), [Icon Button](https://nimbus.tiendanube.com/documentation/atomic-components/icon-button), [Link](https://nimbus.tiendanube.com/documentation/atomic-components/link), and [Toggle](https://nimbus.tiendanube.com/documentation/atomic-components/toggle).|
| Forms                       | [Input](https://nimbus.tiendanube.com/documentation/atomic-components/input), [Textarea](https://nimbus.tiendanube.com/documentation/atomic-components/textarea), [Checkbox](https://nimbus.tiendanube.com/documentation/atomic-components/checkbox), [Radio](https://nimbus.tiendanube.com/documentation/atomic-components/radio), [Select](https://nimbus.tiendanube.com/documentation/atomic-components/select), and [File Uploader](https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader).           |
| Organization                | [Box](https://nimbus.tiendanube.com/documentation/atomic-components/box), [Chip](https://nimbus.tiendanube.com/documentation/atomic-components/chip), [List](https://nimbus.tiendanube.com/documentation/atomic-components/list), [Popover](https://nimbus.tiendanube.com/documentation/atomic-components/popover), [Table](https://nimbus.tiendanube.com/documentation/composite-components/table), [Accordion](https://nimbus.tiendanube.com/documentation/composite-components/accordion), [Sidebar](https://nimbus.tiendanube.com/documentation/composite-components/sidebar), [Card](https://nimbus.tiendanube.com/documentation/composite-components/card), [Modal](https://nimbus.tiendanube.com/documentation/composite-components/modal), [Pagination](https://nimbus.tiendanube.com/documentation/composite-components/pagination), and [Tabs](https://nimbus.tiendanube.com/documentation/composite-components/tabs). |
| Informative/Decorative       | [Title](https://nimbus.tiendanube.com/documentation/atomic-components/title), [Text](https://nimbus.tiendanube.com/documentation/atomic-components/text), [Label](https://nimbus.tiendanube.com/documentation/atomic-components/label), [Badge](https://nimbus.tiendanube.com/documentation/atomic-components/badge), [Tag](https://nimbus.tiendanube.com/documentation/atomic-components/tag), [Toast](https://nimbus.tiendanube.com/documentation/atomic-components/toast), [Alert](https://nimbus.tiendanube.com/documentation/composite-components/alert), [Icon](https://nimbus.tiendanube.com/documentation/atomic-components/icon), [Thumbnail](https://nimbus.tiendanube.com/documentation/atomic-components/thumbnail), [Tooltip](https://nimbus.tiendanube.com/documentation/atomic-components/tooltip), [Spinner](https://nimbus.tiendanube.com/documentation/atomic-components/spinner), and [Skeleton](https://nimbus.tiendanube.com/documentation/atomic-components/skeleton). |

## Composition Patterns

### What Are Nimbus Patterns?

Nimbus has a variety of patterns that essentially bring together atomic and composite components combined with Nuvemshop's business rules. These resources promote greater consistency and optimize the construction of native and partner products.

### How to Choose the Right Patterns?

To understand which patterns we should use, it is necessary to analyze the experience we are designing and look for similar applications within the range of existing use cases.

Below, we categorize patterns by functionality. To learn more about their assignments, we recommend reading their documentation.

| Functionality          | Components                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| Element Organization | [Data List](https://nimbus.tiendanube.com/documentation/patterns/data-list), [Data Table](https://nimbus.tiendanube.com/documentation/patterns/data-table), [Product Updates](https://nimbus.tiendanube.com/documentation/patterns/product-updates), [Interactive List](https://nimbus.tiendanube.com/documentation/patterns/interactive-list), [Side Modal](https://nimbus.tiendanube.com/documentation/patterns/side-modal), [Layout](https://nimbus.tiendanube.com/documentation/patterns/layout), [App Shell](https://nimbus.tiendanube.com/documentation/patterns/app-shell), and [Page](https://nimbus.tiendanube.com/documentation/patterns/page). |
| Interactive              | [Callout Card](https://nimbus.tiendanube.com/documentation/patterns/callout-card), [Menu](https://nimbus.tiendanube.com/documentation/patterns/menu), [Menu Button](https://nimbus.tiendanube.com/documentation/patterns/menu-button), [Nav Tabs](https://nimbus.tiendanube.com/documentation/patterns/nav-tabs), [Thumbnail with action](https://nimbus.tiendanube.com/documentation/patterns/thumbnail-with-action), and [Form Field](https://nimbus.tiendanube.com/documentation/patterns/formfield).                  |
| Informational           | [Empty Message](https://nimbus.tiendanube.com/documentation/patterns/empty-message) and [Help Link](https://nimbus.tiendanube.com/documentation/patterns/help-link).                                                                      |

Pattern Customization Limits
In order to maintain consistency, which is the main focus of this resource, we must adhere to the limitations of property customization, not including or rearranging elements arbitrarily through overrides. In other words, we must always prioritize consistency with the rest of the products and applications.

## Form Components

To receive or send data, we must respect usage recommendations according to the type of information. Below, we separate form components and the corresponding types of information they can send/receive.

| Type of Information          | Component     |
| --------------------------- | -------------- |
| Short Text                  | [Input](https://nimbus.tiendanube.com/documentation/atomic-components/input)                                                                                  |
| Long Text                   | [Textarea](https://nimbus.tiendanube.com/documentation/atomic-components/textarea)                                                                            |
| Multiple Choice Selection   | [Checkbox](https://nimbus.tiendanube.com/documentation/atomic-components/checkbox)                                                                            |
| Single Choice Selection     | [Radio](https://nimbus.tiendanube.com/documentation/atomic-components/radio) and [Select](https://nimbus.tiendanube.com/documentation/atomic-components/select) |
| Image and/or Files          | [File Uploader](https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader)  |

### Form Field Pattern

Nimbus provides a Form Field pattern that combines the Label and Helper Text with the main form fields and their respective appearances, making it easier to implement by our teams and partners.

Field Specification

**Labels** - Form fields should be clearly labeled, making it clear what type of information we expect to receive; we can do this using the Label component.

**Helper Text** - Fields can also be accompanied by helper texts, guiding users to enter valid information or indicating fields that have been filled out incorrectly or incompletely.

**Appearance** - Components have standard, error, success, and danger states to support validations and should be marked whenever a validation occurs.

## Customization and Flexibility

### Prohibited Overrides

Customization of components should be restricted to the properties available in Storybook and the UI Kit, and the practice of overrides is prohibited. If there is a need for modification or addition of properties, a discussion should be opened in the Github repository.

### Pattern Construction

It is allowed to construct new compositions of components as long as there is no other pattern that can solve the imposed challenge. To ensure, it is recommended to open a discussion in the Github repository.

### Local Component Construction

If the components do not meet the product's needs, it is possible to design a local component, but this feature should be used sparingly. To ensure, it is recommended to open a discussion in the Github repository.

---

## Next Steps

- Get to know the [Usage Concepts](./concept-usage.md)
