---
title: UI Slots
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

import uiSlotsDesktopUrl from '../../../static/img/pt/nube-sdk-ui-slots-desktop.png';
import uiSlotsMobile1Url from '../../../static/img/pt/nube-sdk-ui-slots-mobile-1.png';
import uiSlotsMobile2Url from '../../../static/img/pt/nube-sdk-ui-slots-mobile-2.png';

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

UI slots are containers for UI components.
When you want to add a UI component, you need to specify their location on the screen, and to support the widest range of themes and layouts, we created predefined slots that are available across all templates that can be used to put your UI components inside.

## `Checkout Slots`

These are the slots that are available in checkout:
- before_main_content
- after_main_content
- before_line_items
- after_line_items
- after_contact_form
- after_address_form
- after_billing_form"

This is their usual location:

<img src={uiSlotsDesktopUrl}/>

And this is their usual location on mobile devices:

<img src={uiSlotsMobile1Url} style={{width: 300}} />

Items details (mobile devices only):

<img src={uiSlotsMobile2Url} style={{width: 300}} />
