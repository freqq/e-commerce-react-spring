import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/main-page/MainPage';
import Login from './components/user/login/Login'
import ForgotPassword from './components/user/forgot-password/ForgotPassword';
import Cart from './components/cart/Cart'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path="/cart" component={Cart} />
                </div>
            </Router>
        );
    }
}

export default App;
