import { connect } from "react-redux";
import { productsObject, getProductById } from "../../redux/products-reducer";
import { appStateType } from "../../redux/store";
import ItemPage from "./ItemPage";

type Props = {
    currentItem: productsObject
    currentItemId: number | null
    isFetching: boolean

    getProductById: (currentItemId: number) => void
}

const ItemPageContainer: React.FC<Props> = ({ currentItem, currentItemId, isFetching, getProductById }) => {
    let newCurrentItemId: number;
    if (currentItemId) {
        getProductById(currentItemId)
    }
    else {
        let link: any = document.location.pathname
        newCurrentItemId = parseInt(link.match(/\d+/))
        getProductById(newCurrentItemId)
    }

    return (
        <ItemPage currentItem={currentItem} isFetching={isFetching}/>
    )
}

let mapStateToProps = (state: appStateType) => ({
    currentItem: state.productsPage.currentItem,
    currentItemId: state.productsPage.currentItemId,
    isFetching: state.productsPage.isFetching,
});

export default connect(mapStateToProps, { getProductById })(ItemPageContainer);