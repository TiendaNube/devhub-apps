---
title: UI Components
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

We support multiple UI components, some of which support nesting, to allow the construction of rich user interfaces.
The UI components are assigned to slots by sending the [ui:slot:set](./events#uislotset) event

## `box`

Box container, supports multiple size, styling and alignment options.

```typescript title="Example"
    import { box } from "@tiendanube/nube-sdk-ui";

    const myBox = box({ 
        width: 100, 
        height: 200,
        margin: 10,
        justifyContent: "space-around",
	    children: [],
    });
```

## `col`

Column container, supports multiple size, styling and alignment options.

```typescript title="Example"
    import { col } from "@tiendanube/nube-sdk-ui";

    const myColumn = col({ 
        width: 100, 
        height: 200,
        margin: 10,
        justifyContent: "space-around",
	    children: [],
    });
```

## `row`

Row container, supports multiple size, styling and alignment options.

```typescript title="Example"
    import { row } from "@tiendanube/nube-sdk-ui";

    const myRow = row({ 
        width: 100, 
        height: 200,
        margin: 10,
        justifyContent: "space-around",
	    children: [],
    });
```

## `field`

Field, supports receiving events

```typescript title="Example"
    import { field } from "@tiendanube/nube-sdk-ui";

    field({ 
        id: "myField",
        name: "field", 
        label: "User Name", 
        onChange: (e) => console.log(e.value) 
    });
```
