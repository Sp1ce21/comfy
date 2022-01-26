import { connect } from "react-redux"
import { appStateType } from "../../redux/store"
import Busket from "./Busket"
import {setIsBasket } from '../../redux/products-reducer'

export type Props = {
    setIsBasket: (isBasket: boolean)=>void
}

const BusketContainer: React.FC<Props> = ({ setIsBasket }) => {

    return (
        <Busket setIsBasket={setIsBasket}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    isBasket: state.productsPage.isBasket
});

export default connect(mapStateToProps, { setIsBasket })(BusketContainer);
