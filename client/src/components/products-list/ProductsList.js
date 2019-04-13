import React, {Component} from 'react'
import Breadcrumbs from './breadcrumbs/Breadcrumbs'
import ProductsFilters from './products-filters/ProductsFilters'
import ProductsListView from './products-list-view/ProductsListView'

import './ProductsList.css'

class ProductsList extends Component {
    render() {
        return (
            <div className="products-list container-fluid">
            <Breadcrumbs />
                <div className="row">
                    <div className="col-sm-2">
                        <ProductsFilters />
                    </div>
                    <div className="col-sm-10">
                        <ProductsListView />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsList
