import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Busket from "./Busket"
import { productsObject, setIsBasket } from '../../redux/products-reducer'

export type Props = {
    addedProducts: Array<productsObject>

    setIsBasket: (isBasket: boolean) => void
}

const BusketContainer: React.FC<Props> = ({ setIsBasket, addedProducts }) => {
    // debugger

    if (addedProducts.length !== 0) {
        localStorage.setItem('addedProducts', JSON.stringify(addedProducts));
    }
    let localStorageProducts: any = localStorage.getItem('addedProducts')
    console.log(JSON.parse(localStorageProducts))


    return (
        <Busket setIsBasket={setIsBasket} addedProducts={localStorageProducts && JSON.parse(localStorageProducts) || addedProducts } />
    )
}

let mapStateToProps = (state: appStateType) => ({
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
});

export default connect(mapStateToProps, { setIsBasket })(BusketContainer);
