import axios from "axios" ;
// const url1 = "https://fuoyemarket.intellicsolutions.org/api/";

export default class API {
    //create new user account 
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
    //Getting all users from server
    static async getAllUsers(){
        try {
            const res = await axios.get(url1);
            return res.data
        }
        catch (err) {
            console.log(err.message)
        }
       
    }
    
     //Get users by ID
     static async getUser(){
        const token = localStorage.getItem('token');
        const response = await axios.get ('https://fuoyemarket.intellicsolutions.org/api/profile', {
        params: {
          token: token
        }
      })
      return response.data;
    }

    //update user
    static async updateUsersById(id, post){
        const res = await axios.patch(`${url1}/${id}`, post);
        return res.data
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