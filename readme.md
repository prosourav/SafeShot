
# SafeShot
#### A Vaccineation management application

It is a software where use can signup and book appointment to take vaccine, and can see their vaccine status, also they can give review for a specific vaccine, and doctor/admin can see all the appointments and update appointment status. Admin have all the power to manage all the users,review and vaccine. 


## Core Features

 - Authentication
 - Role-Permission Based Authorization
 - Profile Update
 - User Management
 - Review Management
 - Vaccine Management


## Tech Stack

**Server:** Node, Express , MongoDB , Mongoose, OpenApiValidator


## API Reference

#### Get all items

```http
  GET /api/v1/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `access_token` | `Bearer Token` | **Required**. Authorization Header |
| `limit` | `Number` | **Not Required**. Default 2 |
| `page` | `Number` | **Not Required**. Default 1 |
| `sortBy` | `string` | **Not Required**. Default updatedAt |
| `sortType` | `string` | **Not Required**. Default desc |
| `search` | `string` | **Not Required**. Search Query |
| `select` | `string` | **Not Required**. Select for Get Specific Item |


#### Get Single item

```http
  GET /api/v1/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
| `select` | `string` | **Not Required**. Select for Get Specific Item |

#### Update Exiting Item
```http
  PATCH /api/v1/items/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Delete Item

```http
  DELETE /api/v1/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |





## API Swagger Documentation

[Documentation](https://app.swaggerhub.com/apis/Learning-SwaggerAPI/Vaccination-API/1.0.0/)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` In which port your app will run on local mechine

`DB_USER_NAME` Mongo DB username

`DB_PASSWORD` Mongo DB password

`DB_CONNECTION_URL` MongoDB Connection String 

`DB_NAME` Mongo database name

`ACCESS_TOKEN_SECRET` JWT secret




## Run Locally

Clone the project

```bash
  git clone git@github.com:prosourav/SafeShot.git
```

Go to the project directory

```bash
  cd SafeShot
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


