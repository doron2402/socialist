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
    -   GET /api/auth/generate/token - get a token

- Follow:
    -   POST /api/{client_id}/users/{user_id}/follow - follow a user (PAYLOAD {target_id: ID})
    -   DEL /api/{client_id}/users/{user_id}/unfollow - unfollow a user (PAYLOAD {target_id: ID})
    -   GET /api/{client_id}/users/{user_id}/relation/{target_id} - get relation between users

- Like:
    -   POST /api/{client_id}/users/{user_id}/like/{item_id} - user like
    -   GET /api/{client_id}/users/{user_id}/like/{item_id} - check if user like the page
    -   GET /api/{client_id}/users/{user_id}/like/all

- Friend
    -   GET /api/{client_id}/users/{user_id}/friends/all - return {total_friends: INT, friends: [{},{}]}
    -   GET /api/{client_id}/users/{user_id}/friends/{target_id} - return BOOL
    -   POST /api/{client_id}/users/{user_id}/friends/{target_id} - add friend
    -   DEL /api/{client_id}/users/{user_id}/friends/{target_id} - unfriend

- View
    -   GET /api/{client_id}/users/{user_id}/views/all - return items that the user view
    -   GET /api/{client_id}/users/{user_id}/views/{target_id} - BOOL
    -   POST /api/{client_id}/users/{user_id}/views/{target_id}

- Listen
    -   GET /api/{client_id}/users/{user_id}/listen/all - return items that the user listen to (track, playlist, albums, artist)
    -   GET /api/{client_id}/users/{user_id}/listen/{target_id} - BOOL
    -   POST /api/{client_id}/users/{user_id}/listen/{target_id}

- Watch
    -   GET /api/{client_id}/users/{user_id}/watch/all - return items that the user watch to (clip, movie, photo)
    -   GET /api/{client_id}/users/{user_id}/watch/{target_id} - BOOL
    -   POST /api/{client_id}/users/{user_id}/watch/{target_id} - user (id) watch item (id)

### How's it work
-   Saving data in MongoDB and storing relationship data in NEO4J


** Doron Segal.