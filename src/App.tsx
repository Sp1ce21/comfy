import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import HeaderContainer from './components/Header/HeaderContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import BusketContainer from './components/Basket/BusketContainer';
import HomeContainer from './components/Home/HomeContainer';
import ItemPageContainer from './components/ItemPage/ItemPageContainer';
import LoginContainer from './components/Login/LoginContainer';

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
                            <Route path='/login' render={() => <LoginContainer />} />
                        </Switch>
                    </div>
                </Switch>
                {isBasket && <BusketContainer />}
            </div>
        </div>
    );
}

export default App;
