# JSON Response Normalizer

A simple TypeScript project that takes an API-style JSON response, filters out unpublished articles, and transforms the remaining articles into a cleaner summary format.

## What it does

* Filters for published articles
* Extracts useful article information
* Converts nested API data into a simpler structure
* Uses TypeScript types for safer code

## Example Output

```json
[
  {
    "id": "a1",
    "title": "Learning JavaScript",
    "authorName": "Ava Stone",
    "views": 1200
  },
  {
    "id": "a3",
    "title": "Async Basics",
    "authorName": "Mina Patel",
    "views": 900
  }
]
```

## Concepts Used

* TypeScript types
* Functions
* `.filter()`
* `.map()`
* Nested objects
* API response normalization
* ES modules

## Acknowledgement

This project was completed as part of the **JSON Response Normalizer** challenge from Roadmap.sh:

[https://roadmap.sh/projects/js-json-response-normalizer](https://roadmap.sh/projects/js-json-response-normalizer)
