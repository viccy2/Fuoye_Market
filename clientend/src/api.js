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

    //update user / seller
    static async updateUser(post){
        try{
            const response = await axios.post(`${API_URL}/seller/update-profile`, post);
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

}