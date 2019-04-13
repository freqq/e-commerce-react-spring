/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './ProductsListView.css'
import Product from './product/Product';
import Pagination from './pagination/Pagination';

class ProductsListView extends Component {
    render() {
        return (
            <div>
                <div className="active-filters">
                    <h3>Aktywne filtry</h3>
                    <div className="filter-category">
                        <span className="filter-category-name">Pomocne linki:</span>
                        <span className="filter-name">Szybka dostawa
                            <i className="fas fa-times"></i>
                        </span>
                        <span className="filter-name">Darmowa dostawa
                            <i className="fas fa-times"></i>
                        </span>
                        <span className="clear-all-filters">Wyczyść wszystkie</span>
                    </div>
                </div>

                <hr/>

                <div className="sort-options">
                    <select>
                        <option value="volvo">
                        Dostępność w punkcie
                        </option>
                        <option value="saab">Kraków, Aleja Pokoju 78</option>
                        <option value="mercedes">Warszawa-Białołęka, Modlińska 176</option>
                        <option value="audi">Kraków-Presto, Mogilska 97</option>
                    </select>

                    <select>
                        <option value="volvo">Sortowanie domyślne</option>
                        <option value="saab">Cena - od najnizszej</option>
                        <option value="mercedes">Cena - od najwyzszej</option>
                        <option value="audi">Po popularności</option>
                        <option value="audi">Po ocenach klientów</option>
                        <option value="audi">Po ilości komentarzy</option>
                    </select>

                    <i className="fas fa-th-large"></i>
                </div>

                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>

                <Pagination/>
            </div>
        )
    }
}

export default ProductsListView