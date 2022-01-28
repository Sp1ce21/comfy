import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Busket from "./Busket"
import { productsObject, setIsBasket, setAddedProductsFromLocalStorage } from '../../redux/products-reducer'

type Props = {
    addedProducts: Array<productsObject>

    setIsBasket: (isBasket: boolean) => void
    setAddedProductsFromLocalStorage: (addedProducts: any) => void
}

const BusketContainer: React.FC<Props> = ({ setIsBasket, addedProducts, setAddedProductsFromLocalStorage }) => {
    debugger

    let productsFromLocalStorage: any = localStorage.getItem('addedProducts');
    let ownAddedProducts: any = JSON.parse(productsFromLocalStorage)
    if (addedProducts.length !== 0) {
        localStorage['addedProducts'] = JSON.stringify(addedProducts);
    }
    else {
        if (ownAddedProducts) {
            setAddedProductsFromLocalStorage(ownAddedProducts)
        }
    }

    return (
        <Busket setIsBasket={setIsBasket} addedProducts={addedProducts} />
    )
}

let mapStateToProps = (state: appStateType) => ({
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
});

export default connect(mapStateToProps, { setIsBasket, setAddedProductsFromLocalStorage })(BusketContainer);
