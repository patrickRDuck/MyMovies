import Axios from "axios"

export const axios = Axios.create({
    baseURL: "https://backend-mymovies.onrender.com"
})