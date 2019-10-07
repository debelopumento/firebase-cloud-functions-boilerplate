## This is a boilerplate with

-   Firebase cloud functions
-   MongoDB
-   RESTful API

## Dev

Create a `.env` file and put your database url in it as `DATABASE_URL`.

```
firebase serve
```

Test in Postman.

## Deploy

```
firebase deploy
```

## Notes:

-   Dependencies used in cloud functions need to be installed in the `functions` folder, i.e.

```
cd functions && npm i moment
```
