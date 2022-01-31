import { useEffect } from "react"
import { connect } from "react-redux"
import { productsObject, setAddedProducts } from "../../redux/products-reducer"
import { appStateType } from "../../redux/store"
import ProductItem from "./ProductItem"

export type Props = {
    product: productsObject
    isBasket: boolean
    addedProducts: any

    setAddedProducts: (product: productsObject) => void
}

const ProductContainer: React.FC<Props> = ({ product, isBasket, addedProducts, setAddedProducts }) => {


    return (
        <ProductItem product={product} isBasket={isBasket} setAddedProducts={setAddedProducts} addedProducts={addedProducts}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    products: state.productsPage.products,
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
});

export default connect(mapStateToProps, { setAddedProducts })(ProductContainer);
