import React, { useEffect, useState } from 'react';
import { connect, } from 'react-redux'
import { appStateType } from './redux/store';
import { setIsBasket, getProductsAC, setAddedProductsFromLocalStorage } from './redux/products-reducer'
import App from './App';

type Props = {
    isBasket: boolean
    addedProducts: any
    currentItemId: any

    setIsBasket: (isBasket: boolean) => void
    getProductsAC: () => void
    setAddedProductsFromLocalStorage: (addedProducts: any) => void
}

const AppContainer: React.FC<Props> = ({ isBasket, addedProducts, currentItemId, setIsBasket, getProductsAC, setAddedProductsFromLocalStorage }) => {

    let [needProducts, setNeedProducts] = useState(true)

    useEffect(() => {
        if (needProducts) {
            getProductsAC()
            setNeedProducts(false)
        }

    })

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

    let newCurrentItemId: number;
    if (currentItemId) {
        newCurrentItemId = currentItemId
    }
    else {
        let link: any = document.location.pathname
        newCurrentItemId = parseInt(link.match(/\d+/))
    }


    return (
        <App isBasket={isBasket} setIsBasket={setIsBasket} currentItemId={newCurrentItemId} />
    );
}


let mapStateToProps = (state: appStateType) => ({
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
    currentItemId: state.productsPage.currentItemId,
});


export default connect(mapStateToProps, { setIsBasket, getProductsAC, setAddedProductsFromLocalStorage })(AppContainer);
