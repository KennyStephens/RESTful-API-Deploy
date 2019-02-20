# RESTful CRUD Node Server
## Overwatch Character API

##### **Deployment**
Deployed to Heroku: [https://secure-reef-86107.herokuapp.com](https://secure-reef-86107.herokuapp.com)

##### **[Routes](https://github.com/KennyStephens/RESTful-CRUD-Node-Server/blob/master/routes/overwatch.routes.js)**
- "/" - Get all characters in Database
- "/name/:name" - Get a specific Overwatch character by name
- "/class/:class" - Get a specific Overwatch character by class
- "/post" - Add additional character

  *Submit new character through postman in the following format*
```
  name: character name,
  ultimate: character ultimate,
  class: character class,
  weapon: character weapon
```
To post a new character follow the following:
- "/delete/:id" - Delete a character
- "/put/:id" - Update a character
