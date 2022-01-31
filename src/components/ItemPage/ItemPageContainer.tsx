import { useEffect } from "react";
import { connect } from "react-redux";
import { productsObject, getProductById } from "../../redux/products-reducer";
import { appStateType } from "../../redux/store";
import ItemPage from "./ItemPage";

type Props = {
    currentItem: productsObject
    currentItemId: number | null

    getProductById: (currentItemId: number) => void
}

const ItemPageContainer: React.FC<Props> = ({ currentItem, currentItemId, getProductById }) => {
debugger
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
        <ItemPage />
    )
}

let mapStateToProps = (state: appStateType) => ({
    currentItem: state.productsPage.currentItem,
    currentItemId: state.productsPage.currentItemId,
});

export default connect(mapStateToProps, { getProductById })(ItemPageContainer);