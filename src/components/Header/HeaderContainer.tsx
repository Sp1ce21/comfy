import { connect } from "react-redux";
import Header from "./Header";
import { setIsBasket } from '../../redux/products-reducer'
import { appStateType } from "../../redux/store";

export type Props = {
    setIsBasket: (isBasket: boolean)=>void
}

const HeaderContainer: React.FC<Props> = ({ setIsBasket }) => {
    return (
        <Header setIsBasket={setIsBasket} />
    )
}

let mapStateToProps = (state: appStateType) => ({
});

export default connect(mapStateToProps, { setIsBasket })(HeaderContainer);