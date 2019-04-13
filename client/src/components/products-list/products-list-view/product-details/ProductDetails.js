import React, {Component} from 'react'
import './ProductDetails'
import ProductDetailsMain from './product-details-main/ProductDetailsMain';
import AddToCart from './add-to-cart/AddToCart';
import ProductDescription from './product-description/ProductDescription';

class ProductDetails extends Component {
    render() {
        return (
            <div className="product-details-page-container container-fluid">
                <div className="row">
                    <div className="col-sm-9">
                        <ProductDetailsMain />
                        <ProductDescription />
                    </div>
                    <div className="col-sm-3 add-to-cart-container">
                        <AddToCart />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails