# docker-exam-master
## Description
This is a docker compose file for exam-master project in NodeJs 16.14.0 and ReactJs.

## How to use

Launch Docker compose command to start
```
docker compose -f "docker-compose.yml" up -d --build
```
Launch Docker compose command to stop
```
docker compose -f "docker-compose.yml" down
```

Access to http://localhost:4000 to see the frontend.
Access to http://localhost:4001 to see the backend and use the API.

GET
```
http://localhost:4001/todos
```
POST
```
http://localhost:4001/todos
```
DELETE
```
http://localhost:4001/todos/:todoId
```

If backend don't connect to database, please reboot your backend container.
