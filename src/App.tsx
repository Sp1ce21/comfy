import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import HeaderContainer from './components/Header/HeaderContainer';
import Products from './components/Products/Products';

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <div>
                <div className="container">
                    <HeaderContainer />
                </div>
                <Switch>
                    <Route path='/about' render={() => <About />} />
                    <Route path='/products' render={() => <Products/>} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
