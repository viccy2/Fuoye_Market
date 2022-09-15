const fs = require("fs");
const Company = require("../models/company");
const { findByIdAndUpdate } = require("../models/company");

module.exports = class API {
//get  all company
static async allCompany(req, res){
    try{
        const post = await Company.find();
        res.status(200).json(post);
    }
    catch(err){
        res.status(404).json({message : err.json})
    }
}

//get company by id
static async getCompany(req, res){
   const id = req.params.id;
    try{
        const post = await Company.findById(id);
        res.status(200).json(post)
    }

    catch(err){
        res.status(404).json({message : err.message});
    }

}
//add new company
static async newCompany(req, res){
    const post = req.body;
    const imagename = req.file.filename;
    post.image = imagename;
    try{
        await Company.create(post);
        res.status(201).json({message : "company created successfully"});
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
}

//update company details


static async updateCompany(req, res){
    const id = req.params.id;
    let new_image = " ";
    if (req.file) {
        new_image = req.file.filename;
        try{
            fs.unlinkSync('./uploads/' + req.body.old_image);
        }
        catch(err){
            console.log(err)
        }
    }
    else{
        new_image = req.body.old_image;
    }
    const newPost = req.body;
    newPost.image = new_image;
    try{
        await Company.findByIdAndUpdate(id, newPost);
        res.status(200).json({message : "updated successfully"});
    }
    catch(err){
        res.status(404).json({message : err.message});
    }
}

// delete company
  static async deleteCompany(req, res) {
    const id = req.params.id;
    try{
     const result =  await Company.findByIdAndDelete(id);
      if(result.image != ""){
          try{
              fs.unlinkSync('./uploads/' + result.image);
          }
          catch(err){
              console.log(err);
          }
      }
      res.status(200).json({ message : 'company deleted successfully' });
    }
    catch(err){
      res.status(404).json({ message : err.message });
    }
  }

}
