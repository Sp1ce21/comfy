import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Products from "./Products"
import { getProductsAC, getCategoriesAC, productsObject, getProductByIdAC } from '../../redux/products-reducer'
import { useEffect, useState } from "react"

type Props = {
    products: Array<productsObject>
    search: string
    price: number
    currentCategory: string
    isBasket: boolean

    getProductsAC: () => void
    getCategoriesAC: () => void
    getProductByIdAC: (productId: number) => void
}

const ProductsContainer: React.FC<Props> = ({ products, getProductsAC, getCategoriesAC, search, price, currentCategory, isBasket, getProductByIdAC }) => {

    let [needProducts, setNeedProducts] = useState(true)
    let [needCategories, setNeedCategories] = useState(true)

    useEffect(() => {
        if (needProducts) {
            getProductsAC()
            setNeedProducts(false)
        }
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
        <Products products={filteredProducts} isBasket={isBasket} getProductByIdAC={getProductByIdAC}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    products: state.productsPage.products,
    search: state.productsPage.search,
    price: state.productsPage.price,
    maxPrice: state.productsPage.maxPrice,
    currentCategory: state.productsPage.currentCategory,
    isBasket: state.productsPage.isBasket,
});

export default connect(mapStateToProps, { getProductsAC, getCategoriesAC, getProductByIdAC })(ProductsContainer);
