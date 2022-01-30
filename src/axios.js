import axios from 'axios'

const instance = axios.create({
    //localhost para testes
    //baseURL: "http://localhost:9000/" 
    baseURL: "https://tiktok-back-test.herokuapp.com/"
});

export default instance
