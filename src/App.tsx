import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import HeaderContainer from './components/Header/HeaderContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import { connect, } from 'react-redux'
import { appStateType } from './redux/store';
import BusketContainer from './components/Basket/BusketContainer';
import { setIsBasket, getProductsAC, setAddedProductsFromLocalStorage } from './redux/products-reducer'
import HomeContainer from './components/Home/HomeContainer';
import ItemPageContainer from './components/ItemPage/ItemPageContainer';

type PropsContainer = {
    isBasket: boolean
    addedProducts: any
    currentItemId: any

    setIsBasket: (isBasket: boolean) => void
    getProductsAC: () => void
    setAddedProductsFromLocalStorage: (addedProducts: any) => void
}

const AppContainer: React.FC<PropsContainer> = ({ isBasket, addedProducts, currentItemId, setIsBasket, getProductsAC, setAddedProductsFromLocalStorage }) => {

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

type Props = {
    isBasket: boolean
    currentItemId: any

    setIsBasket: (isBasket: boolean) => void
}

const App: React.FC<Props> = ({ isBasket, currentItemId, setIsBasket }) => {
    return (
        <div className={"wrapper" + ' ' + isBasket ? 'overflowHidden' : ''}>
            <div className='appRow'>
                <div className={isBasket ? 'blackBackGround' : ''} onClick={() => { isBasket && setIsBasket(false) }}></div>
                <Switch>
                    <Route path='/home' render={() => <HomeContainer />} />
                    <div className='pages'>
                        <div className="container">
                            <HeaderContainer logoStyleColor='#000' />
                        </div>
                        <Switch>
                            <Route path='/about' render={() => <About />} />
                            <Route path='/products' exact render={() => <ProductsContainer />} />
                            <Route path={`/products/${currentItemId}`} exact render={() => <ItemPageContainer />} />
                        </Switch>
                    </div>
                </Switch>
                {isBasket && <BusketContainer />}
            </div>
        </div>
    );
}




let mapStateToProps = (state: appStateType) => ({
    isBasket: state.productsPage.isBasket,
    addedProducts: state.productsPage.addedProducts,
    currentItemId: state.productsPage.currentItemId,
});


export default connect(mapStateToProps, { setIsBasket, getProductsAC, setAddedProductsFromLocalStorage })(AppContainer);
