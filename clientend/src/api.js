import axios from "axios" ;
// const url1 = "api/";
// const url2 = "/app/api/company";

export default class API {
    //create new user account 
    static async newUser(post){
        try{
            const res = await axios.post('http://fuoyemarket.afolabisalawu.com/api/authregister', post);
            return res.data;
            
        }
        catch(err){
            console.log(err)
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
     static async getUsersById(id){
        const res = await axios.get(`${url1}/${id}`);
        return res.data
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