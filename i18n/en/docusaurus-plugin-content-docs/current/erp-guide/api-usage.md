---
sidebar_position: 3
title: API Usage Control
---

## Rate Limit - API Usage Control

Currently, we use the Leaky Bucket algorithm to limit API usage. 

By default, the bucket has a capacity for **40 requests**, with a leak rate of 2 requests per second.

This means you can make up to **2 requests per second** in batches of up to **40 requests**, without receiving error **429 (Too Many Requests)**.

To monitor API consumption, we provide the following headers:

- **x-rate-limit-limit**: Total requests allowed in a given period (equivalent to the bucket size).
- **x-rate-limit-remaining**: Number of remaining requests to fill the bucket.
- **x-rate-limit-reset**: Remaining time in milliseconds for the bucket to be completely emptied.

**Important Note**: The API usage limit is applied individually for each store and app.

**For stores on the Next or Evolution plans (higher plans), the rate limit is multiplied by 10, allowing greater request capacity.**

## General Filters and Pagination

Requests that return multiple items **do not have pagination enabled by default**. 

To navigate through the results, use the **page** parameter to specify additional pages.

Additionally, you can customize the size of each page using the **per_page** parameter, which accepts values of up to **200 items per page**.

Page numbering starts at 1. If the page parameter is omitted, the request will return the first page by default.

**Useful Information:**

- **Total results count**: The **x-total-count** header indicates the total number of available items.

```bash
x-total-count: 156
```

**Navigation Links**: The Link header provides URLs for the next and previous pages, facilitating the implementation of pagination.

This mechanism allows for organized and efficient results retrieval, even with large data sets.
