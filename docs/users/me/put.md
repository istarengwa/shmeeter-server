# Update Me

**URL** : `/api/users-permissions/users/me`

**Method** : `PUT`

**Auth required** : YES

**Payload**

```json
{
  "username": string,
  "description": string
}
```


## Success Response

**Code** : `200 OK`

**Content schema**

```json
{
  "id": number,
  "username": string,
  "email": string,
  "provider": string,
  "confirmed": boolean,
  "blocked": boolean,
  "description": string,
  "created_at": Date,
  "updated_at": Date,
  "posts_liked": Post[]
}
```
