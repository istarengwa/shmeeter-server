# New Post

**URL** : `/api/posts`

**Method** : `POST`

**Auth required** : YES

**Payload**

```json
{
  "text": string,
  "author": user_id
}
```

## Success Response

**Code** : `200 OK`

**Content schema**

```json
{
  "id": number,
  "created_at": Date,
  "updated_at": Date,
  "like": number,
  "modified": boolean,
  "text": string
}
```
