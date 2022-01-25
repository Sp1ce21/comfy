import { connect } from "react-redux"
import { appStateType } from '../../../redux/store'
// import Products from "./Products"
// import { getProductsAC, productsObject } from '../../redux/products-reducer'
import Filter from "./Filter"

type Props = {
    // products: Array<productsObject>

    // getProductsAC: ()=>void
}

const ProductsContainer: React.FC<Props> = () => {
    return (
        <Filter/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    // products: state.productsPage.products
});

export default connect(mapStateToProps, { })(ProductsContainer);
