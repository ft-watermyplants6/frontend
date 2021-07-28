import axios from 'axios'

const axiosWithAuth = () => {
    const token =  localStorage.getItem('token')
    return axios.create({
        baseURL:'https://ft-watermyplants-1.herokuapp.com',
        headers: {
            authorization: token
        }
    })
}

export default axiosWithAuth