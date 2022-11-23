npm install express jsonwebtoken nodemon bcrypt dotenv mongoose cors


### POST via cURL

curl -X POST -d 'name=linuxize&email=linuxize@example.com' https://example.com/contact.php

curl -X POST -H "Content-Type: application/json" \ 
-d '{"name": "linuxize", "email": "linuxize@example.com"}' \
https://example/contact

### GET via cURL

curl -X GET 127.0.0.1:9000

curl -G \ 
-H "Accept: application/json" \
-data "usertype=vip&country=usa" \
localhost:8080/home/config

### GET via cURL (HEADERS)

curl -I -X GET 127.0.0.1:9000/quotes


### API REQUESTS (name, user, email, password, age)

curl -X POST -H "Content-Type: application/json" \
-d '{"name": "Ada Azucena", "user":"acristales","email":"acristales@cne.gob.sv","password":"Keeper12","age":"32"}' \
127.0.0.1:9000/users/signup# node_auth_api
