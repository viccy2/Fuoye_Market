const fs = require('fs');
const Product = require('../models/product');
const { findByIdAndUpdate } = require("../models/product");

module.exports =  class API {
    
    //fetch all products
    static async allProduct(req, res){
        try{
            const post =  await Product.find();
            res.status(200).json(post);
        }
        catch(err){
            res.status(404).json({message : err.message});
        }
    }

    //fetch product by id 
    static async getProduct(req, res){
        const id = req.params.id;
        try{
            const post = await Product.findById(id);
            res.status(200).json(post);

        }
        catch(err){
            res.status(404).json({message : err.message});
        }
    }
    
    //add product
    static async addProduct(req, res){
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try{
            await Product.create(post);
            res.status(201).json({message : "product added"});
        }
        catch(err){
            res.status(400).json({message : err.message});
        }
    }

    //update product
    static async updateProduct(req, res){
        const id = req.params.id;
       let new_image = '';
        if(req.file){
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
         const post = req.body;
         post.image = new_image;
         
         try{
            await Product.findByIdAndUpdate(id, post);
         }
         catch(err){
            res.status().json({message : err.message});
         }


    }

    //delete product
    static async deleteProduct(req, res){
        const id  = req.params.id;
        try{
            const post = await Product.findByIdAndDelete(id);
            if(post.image != ""){
                try{
                    fs.unlinkSync('./uploads/' + post.image);
                }
                catch(err){
                    console.log(err);
                }
            }
            else{
                res.status(200).json({message : "product deleted"});
            }
        }
        catch(err){
            res.status(404).json({message : err.message});
        }
    }

}
