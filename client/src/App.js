import React, {Component} from 'react';
import Header from './components/header/Header'
import Categories from './components/categories/Categories'
import BelowCategoriesContent from './components/below-categories/BelowCategoriesContent'
import OverFooterText from './components/over-footer-text/OverFooterText'
import Footer from './components/footer/Footer'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Categories />
                <BelowCategoriesContent />
                <OverFooterText />
                <Footer />
            </div>
        );
    }
}

export default App;
