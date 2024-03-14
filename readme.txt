process
npm init -y
npm install -g nodemon (global)
npm i express
npm i mongoose
npm i dotenv
npm i body-parser
npm i ejs
npm i multer

npm i cors (cross origin ) for integration


package.json:
 /* for es6 feture  type:module*/
--------------------------
Internal modules

npm init -y
https://www.npmjs.com/

--------------------------
External modules

npm i -g nodemon
npm i express
npm i mongoose
npm i ejs

--------------------------
Custom modules

--------------------------

mongodb cmd

use nodepro
db
db.createCollection("users");
show collections
db.users.insert({username:"ajay",userage:20});
db.users.insert([
    {username:"akshay",userage:21},
    {username:"ram",userage:22},
    {username:"amit",userage:23}
])

db.users.find();
db.users.find().pretty()
db.users.find({userage:21}).pretty()
db.users.find({userage:{$gt:21}}).pretty() //condition base query
db.users.update({userage:21},{$set:{username:'jay', userage:27}});
db.users.remove({});
db.users.remove({userage:27})



