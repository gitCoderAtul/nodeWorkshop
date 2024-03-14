import express from "express";
import {
    addUser,
    selectUser,
    updateUser,
    deleteUser,
    selectShowData,
    // selectUserByValue,
    // selectUserById,
    fileUploadFunction
} from '../controllers/user.controllers.js';

const userRouter = express.Router();

userRouter
.get('/', selectUser)
.get('/showdata', selectShowData)
//  .get('/age/:uage/:uname', selectUserByValue) // subroute
// .get('/:userid', selectUserById) 
.post('/',addUser)
  .post('/uploadFile',fileUploadFunction)
.delete('/:userid',deleteUser)
.put('/:userid',updateUser)

export default userRouter;