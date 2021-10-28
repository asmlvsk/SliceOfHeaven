import axios from "axios"

export const usersAPI = {
    getUser(){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    },
    
    getPage(currentPage = 1, pageSize = 6){
        return axios.get(`https://localhost:44379/Pizza?PageNumber=${currentPage}&PageSize=${pageSize}`)
        .then(response => {return response.data; });
    }
}
