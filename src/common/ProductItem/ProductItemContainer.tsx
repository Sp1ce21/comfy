import { connect } from "react-redux"
import { productsObject, setAddedProducts } from "../../redux/products-reducer"
import { appStateType } from "../../redux/store"
import ProductItem from "./ProductItem"

export type Props = {
    product: productsObject
    isBasket: boolean

    setAddedProducts: (product: productsObject) => void
}

const ProductContainer: React.FC<Props> = ({ product, isBasket, setAddedProducts }) => {
    return (
        <ProductItem product={product} isBasket={isBasket} setAddedProducts={setAddedProducts} />
    )
}

let mapStateToProps = (state: appStateType) => ({
    products: state.productsPage.products,
    isBasket: state.productsPage.isBasket,
});

export default connect(mapStateToProps, { setAddedProducts })(ProductContainer);
