# Post

**URL** : `/api/posts/[post_id]`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
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
```
