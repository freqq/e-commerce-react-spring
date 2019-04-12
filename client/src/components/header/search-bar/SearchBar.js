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
            <div>
                <input
                    placeholder="szukaj np. zegarek sportowy"
                    className="form-control search-bar"
                    type="text"
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onChange}/>
            </div>
        )
    }
}

export default SearchBar