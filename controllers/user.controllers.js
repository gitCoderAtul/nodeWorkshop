import userModel from "../models/user.model.js";
import multer from "multer";

// const addUser = function(req,res){
//     console.log(req.body); // use when form submit
//     res.send({msg:"Add User"})
// }
// const selectUser = function(req,res){    
//     res.send({msg:"Select User"})
// }
// const updateUser = function(req,res){
//     res.send({msg:"Update User"})
// }
// const deleteUser = function(req,res){
//     res.send({msg:"Delete User"})
// }

const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/profiles/')
      },
      filename: function (req, file, cb) {
        const filNameToUpload = Date.now() + file.originalname;
        cb(null, filNameToUpload)
      }
});

const upload = multer({ storage: fileStorage }).array('userProfile', 5)
 
const fileUploadFunction  = function (req, res) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
      } else if (err) {
        // An unknown error occurred when uploading.
      }
  
      // Everything went fine.
      console.log(req.body);
      console.log(req.files);
      res.send({msg:"file uploaded"})
    })
  }

const addUser = async function(req,res){
    console.log(req.body); // use when form submit
    const userModelInstance = new userModel(req.body)
    try{
        var ansInsert = await userModelInstance.save();
        res.status(201).send({data:ansInsert});
    }
    catch{
        res.status(501).send({data:err});
    } 
    // res.send({msg:"Add User"})
}
const selectUser = async function(req,res){    
    try{
        var ansSelect = await userModel.find({});
        res.status(200).send({data:ansSelect});
    }
    catch{
        res.status(501).send({data:err});
    }
}
const updateUser = async function(req,res){
    // res.send({msg:"Update User"})
    console.log(req.params.userid);
    console.log(req.body);
    try{
        await userModel.findByIdAndUpdate(req.params.userid, req.body)
        res.status(200).send({msg:"record update"});
    }catch{
        res.status(501).send({data:err})
    }

}
const deleteUser = async function(req,res){
    console.log(req.params.userid); 
    try{
        await userModel.findByIdAndDelete(req.params.userid)
        res.status(200).send({msg:"record delte"});
    }catch{
        res.status(501).send({data:err})
    }
}


 const selectShowData = async (req,res)=>{
    // res.render('userTable.ejs');
    try{
        var ansSelect = await userModel.find({});
        res.status(200).render('userTable.ejs', {a:100, data:ansSelect},)
    }
    catch(err){
        res.status(501).send({data:err})
    }

}

export {
    addUser,
    selectUser,
    updateUser,
    deleteUser, 
    selectShowData,
    fileUploadFunction

}