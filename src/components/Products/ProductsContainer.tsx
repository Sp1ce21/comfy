import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Products from "./Products"
import { getProductsAC, productsObject } from '../../redux/products-reducer'
import { useEffect, useState } from "react"

type Props = {
    products: Array<productsObject>
    search: string
    price: number

    getProductsAC: () => void
}

const ProductsContainer: React.FC<Props> = ({ products, getProductsAC, search, price }) => {
    console.log('rendered')

    let [needProducts, setNeedProducts] = useState(true)

    useEffect(() => {
        if(needProducts){
        getProductsAC()
        setNeedProducts(false)
        }
    })
    useEffect(() => {
    }, [search, price])
    let filteredWithPriceProducts = products.filter((item => item.price < price))
    let filteredProducts = filteredWithPriceProducts.filter((item => item.title.toLowerCase().includes(search.toLowerCase())))
    return (
        <Products products={filteredProducts} />
    )
}

let mapStateToProps = (state: appStateType) => ({
    products: state.productsPage.products,
    search: state.productsPage.search,
    price: state.productsPage.price,
    maxPrice: state.productsPage.maxPrice
});

export default connect(mapStateToProps, { getProductsAC })(ProductsContainer);
