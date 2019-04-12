import React, {Component} from 'react';
import Header from './components/header/Header'
import Categories from './components/categories/Categories.js'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Categories />
            </div>
        );
    }
}

export default App;
