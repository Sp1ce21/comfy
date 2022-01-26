import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Products from "./Products"
import { getProductsAC, productsObject } from '../../redux/products-reducer'
import { useEffect, useState } from "react"

type Props = {
    products: Array<productsObject>

    getProductsAC: ()=>void
}

const ProductsContainer: React.FC<Props> = ({ products, getProductsAC }) => {
    debugger
    const [condition, setCondition] = useState(true);

    useEffect(() => {
        // if (condition) {
            getProductsAC()
        //     setCondition(false)
        // }
    },[products])

    return (
        <Products products={products} />
    )
}

let mapStateToProps = (state: appStateType) => ({
    products: state.productsPage.products
});

export default connect(mapStateToProps, { getProductsAC })(ProductsContainer);
