# User

**URL** : `/api/users`

**Method** : `GET`

**Auth required** : YES

## Success Response

**Code** : `200 OK`

**Content schema**

```json
User[
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
    },
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
]
```
