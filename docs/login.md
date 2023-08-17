# Login

**URL** : `/api/auth/local`

**Method** : `POST`

**Auth required** : NO

**Payload**

```json
{
  "identifier": string,
  "password": string
}
```

**Data example**

```json
{
  "identifier": "josselinesttresbeau@example.com",
  "password": "abcd1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "jwt": string,
  "user": {
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
  }
}
```
