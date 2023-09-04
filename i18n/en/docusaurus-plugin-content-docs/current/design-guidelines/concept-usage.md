---
sidebar_position: 4
title: UX/UI Concepts
---

# Use of UX/UI Concepts

Nimbus components are elements for creating customized interfaces as needed when there is no standard available. These components maintain consistency with Nuvemshop products and their existing interfaces. It is important to use these components correctly to ensure an easier navigation experience for Nuvemshop users.

[Check the homologation checklist](../homologation/checklist.md#use-of-uxui-concepts---medium-priority)

## Prioritization and Organization of Actions and Content

### Prioritization of Actions

#### Primary Action

The primary action is the main task of the page. There should be only one per instance. To give it the necessary emphasis, it should be represented by a [Button](https://nimbus.nuvemshop.com.br/documentation/atomic-components/button) component in the **primary** variant.

#### Secondary Actions

Secondary actions complement the primary action. To distinguish them from the primary action, you can use the [Button](https://nimbus.nuvemshop.com.br/documentation/atomic-components/button) component in the **default** variant, an [Icon button](https://nimbus.tiendanube.com/documentation/atomic-components/icon-button), or a [Link](https://nimbus.tiendanube.com/documentation/atomic-components/link).

### Positioning of Actions

#### General Context Actions

General context actions are placed in the header of the [Page](https://nimbus.tiendanube.com/documentation/patterns/page) standard. These actions are related to the general context of the screen, referring to general actions. They are aligned to the right, with the most important ones on the right and the less important ones on the left.

#### Local Context Actions

Local context actions are placed within a specific element, such as a [Card](https://nimbus.tiendanube.com/documentation/composite-components/card). They are related to a specific context within a particular group of information.

### Content Organization

#### Ordering

Contents should always be organized in order of importance to the user. Topics most relevant to the main function of the page should be presented first. It is important to promote a logical ordering of elements, gradually contextualizing the user and connecting related topics.

#### Grouping

Whenever possible, related topics are grouped into [cards](https://nimbus.tiendanube.com/documentation/composite-components/card). This helps users understand the divisions of topics and elements on the screen.

## Status Signaling and Element Standardization

Whenever an element can change status or quantity due to user action, we should clearly and simply display the current status using a few words and appropriate colors.

### How to Represent Status?

We have two types of status representation: one represents mutable conditions, and the other is related to quantities of elements.

#### Representing Conditions

For different types of conditions of an object, we use the [Tag](https://nimbus.tiendanube.com/documentation/atomic-components/tag) component and its respective variants, which are documented on the Nimbus website.

#### Representing Quantities

For the quantity of items, we use the [Badge](https://nimbus.tiendanube.com/documentation/atomic-components/badge) component and its respective variants, documented on the Nimbus website.

### How to Position Status?

#### Global Context

When the status refers to an entire screen, we should use the predefined position in the header of the [page](https://nimbus.tiendanube.com/documentation/patterns/page) standard.

#### Local Context

When the status refers to a specific element, we should consider the organization of the component in which the status is located. In the case of [Cards](https://nimbus.tiendanube.com/documentation/composite-components/card), we can use the **default** variant.

## Feedback Messages and Confirmations

Whenever we process information, we should provide feedback on the task that has just been executed.

### Types of Feedback

We have two types of feedback: alert feedback and informative feedback.

#### Alert Feedback

When the notification's purpose is to alert the user about an important event or to request action to resolve a problem, complete data, or await asynchronous confirmation, we recommend using the [Alert](https://nimbus.tiendanube.com/documentation/composite-components/alert) component and its appropriate variant for the context.

#### Informative Feedback

When the notification has an informative tone, meaning it merely describes that something has happened or is happening and does not require immediate user action, we recommend using the [Toast](https://nimbus.tiendanube.com/documentation/atomic-components/toast) component and its appropriate variant for the context.

### Confirmation Messages

When performing destructive actions or abandoning forms, we should alert the user about the respective impacts using the [confirmation modal](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic) template.

#### Deletion of Information

When a user is deleting any type of information, we should alert them that this action cannot be undone.

#### Unsaved Information

When a user is exiting a form screen where information has not been saved, we should alert them that by taking this action, the form data will be lost.

## Information Processing and Loading

Whenever information is being loaded, it should be clearly represented to the user. Each type of loading is represented differently.

### Page Loading

Whenever the information on a page is being loaded, we use the [Skeleton](https://nimbus.tiendanube.com/documentation/atomic-components/skeleton) of components to represent it. This allows users to become familiar with the structure of elements we will show and reduces the perception of loading time.

### Contextual Loading

Whenever processing is linked to a specific element, where there is no page change, we demonstrate it using a [Spinner](https://nimbus.tiendanube.com/documentation/atomic-components/spinner).

### Task Processing or File Upload

Whenever a task or file upload is the result of a primary action, meaning there is a page change, we demonstrate this action using a [Toast Progress](https://nimbus.tiendanube.com/documentation/atomic-components/toast).

## Organizing Data in Tables

### When to Use Tables?

We use the [Data Table](https://nimbus.tiendanube.com/documentation/patterns/data-table) pattern when it is necessary to organize a large amount of tabular data, using rows to organize entries and columns to categorize data types.

### How to Prioritize Data in a Table?

We organize columns according to the importance of the information, with columns containing essential information (Date, Name, Order Number) positioned on the left, while supplementary information (Products, Status, Actions) is placed on the right.

### Grouping Actions

Whenever there are more than two actions per table row, it is recommended to group actions using an icon button with an ellipsis icon.

### Use of Mass Actions

Whenever technically feasible, we provide mass actions for changing status, deleting, or performing any other type of task that can be done on all items in the table.

## Responsiveness and Element Alignment

To make the product usable on different screen resolutions, we must ensure that designed screens provide an appropriate experience at different screen sizes.

### Common Resolutions

The [page standard](https://nimbus.tiendanube.com/documentation/patterns/page) has a default width of 100%, but we can configure this width according to the type of content. For forms, we use a width of 800px to better compact the information and improve user readability, while for tables or multi-column content, we use 1200px. This resolution can be adjusted using a string.

### Component Responsiveness

#### Page Standard

In a mobile context, this standard has some different behaviors to make room for essential elements, collapsing actions, and hiding some links.

#### Table Component and Data Table Standard

In these two cases, because they contain tabular data, their use in mobile contexts is not recommended. They can be replaced using the [data list](https://nimbus.tiendanube.com/documentation/patterns/data-list) component while maintaining the same prioritization of information and separating it into rows.

#### Sidebar

This [component](https://nimbus.tiendanube.com/documentation/composite-components/sidebar) behaves differently in a mobile context, occupying the entire screen width.

#### Grids and Alignments

It is possible to align elements in different compositions and proportions using the [grid](https://nimbus.tiendanube.com/documentation/patterns/layout) standard. In mobile contexts, by default, regardless of the column width, elements should stack.

By default, all titles and text should be left-aligned, just as buttons are right-aligned, and within cards, we always align to the left.

## Form Organization and Signaling

#### Aligning Fields

Fields should always be left-aligned; preferably, they should have a total or combined width consistent with all other rows.

#### Grouping Fields

When a form is very long, we group fields into different cards to facilitate the visualization of information groups.

When we have fields with related information, we are allowed to group them on the same line of a form; we recommend that a maximum of 2 fields be grouped to avoid information overload.

#### Sizing Fields

Forms should use the [Page](https://nimbus.tiendanube.com/documentation/patterns/page) standard with a width of 800px; this allows fields to be better compacted, facilitating their readability.

Fields should have sizes consistent with the size of the information being requested; for example, if we request the postal code of a residence, we should size them with a width compatible with the number of characters in a postal code.

### How to Signal Fields in a Form

#### Optional Fields

Whenever there are optional fields, they should be signaled by including text alongside the label "(Optional)"; if there is a group of optional fields, we can group them within a collapsible card, also indicated in its title with "(Optional)," and keep it closed to draw attention to the mandatory fields.

#### Field Validation

**Success** - Whenever there is real-time field validation, we should signal it using the [Form Field](https://nimbus.tiendanube.com/documentation/patterns/form-field) pattern in its success variant.

**Error** - Whenever there is an error indication in real-time or after submitting information, we should signal it using the [Form Field](https://nimbus.tiendanube.com/documentation/patterns/form-field) pattern in its danger variant, along with a brief explanatory text about what caused this condition.

---

## Next Steps

- Explore [UX Writing Concepts](./ux-writing-usage.md)
