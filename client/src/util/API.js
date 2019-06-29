import axios from "axios"

export default {
    // LOG IN ROUTES
    getAuthId: function () {
        return axios.get("/user/user_data")
    },
    loginUser: function (data) {
        return axios.post("/user/login")
    },

    // CHILD ROUTES
    // get all specific activity for a child
    getAllSingleTypeActivities: function () {
        return axios.get("/activities/:id/:act")
    },
    // get ALL activities for a child
    getAllActivities: function () {
        return axios.get("/activities/:id")
    },
    // get ONE activity for one child
    getOneActivity: function () {
        return axios.get("/activity/:id")
    },
    // create one activity for a child
    postOneActivity: function () {
        return axios.post("/activity")
    },
    // delete one activity for a child
    deleteOneActivity: function () {
        return axios.delete("/activity/:id")
    },
    // update one activity for a child
    putOneActivity: function () {
        return axios.put("/activity/:id")
    },

    // PARENT ROUTES
    // get all children for user
    getChildren: function () {
        return axios.get("/children/:id")
    },
    // get one child
    getOneChild: function () {
        return axios.get("/child/:id")
    },
    // create one child
    postOneChild: function () {
        return axios.post("/child")
    },
    // delete one child
    deleteOneChild: function () {
        return axios.delete("/child/:id")
    },
    // update one child
    putOneChild: function () {
        return axios.put("/child/:id")
    }
    // one axios call is NOT on parent page - getting the journal entries
}
