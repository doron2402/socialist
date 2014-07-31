## Socialist

### Social Network as Service

### STACK:
- MongoDB
- NEO4J

### Instructions:
1.  Install brew or brew update
2.  brew install mongodb
3.  run mongo: `mongod`
4.  brew install neo4j
5.  `neo4j start`
6.  clone the repo
7.  `npm i`
8.  `npm start`

### API CALLS
- Auth:
--   GET /api/auth/generate/token - get a token

- Follow:
--   POST /api/{client_id}/users/{user_id}/follow - follow a user (PAYLOAD {target_id: ID})
--   DEL /api/{client_id}/users/{user_id}/unfollow - unfollow a user (PAYLOAD {target_id: ID})
--   GET /api/{client_id}/users/{user_id}/relation/{target_id} - get relation between users

- Like:
--   POST /api/{client_id}/users/{user_id}/like/{item_id} - user like
--   GET /api/{client_id}/users/{user_id}/like/{item_id} - check if user like the page
--   GET /api/{client_id}/users/{user_id}/like/all


** Doron Segal.