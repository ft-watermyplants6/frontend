import axios from "axios"
import axiosWithAuth from "../utils/axiosWithAuth"

export const getPlants = () => {
    return axiosWithAuth().get(`https://ft-watermyplants-1.herokuapp.com`)
}