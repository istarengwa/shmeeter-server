# Populate option

**URL** : `/api/posts/[post_id]?populate=author`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": number,
  "attributes": {
    "text": string,
    "like": number,
    "modified": boolean,
    "created_at": Date,
    "updated_at": Date,
    "author": {
      "data": {
        "id": number,
        "attributes": {
          "username": string,
          "email": string,
          "provider": string,
          "confirmed": boolean,
          "blocked": boolean,
          "description": string,
          "created_at": Date,
          "updated_at": Date,
        }
      }
    }
  }
}
```


**URL** : `/api/posts/[post_id]?populate=users_likes`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "id": number,
  "attributes": {
    "text": string,
    "like": number,
    "modified": boolean,
    "created_at": Date,
    "updated_at": Date,
    "users_likes": {
      "data": []
    }
  }
}
```