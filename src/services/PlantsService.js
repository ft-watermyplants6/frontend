import axios from "axios"

export const getPlants = () => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/`)
}