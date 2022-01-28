import { connect } from "react-redux";
import Header from "./Header";
import { setIsBasket } from '../../redux/products-reducer'
import { appStateType } from "../../redux/store";

export type Props = {
    addedProducts: any

    setIsBasket: (isBasket: boolean)=>void
}

const HeaderContainer: React.FC<Props> = ({ setIsBasket, addedProducts }) => {
    return (
        <Header setIsBasket={setIsBasket} addedProducts={addedProducts}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    addedProducts: state.productsPage.addedProducts
});

export default connect(mapStateToProps, { setIsBasket })(HeaderContainer);