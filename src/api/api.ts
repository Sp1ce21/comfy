import axios from "axios";


const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://fakestoreapi.com/',
    // headers: {
    //     "API-KEY": "f4ea8b1d-9745-41a8-9bd9-42869dcd4740"
    // }
});

export const productsAPI = {
    getProducts() {
        return instance.get('products/1')
    },
}
