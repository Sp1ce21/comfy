import { useEffect } from "react"
import { connect } from "react-redux"
import { productsObject, setIsAllProducts } from "../../redux/products-reducer"
import { appStateType } from "../../redux/store"
import Home from "./Home"

type Props = {
    products: Array<productsObject>
    isAllProducts: boolean
    isFetching: boolean

    setIsAllProducts: () => void
}

const HomeContainer: React.FC<Props> = ({ products, isAllProducts, isFetching, setIsAllProducts }) => {

    return (
        <Home products={isAllProducts ? products : products.slice(0, 3)} setIsAllProducts={setIsAllProducts} isFetching={isFetching} />
    )
}

let mapStateToProps = (state: appStateType) => ({
    products: state.productsPage.products,
    isAllProducts: state.productsPage.isAllProducts,
    isFetching: state.productsPage.isFetching
});

export default connect(mapStateToProps, { setIsAllProducts })(HomeContainer);
