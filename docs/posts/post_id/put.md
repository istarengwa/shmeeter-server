# Update Post

**URL** : `/api/posts/[post_id]`

**Method** : `PUT`

**Auth required** : YES

**Payload**

```json
{
  "text": string,
  "like": number,
  "users_likes": User[],
  "modified": boolean
}
```

## Success Response

**Code** : `200 OK`

**Content schema**

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
