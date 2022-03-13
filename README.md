# 👬 User API

Simple API with CRUD operations

## 🚀 Setup local server

1. Clone this repository and install dependencies:

```bash
npm install
```

2. Create `.env` file with credentials for PostgreSQL:

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=root
POSTGRES_HOST=localhost # If you run with docker use name of the container with postgres
POSTGRES_PORT=5432
POSTGRES_DB=postgres
```

3. Create production build & run server:

```bash
npm run build
```

```bash
npm start
```

Or launch server in develepment mode with nodemon:

```bash
npm run dev
```

> Base server url: http://localhost:5000

## 🐳 Run with docker

To start the app and database in docker containers you only need to execute 2 simple commands inside the project directory:

```bash
docker-compose build
```

```bash
docker-compose up
```

## 📌 End-points

-   **POST** _/api/user_ - Create a new user

```json
{
    "email": "user@test.com",
    "firstName": "User",
    "lastName": "User",
    "image": <choose file>
}
```

-   **GET** _/api/user/:id_ - Get user by id
-   **GET** _/api/users_ - Get all users
-   **PUT** _/api/user/:id_ - Update user by id

```json
{
    "email": "newUserEmail@test.com",
    "firstName": "newUser",
    "lastName": "newUser",
    "image": <choose file>
}
```

-   **DELETE** _/api/user/:id_ - Delete user by id
-   **POST** _/app/pdf_ - Save PDF file with user data to the database

```json
{
    "email": "user@test.com"
}
```
