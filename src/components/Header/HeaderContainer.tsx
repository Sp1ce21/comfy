import { connect } from "react-redux";
import Header from "./Header";
import { setIsBasket } from '../../redux/products-reducer'
import { appStateType } from "../../redux/store";

type Props = {
    addedProducts: any
    logoStyleColor: string

    setIsBasket: (isBasket: boolean)=>void
}

const HeaderContainer: React.FC<Props> = ({ setIsBasket, addedProducts, logoStyleColor }) => {
    return (
        <Header setIsBasket={setIsBasket} addedProducts={addedProducts} logoStyleColor={logoStyleColor}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    addedProducts: state.productsPage.addedProducts
});

export default connect(mapStateToProps, { setIsBasket })(HeaderContainer);