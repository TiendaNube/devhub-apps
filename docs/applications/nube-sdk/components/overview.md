# Overview

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The NubeSDK provides a rich set of UI components that automatically adapt to the store's theme, ensuring design consistency. These components can be developed using either JSX or declarative functions.

## Layout Components

### [Box](/docs/applications/nube-sdk/components/box)
A flexible container component that supports multiple sizes, styling, and alignment options. It's primarily used to embed other components that don't have their own layout options.

### [Row](/docs/applications/nube-sdk/components/row)
A horizontal container that aligns child components in a row. It inherits all capabilities from the Box component with the direction preset to "row".

### [Column](/docs/applications/nube-sdk/components/column)
A vertical container that aligns child components in a column. It inherits all capabilities from the Box component with the direction preset to "column".

### [Fragment](/docs/applications/nube-sdk/components/fragment)
A utility component that serves as a logical grouping element, allowing multiple components to be wrapped together without introducing an additional DOM node.

### [SideScroll](/docs/applications/nube-sdk/components/sidescroll)
A horizontal scrollable container for displaying content in a row. Useful for creating carousels, image galleries, or any horizontal list of items that may overflow the available width.

## Form Components

### [Field](/docs/applications/nube-sdk/components/field)
A text input element for forms that supports properties like name, label, and various event handlers (onChange, onBlur, onFocus).

### [Textarea](/docs/applications/nube-sdk/components/textarea)
A multi-line text input component with support for various event handlers and styling options.

### [Checkbox](/docs/applications/nube-sdk/components/checkbox)
A component that allows users to select one or more items from a set, with support for labels and state management.

### [Button](/docs/applications/nube-sdk/components/button)
A clickable element used to trigger actions, supporting multiple variants (primary, secondary, transparent, link) and various styling options.

## Content Components

### [Text](/docs/applications/nube-sdk/components/text)
A component for rendering text with optional styling, supporting properties like color, background, heading levels, and text formatting modifiers.

### [Link](/docs/applications/nube-sdk/components/link)
A component for rendering clickable hyperlinks that navigate users to different URLs, with support for target options and custom styling.

### [Image](/docs/applications/nube-sdk/components/image)
A component for displaying images with support for responsive sources, alternative text, and various sizing options.

### [Icon](/docs/applications/nube-sdk/components/icon)
A component for displaying icons from the **[Nimbus Icons](https://nimbus.nuvemshop.com.br/documentation/resources/nimbus-icons)** library, supporting customizable size and color properties.

### [Iframe](/docs/applications/nube-sdk/components/iframe)
A component that allows you to embed external web content directly into your application's UI, creating an inline frame that loads content from a specified URL.

### [SVG](/docs/applications/nube-sdk/components/svg)
A component for creating scalable vector graphics within your NubeSDK application, providing comprehensive SVG elements including Root, Circle, Text, and other common SVG shapes.

### [Markdown](/docs/applications/nube-sdk/components/markdown)
A component for rendering markdown content as formatted HTML, supporting all standard markdown syntax including headings, bold, italic, links, and code blocks.

## Interactive Components

### [Accordion](/docs/applications/nube-sdk/components/accordion)
A collapsible content component that allows users to expand and collapse sections of content, improving the user experience by reducing visual clutter.

### [Progress](/docs/applications/nube-sdk/components/progress)
A visual indicator component that displays the completion status of a task or operation, supporting configurable value and maximum properties.

### [Toast](/docs/applications/nube-sdk/components/toast)
A non-disruptive message component that appears temporarily to provide quick feedback to users, supporting multiple variants and customizable duration.

## Key Features

- **Theme Integration**: All components automatically adapt to the store's theme
- **Event Handling**: Comprehensive event system for user interactions
- **Responsive Design**: Support for different screen sizes and layouts
- **Accessibility**: Built-in support for accessibility features
- **Styling**: Flexible styling options through props and custom stylesheets

## Usage

Components can be used in UI slots throughout the application, with predefined locations for different sections of the checkout process. The components are assigned to slots using the `ui:slot:set` event.

For detailed information about each component's properties and usage, please refer to their individual documentation pages.

