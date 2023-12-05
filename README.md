# How to run the solution

1. git clone https://github.com/pvitalii/pidhornyi_express
2. cd pidhornyi_express
3. npm install
4. npm run start

# How to run tests

1. npm run test

# Routes
## Users routes:
- [GET] /users - Get all users
- [GET] /users/:email - Get user by email
- [POST] /users - Add new user
- [PATCH] /users/:id - Update any of user`s fields
- [DELETE] /users/:email - Delete user by email

## Articles routes
- [GET] /articles - Get all articles
- [POST] /articles - Add new article
- [PATCH] /articles/:id - Update only article`s tags

## Students stats routes
- [GET] /students - Get all students stats
- [GET] /students/worst-homework - Get stats of student with the worst homework score
