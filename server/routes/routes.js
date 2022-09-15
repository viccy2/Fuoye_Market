const express = require("express");
const router = express.Router();
const multer = require('multer');
const userAPI = require('../controllers/userController');
const companyAPI = require('../controllers/companyController');
const productAPI = require('../controllers/productController');

//multer middleware
let storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './uploads');
    },
    filename : function(req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});
let upload = multer({
    storage : storage,
}).single("image");

//all user routes
//get all user
router.get("/user/", userAPI.allUser);
//get user by id
router.get("/user/:id", userAPI.getUser);
//add user route
router.post("/user/", upload, userAPI.addUser);
//add user route
router.patch("/user/:id", upload, userAPI.updateUser);
//delete user
router.delete("/user/:id", userAPI.deleteUser);

//all company routes
//fetch all company
router.get("/company/", companyAPI.allCompany);
//fetch company by id
router.get("/company/:id", companyAPI.getCompany);
//add new ompany
router.post("/company/", upload, companyAPI.newCompany);
//update company
router.patch("/company/:id", upload, companyAPI.updateCompany);
//delete company
router.delete("/company/:id", companyAPI.deleteCompany);

//fetch all products
router.get("/product/", productAPI.allProduct);
//fetch company by id
router.get("/product/:id", productAPI.getProduct);
//add new ompany
router.post("/product/", upload, productAPI.addProduct);
//update company
router.patch("/product/:id", upload, productAPI.updateProduct);
//delete company
router.delete("/product/:id", productAPI.deleteProduct);

module.exports = router;