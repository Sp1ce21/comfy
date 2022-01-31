import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import HeaderContainer from './components/Header/HeaderContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import { connect, } from 'react-redux'
import { appStateType } from './redux/store';
import BusketContainer from './components/Basket/BusketContainer';
import { setIsBasket } from './redux/products-reducer'
import HomeContainer from './components/Home/HomeContainer';

type Props = {
    isBasket: boolean

    setIsBasket: (isBasket: boolean) => void
}

const AppContainer: React.FC<Props> = ({ isBasket, setIsBasket }) => {
    return (
        <App isBasket={isBasket} setIsBasket={setIsBasket} />
    );
}


const App: React.FC<Props> = ({ isBasket, setIsBasket }) => {
    return (
        <div className={"wrapper" + ' ' + isBasket ? 'overflowHidden' : ''}>
            <div className='appRow'>
                <div className={isBasket ? 'blackBackGround' : ''} onClick={() => { isBasket && setIsBasket(false) }}></div>
                <Route path='/home' render={() => <HomeContainer />} />
                <div className='pages'>
                    <div className="container">
                        <HeaderContainer logoStyleColor='#000' />
                    </div>
                    <Switch>
                        <Route path='/about' render={() => <About />} />
                        <Route path='/products' render={() => <ProductsContainer />} />
                    </Switch>
                </div>

                {isBasket && <BusketContainer />}
            </div>
        </div>
    );
}




let mapStateToProps = (state: appStateType) => ({
    isBasket: state.productsPage.isBasket
});


export default connect(mapStateToProps, { setIsBasket })(AppContainer);
