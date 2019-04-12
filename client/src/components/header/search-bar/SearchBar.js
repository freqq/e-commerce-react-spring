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
                <div class="input-group">
                    <i class="fas fa-search"></i>
                    <input
                        placeholder="szukaj np. zegarek sportowy"
                        type="text"
                        class="form-control search-bar"
                        aria-label="Text input with dropdown button"/>
                    <div class="input-group-append">
                        <button
                            class="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">Wszystkie działy</button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <a class="dropdown-item active" href="#">Wszystkie działy</a>
                            <a class="dropdown-item" href="#">Komputery</a>
                            <a class="dropdown-item" href="#">RTV</a>
                            <a class="dropdown-item" href="#">Fotografia i kamery</a>
                            <a class="dropdown-item" href="#">AGD</a>
                            <a class="dropdown-item" href="#">Telefony</a>
                            <a class="dropdown-item" href="#">Biuro</a>
                            <a class="dropdown-item" href="#">Strefa Gracza</a>
                            <a class="dropdown-item" href="#">Laptopy</a>
                            <a class="dropdown-item" href="#">Muzyka</a>
                            <a class="dropdown-item" href="#">Film</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar