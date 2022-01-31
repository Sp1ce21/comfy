import axios from "axios";


const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
});

export const productsAPI = {
    getProducts() {
        return instance.get('products')
    },
    getCategories(){
        return instance.get('products/categories')
    },
    getProductById(productId: number){
        return instance.get(`products/${productId}`)
    },
}

