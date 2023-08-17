# Posts

**URL** : `/api/posts`

**Method** : `GET`

**Auth required** : NO

## Success Response

**Code** : `200 OK`

**Content Schema**

```json
Post[
  {
    "id": number,
    attributes: {
    "text": string,
    "like": number,
    "modified": boolean,
    "created_at": Date,
    "updated_at": Date,
    }
  },
  {
    "id": number,
    attributes: {
    "text": string,
    "like": number,
    "modified": boolean,
    "created_at": Date,
    "updated_at": Date,
    }
  }
]
```
