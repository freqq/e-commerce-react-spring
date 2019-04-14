import React, {Component} from 'react';
import Header from './components/header/Header'
import Categories from './components/categories/Categories'
import BelowCategoriesContent from './components/below-categories/BelowCategoriesContent'
import OverFooterText from './components/over-footer-text/OverFooterText'
import Footer from './components/footer/Footer'
import ProductsList from './components/products-list/ProductsList'
import './App.css';
import UnderTopNavbarMenu from './components/categories/under-top-navbar-menu/UnderTopNavbarMenu';
import ProductDetails from './components/products-list/products-list-view/product-details/ProductDetails';
import Login from './components/user/login/Login';
import Cart from './components/cart/Cart';

class App extends Component {
    render() {
        return (
            <div className="App">
               <Header />
               <UnderTopNavbarMenu />
                <Cart />
            </div>
        );
    }
}

export default App;
