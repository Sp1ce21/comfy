import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Busket from "./Busket"
import {productsObject, setIsBasket } from '../../redux/products-reducer'

export type Props = {
    addedProducts: Array<productsObject>

    setIsBasket: (isBasket: boolean)=>void
}

const BusketContainer: React.FC<Props> = ({ setIsBasket, addedProducts }) => {
    // debugger
    return (
        <Busket setIsBasket={setIsBasket} addedProducts={addedProducts}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
});

export default connect(mapStateToProps, { setIsBasket })(BusketContainer);
