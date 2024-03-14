import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:String,
    userage:Number
})

const userModel = mongoose.model('user', userSchema);

export default userModel;

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const BlogPost = new Schema({
//   author: ObjectId,
//   title: String,
//   body: String,
//   date: Date
// });


