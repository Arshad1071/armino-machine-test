import axios from 'axios'
// import { getBaseUrl } from '../utils/helpers';

//////creating axios instance
const instance = axios.create({
    baseURL: "http://localhost:5000",
})

instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.common['Authorization'] = `Bearer ${GetToken()}`;


instance.interceptors.request.use(
    (req) => {
        if (req.url.includes('work-order/signature')) {
            req.headers = { Authorization: `Bearer ${GetToken()}`, 'Accept': 'application/json', 'content-type': 'multipart/form-data' };
            return req;
        }
        return req;
    },
    (error) => {
        return Promise.reject(error);
    });

instance.interceptors.response.use((response) => {
    return response;
}, (err) => {
    if (err.response.status === 401) {
        localStorage.removeItem("authData")
        console.log('token expired message');
        alert('token expired');
        window.location.reload()
        return
    }
    return Promise.reject(err);
});

export default instance


function GetToken() {
    let tokenData = localStorage.getItem("authData") ? JSON.parse(localStorage.getItem("authData")) : null
    return tokenData?.token;
}
