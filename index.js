console.log('nodemon run'); 
// console.log('nodemon changes'); 
// import { Express } from "express";
import express from "express";
import 'dotenv/config';
import bodyParser from "body-parser";

// console.log(typeof express);
import userRouter from "./routes/user.route.js";
import dbconnect from './database/mongoconfig.js';

//npm i cors
import cors from 'cors';

dbconnect()
.then(()=>console.log('connect'))
.catch((err)=>console.log(err))

const app = express();
// console.log(app);

app.use(cors());
// app.set('','')
// parse application/json
app.use(bodyParser.json());
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", userRouter);

//http://localhost:9000/getUser
// app.get('/getUser', (req, res) => {
//    console.log(typeof req);
//    console.log(typeof res);
//    res.status(200).send({data:['user1','user2']})
//     // res.send('Hello World!')
//   });
  
//   app.post('/addUser', (req, res) => {
//     console.log(typeof req);
//    console.log(typeof res);
//     // res.status(200).send({data:[], msg: "Record added"})
//   });

//   app.listen(9000, () => {
//     console.log(`Example app listening on port `)
//   })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port `)
  })
