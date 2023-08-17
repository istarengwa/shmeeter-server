# Register

**URL** : `/api/auth/local/register`

**Method** : `POST`

**Auth required** : NO

**Payload**

```json
{
  "username": string,
  "email": string;
  "password": string;
}
```

**Data example** All fields must be sent.

```json
{
  "username": "Féfé",
  "email": "féfé@féfé.féfé",
  "password": "féféééééééééééééééééééééééééééééééééééé"
}
```

## Success Response

**Condition** : If everything is OK.

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
