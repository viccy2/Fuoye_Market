import axios from "axios" ;
// const url1 = "https://fuoyemarket.intellicsolutions.org/api/";

export default class API {

    //user sign up method
    static async createUser(post){
        try{
            const response = await axios.post('https://fuoyemarket.intellicsolutions.org/api/authregister', post);
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
            const response = await axios.post('https://fuoyemarket.intellicsolutions.org/api/login', post);
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
            const response = await axios.get ('https://fuoyemarket.intellicsolutions.org/api/profile', {
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
            const response = await axios.get ('https://fuoyemarket.intellicsolutions.org/api/seller/profile', {
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
            const response = await axios.post('https://fuoyemarket.intellicsolutions.org/api/seller/update-profile', post);
            return response.data;           
        }
        catch(err){
            console.log(err)
        }
        // const res = await axios.patch(`${url1}/${id}`, post);
        // return res.data
    }

    //delete user
    static async deleteUser(id){
        const res = await axios.delete(`${url1}/${id}`);
        return res.data;
    }

    //Get all company 
    static async getAllCompany(){
        try{
            const res = await axios.get(url2);
            return res.data
        }
        catch(err){
            console.log(err);
        }
    }
    //Get company by ID
    static async getCompanyByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data
    }
}