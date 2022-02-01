import { connect } from "react-redux"
import { productsObject, setAddedProducts, getProductById } from "../../redux/products-reducer"
import { appStateType } from "../../redux/store"
import ProductItem from "./ProductItem"

export type Props = {
    product: productsObject
    isBasket: boolean
    addedProducts: any

    setAddedProducts: (product: productsObject) => void
    getProductById: (currentItemId: number) => void
}

const ProductContainer: React.FC<Props> = ({ product, isBasket, addedProducts, setAddedProducts, getProductById }) => {
    return (
        <ProductItem product={product} isBasket={isBasket} addedProducts={addedProducts} setAddedProducts={setAddedProducts} getProductById={getProductById} />
    )
}

let mapStateToProps = (state: appStateType) => ({
    products: state.productsPage.products,
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
});

export default connect(mapStateToProps, { setAddedProducts, getProductById })(ProductContainer);
