import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Products from "./Products"
import { getProductsAC, getCategoriesAC, productsObject, setAddedProducts, setAddedProductsFromLocalStorage } from '../../redux/products-reducer'
import { useEffect, useState } from "react"

type Props = {
    products: Array<productsObject>
    search: string
    price: number
    currentCategory: string
    addedProducts: any
    isFetching: boolean

    getCategoriesAC: () => void
}

const ProductsContainer: React.FC<Props> = ({ products, getCategoriesAC, search, price, currentCategory, addedProducts, isFetching}) => {

    let [needCategories, setNeedCategories] = useState(true)

    useEffect(() => {
        if (needCategories) {
            getCategoriesAC()
            setNeedCategories(false)
        }
    }, [search, price])

    let filteredWithPriceProducts = products.filter((item => item.price < price))

    var filteredWithCategoryProducts
    if (currentCategory === 'All') {
        filteredWithCategoryProducts = filteredWithPriceProducts
    }
    else {
        filteredWithCategoryProducts = filteredWithPriceProducts.filter((item => item.category === currentCategory))
    }

    let filteredProducts = filteredWithCategoryProducts.filter((item => item.title.toLowerCase().includes(search.toLowerCase())))


    return (
        <Products products={filteredProducts} addedProducts={addedProducts} isFetching={isFetching}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    products: state.productsPage.products,
    search: state.productsPage.search,
    price: state.productsPage.price,
    maxPrice: state.productsPage.maxPrice,
    currentCategory: state.productsPage.currentCategory,
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
    isFetching: state.productsPage.isFetching
});

export default connect(mapStateToProps, { getProductsAC, getCategoriesAC, setAddedProducts, setAddedProductsFromLocalStorage })(ProductsContainer);
