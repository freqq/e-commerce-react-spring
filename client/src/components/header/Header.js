/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SearchBar from './search-bar/SearchBar'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img
                                src="https://www.morele.net/static/img/shop/logo/img-logo-morele.svg"
                                alt="brand-logo"/>
                        </Link>
                        <SearchBar/>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto topnav-menu">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">
                                        <div className="row display-table">
                                            <div className="col-sm-3 display-table-cell">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="col-sm-9 display-table-cell">
                                                <p>Punkty</p>
                                                <p>odbioru</p>
                                                <span className="sr-only">(current)</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <div className="row display-table">
                                            <div className="col-sm-3">
                                                <i className="fas fa-phone"></i>
                                            </div>
                                            <div className="col-sm-9 display-table-cell">
                                                Kontakt
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <div className="row display-table">
                                            <div className="col-sm-3 display-table-cell">
                                                <i className="far fa-heart"></i>
                                            </div>
                                            <div className="col-sm-9 display-table-cell">
                                                <p>Listy</p>
                                                <p>zakupowe</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link" href="#">
                                        <div className="row display-table">
                                            <div className="user display-table-cell">
                                                <i className="far fa-user"></i>
                                            </div>
                                            <div className="col-sm-12 display-table-cell">
                                                    <p>Zaloguj sie</p>
                                                    <p>Zalóż konto</p>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">
                                        <div className="row display-table">
                                            <div className="col-sm-3">
                                                <i className="fas fa-shopping-cart"></i>
                                            </div>
                                            <div className="col-sm-9 display-table-cell">
                                                0,00 zł
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header