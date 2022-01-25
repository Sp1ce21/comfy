import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import HeaderContainer from './components/Header/HeaderContainer';
import ProductsContainer from './components/Products/ProductsContainer';
import { Provider } from 'react-redux'
import store from './redux/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="wrapper">
                <div>
                    <div className="container">
                        <HeaderContainer />
                    </div>
                    <Switch>
                        <Route path='/about' render={() => <About />} />
                        <Route path='/products' render={() => <ProductsContainer />} />
                    </Switch>
                </div>
            </div>
        </Provider>
    );
}

export default App;
