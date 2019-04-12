/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './SearchBar.css'

class SearchBar extends Component {
    state = {
        searchText: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="search-bar-container">
                <div className="input-group">
                    <i className="fas fa-search"></i>
                    <input
                        placeholder="szukaj np. zegarek sportowy"
                        type="text"
                        className="form-control search-bar"
                        aria-label="Text input with dropdown button"/>
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">Wszystkie działy</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item active" href="#">Wszystkie działy</a>
                            <a className="dropdown-item" href="#">Komputery</a>
                            <a className="dropdown-item" href="#">RTV</a>
                            <a className="dropdown-item" href="#">Fotografia i kamery</a>
                            <a className="dropdown-item" href="#">AGD</a>
                            <a className="dropdown-item" href="#">Telefony</a>
                            <a className="dropdown-item" href="#">Biuro</a>
                            <a className="dropdown-item" href="#">Strefa Gracza</a>
                            <a className="dropdown-item" href="#">Laptopy</a>
                            <a className="dropdown-item" href="#">Muzyka</a>
                            <a className="dropdown-item" href="#">Film</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar