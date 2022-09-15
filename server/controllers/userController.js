const User = require("../models/users");
const fs   = require('fs');
const { findByIdAndUpdate } = require("../models/users");

module.exports = class API {
    //fetch all users
   static async allUser(req, res){
        try{
            const post = await User.find();
            res.status(200).json(post);
        }
        catch(err){
            res.status(404).json({message : err.message})
        }
   }
    //add new user method
   static async addUser(req, res){
        const post = req.body;  
        const imagename = req.file.filename;
        post.image = imagename;
        try{
            await User.create(post);
            res.status(201).json({message : "account created successfully"});
        }
        catch(err){
            res.status(400).json({message : err.message})
        }
    
   }
   //fetch user by id
   static async getUser(req, res){
    const id = req.params.id;
        try{
           const post =  await User.findById(id);
            res.status(200).json(post)
        }
        catch(err){
            res.status(404).json({message : err.message});
        }
   }

   //user update profile method
   static async updateUser(req, res){
    const id = req.params.id;
    let new_image = " ";
    if(req.file){
        new_image = req.file.filename;
        try{
            fs.unlinkSync('./uploads/' + req.body.old_image);
        }
        catch (err){
            console.log(err);
        }
    }
    else{
        new_image = req.body.old_image;
    }
    const newpost = req.body;
    newpost.image = new_image;
    try{
        await User.findByIdAndUpdate(id, newpost);
        res.status(200).json({message : "profile updated "});
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
   }

   //delete user
   static async deleteUser(req, res){
    const id = req.params.id;
    try{
       const result =  await User.findByIdAndDelete(id);
       if(result.image != ""){
            try{
                fs.unlinkSync('./uploads/' + result.image);
            }
            catch(err){
                console.log(err);
            }
       }
        res.status(200).json({message : "account deleted"});
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
   }

}