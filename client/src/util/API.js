import axios from "axios"

export default {
    getAuthId: function(){
        return axios.get("/user/user_data")
    },
    loginUser: function(data){
        return axios.post("/user/login")
    }
}