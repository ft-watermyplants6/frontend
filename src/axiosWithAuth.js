import axios from "axios";
  
export const axiosWithAuth = () => {
  return axios.create({
    baseURL:'https://wmp-api.herokuapp.com',
    headers: {
      Authorization: window.localStorage.getItem("token"),
    }
  });
};