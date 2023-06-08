import axios from "axios" ;
const API_URL = "https://fuoyemarket.intellicsolutions.org/api";

export default class API {

    //user sign up method
    static async createUser(post){
        try{
            const response = await axios.post(`${API_URL}/authregister`, post);
            return response.data;           
        }
        catch(error){
            const errors = Object.values(error.response.data.msg);
            return 'Registration failed : ' + errors;
        }
    }

    //user sign in method
    static async loginUser(post){
        try{
            const response = await axios.post(`${API_URL}/login`, post);
            return response.data;           
        }
        catch(error){
             const errors = error.response.data.errors[0].message;
             return 'Login failed : ' + errors;
        }
    }

     //fetch user by token method / signedin-user
     static async getUser(){
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_URL}/profile`, {
            params: {
            token: token
            }
        })
        return response.data;
        }
        catch(err){
            console.log(err)
        }
        
    }

    //fetch seller by token method / signedin-seller
    static async getSeller(){
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_URL}/seller/profile`, {
            params: {
            token: token
            }
        })
        return response.data;
        }
        catch(err){
            console.log(err)
        }
        
    }

    //update  seller
    static async updateUser(post){
        try{
            const response = await axios.post(`${API_URL}/seller/update-profile`, post);
            return response.data;           
        }
        catch(err){
            console.log(err)
        }
    }

    //fetch all sellers
    static async allSellers(){
        try{
            const response = await axios.get(`${API_URL}/general/sellers`, {
        })
        return response.data;
        }
        catch(err){
            console.log(err)
        }
        
    }

    //fetch all new sellers
    static async newSellers(){
        try{
            const response = await axios.get(`${API_URL}/general/new-sellers`, {
        })
        return response.data;
        }
        catch(err){
            console.log(err)
        }
        
    }

    //fetch all top sellers
    static async topSellers(){
        try{
            const response = await axios.get(`${API_URL}/general/top-sellers`, {
        })
        return response.data;
        }
        catch(err){
            console.log(err)
        }
        
    }


    //create  new product
    static async createProduct(post){
        try{
            const response = await axios.post(`${API_URL}/seller/create-product`, post);
            return response.data;
        }
        catch(err){
            console.log(err)
        }
    }

    //create  new service
    static async createService(post){
        try{
            const response = await axios.post(`${API_URL}/seller/create-service`, post);
            return response.data;
        }
        catch(err){
            console.log(err)
        }
    }
     //edit product
     static async editProduct(post){
        try{
            const response = await axios.post(`${API_URL}/seller/edit-product-service`, post);
            return response.data;           
        }
        catch(err){
            console.log(err)
        }
    }
    //edit service
    static async editService(post){
        try{
            const response = await axios.post(`${API_URL}/seller/edit-product-service`, post);
            return response.data;           
        }
        catch(err){
            console.log(err)
        }
    }

    //fetch all categories
    static async getCategory(){
        try{
            const response = await axios.get(`${API_URL}/categories`, {
        })
        return response.data;
        }
        catch(err){
            console.log(err)
        }
        
    }

    //fetch all products
    static async allProducts(){
        try{
            const response = await axios.get(`${API_URL}/general/products?type=Product`,{
        })
        return response.data;
        }
        catch(err){
            console.log(err)
        }
    }

     //fetch new products
     static async newProducts(){
        try{
            const response = await axios.get(`${API_URL}/general/latest-products`,{
        })
        return response.data;
        }
        catch(err){
            console.log(err)
        }
    }

    //fetch all service 
    static async allServices(){
        try{
            const response = await axios.get(`${API_URL}/general/products?type=Service`,{
             })
             return response.data;
        }
        catch(err){
            console.log(err)
        }
    }


    // fetch product details
    static async productDetails(id){
        try{
            const response = await axios.get(`${API_URL}/general/product-details?product_id=${id}`);
            return response.data;           
        }
        catch(err){
            console.log(err)
        }
    }
    
    // fetch service details
    static async serviceDetails(id){
        try{
            const response = await axios.get(`${API_URL}/general/product-details?product_id=${id}`);
            return response.data;           
        }
        catch(err){
            console.log(err)
        }
    }

    static async sellerDetails(id){
        try{
            const response = await axios.get(`${API_URL}/general/seller-details?seller_id=${id}`);
            return response.data;           
        }
        catch(err){
            console.log(err)
        }
    }

     //forgot password
     static async forgotPWD(post){
        try{
            const response = await axios.post(`${API_URL}/forgot_password`, post);
            return response.data;           
        }
        catch(err){
            console.log(err)
        }
    }

    //reset password
    static async newPWD(post){
        try{
            const response = await axios.post(`${API_URL}/reset_password`, post);
            return response.data;           
        }
        catch(err){
            console.log(err)
        }
    }

}