# How to run the solution

1. git clone https://github.com/pvitalii/pidhornyi_express
2. cd pidhornyi_express
3. npm install
4. npm run start

# How to run tests

1. npm run test

# Routes
## Users routes:
- [GET] http://localhost:3000/users
- [GET] http://localhost:3000/users/:email
- [POST] http://localhost:3000/users
- [PATCH] http://localhost:3000/users/:id
- [DELETE] http://localhost:3000/users/:email

## Articles routes
- [GET] http://localhost:3000/articles
- [POST] http://localhost:3000/articles
- [PATCH] http://localhost:3000/articles/:id

## Students stats routes
- [GET] http://localhost:3000/students/:id
- [GET] http://localhost:3000/students/worst-homework
