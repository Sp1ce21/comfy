import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Products from "./Products"
import { getProductsAC } from '../../redux/products-reducer'
import { useEffect, useState } from "react"

type Props = {
    products: Array<any>

    getProductsAC: any
}

const ProductsContainer: React.FC<Props> = ({ products, getProductsAC }) => {
    debugger
    const [condition, setCondition] = useState(true);

    useEffect(() => {
        if (condition) {
            getProductsAC()
            setCondition(false)
        }
    })

    // getProductsAC()

    return (
        <Products products={products} />
    )
}

let mapStateToProps = (state: appStateType) => ({
    products: state.productsPage.products
});

export default connect(mapStateToProps, { getProductsAC })(ProductsContainer);
