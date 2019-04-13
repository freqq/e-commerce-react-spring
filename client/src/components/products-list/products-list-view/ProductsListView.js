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
                            <i class="fas fa-times"></i>
                        </span>
                        <span className="filter-name">Darmowa dostawa
                            <i class="fas fa-times"></i>
                        </span>
                        <span className="clear-all-filters">Wyczyść wszystkie</span>
                    </div>
                </div>

                <hr/>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

                <Pagination />
            </div>
        )
    }
}

export default ProductsListView