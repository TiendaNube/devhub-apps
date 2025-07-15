---
title: UI Slots
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

import uiSlotsDesktopUrl from '../../../static/img/pt/nube-sdk-ui-slots-desktop.png';
import uiSlotsMobile1Url from '../../../static/img/pt/nube-sdk-ui-slots-mobile-1.png';
import uiSlotsMobile2Url from '../../../static/img/pt/nube-sdk-ui-slots-mobile-2.png';
import uiSlotsMobile3Url from '../../../static/img/pt/nube-sdk-ui-slots-mobile-3.png';

UI slots are containers for UI components.
When you want to add a UI component, you need to specify their location on the screen, and to support the widest range of themes and layouts, we created predefined slots that are available across all templates that can be used to put your UI components inside.

You can render components into these slots using the `nube.render()` method and clear them using `nube.clearSlot()`. For more information, see [Script Structure](./script-structure#rendering-components).

## `Checkout Slots`

These are the slots that are available in checkout:

| Slot                  | Page                   |
| --------------------- | ---------------------- |
| before_main_content   | start, payment         |
| after_main_content    | start, payment         |
| after_line_items_price| start, payment         |
| before_line_items     | start                  |
| after_line_items      | start, payment         |
| after_contact_form    | start                  |
| after_address_form    | start                  |
| after_billing_form    | start                  |
| after_payment_options | payment                |
| before_payment_options| payment                |
| before_address_form   | start                  |
| before_billing_form   | start                  |
| before_contact_form   | start                  |
| before_shipping_form  | start                  |
| after_shipping_form   | start                  |
| corner_top_left       | start, payment, finish |
| corner_top_right      | start, payment, finish |
| corner_bottom_left    | start, payment, finish |
| corner_bottom_right   | start, payment, finish |
| modal_content         | start, payment, finish |

This is their usual location:

<img src={uiSlotsDesktopUrl}/>

And this is their usual location on mobile devices:

<img src={uiSlotsMobile1Url} style={{width: 300}} />

Items details (mobile devices only):

<img src={uiSlotsMobile2Url} style={{width: 300}} />

Items details

<img src={uiSlotsMobile3Url} style={{width: 300}} />
