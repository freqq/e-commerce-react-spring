/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './AddToCart.css'

class AddToCart extends Component {
    render() {
        return (
            <div className="add-to-cart-container">
                <p className="delivery-time">Dostawa lub odbiór na wtorek, 16 kwietnia</p>
                <p className="price">3899 zł</p>
                <div className="avaible-part">
                    <p>Dostępnych 10 szt.</p>
                    <p>rata od 98,96 zł</p>
                </div>
                <div className="add-to-cart-form">
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <a href="#" className="add-to-cart-button-right">Do koszyka</a>
                </div>
                <div className="product-ask">
                    <span><i className="far fa-comments"></i> Zapytaj o produkt</span>
                    <span><i className="fas fa-headset"></i> Czat na zywo</span>
                </div>
            </div>
        )
    }
}

export default AddToCart