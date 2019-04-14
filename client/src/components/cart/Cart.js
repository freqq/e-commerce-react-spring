/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './Cart.css'
import ProductCart from './product-cart/ProductCart';
import Delivery from './delivery/Delivery';
import Payment from './payment/Payment';

class Cart extends Component {
    state = {
        products: [2]
    }

    noProducts = () => {
        return (
            <div className="cart-container">
                <h3>Twój koszyk (0)</h3>
                <hr/>
                <div className="no-products-cart">
                    <h2>Nie znaleźliśmy żadnych produktów w Twoim koszyku!</h2>
                    <p className="back-home">Wróć na
                        <span class="text-blue">
                            stronę główną
                        </span>by kontynuować zakupy
                    </p>
                    <p className="back-home">
                        albo sprawdź swoje
                        <span class="text-blue">listy zakupowe.
                        </span>
                    </p>

                    <p className="empty-cart">
                        Twój koszyk powinien być pełen? Koszyk może zostać wyczyszczony po 30 dniach
                        nieobecności na naszej stronie lub przy zmianie przeglądarki.

                    </p>
                    <p className="back-home">
                        Jeśli Ciebie nie dotyczy żaden z tych przypadków a jednak koszyk został
                        wyczyszczony,
                        <span class="text-blue">zgłoś błąd.</span>
                    </p>
                </div>

            </div>
        )
    }

    renderCart = () => {
        const {products} = this.state
        return (
            <div className="cart-with-products">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="main-cart-side">
                            <div className="cart-top">
                                <h3>Twój koszyk ({products.length})</h3>
                                <div className="float-right cart-options">
                                    <span>
                                        <i class="far fa-heart"></i>
                                        Zapisz koszyk</span>
                                    <span>
                                        <i class="fas fa-times"></i>
                                        Wyczyść wszystko</span>
                                </div>
                            </div>

                            <hr/>

                            <ProductCart/>
                            <ProductCart/>

                            <p className="main-cart-price">Wartość produktów
                                <span className="big-price">4608 zł</span>
                            </p>
                        </div>

                        <Delivery/>

                        <Payment />
                    </div>
                    <div className="col-sm-4">
                        <div className="cart-right-side main-delivery">
                            <div className="cart-right-category">
                                <span>Dostawa:
                                </span>
                                <span className="delivery-choose">Wybierz</span>
                            </div>
                            <div className="cart-right-category">
                                <span>Wartość produktów:
                                </span>
                                <span className="float-right">709 zł</span>
                            </div>
                            <hr/>
                            <div className="cart-summ-up-right">
                                <span>Łącznie</span>
                                <span className="float-right">709 zł</span>
                            </div>
                            <a href="#" className="move-on-button">Przejdz dalej</a>
                        </div>

                        <div className="cart-right-side">
                            <p className="cart-right-side-heading">
                                Dodaj kod rabatowy
                            </p>
                        </div>

                        <div className="cart-right-side">
                            <p className="cart-right-side-heading">
                                Dodaj kartę podarunkową
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const {products} = this.state
        return (
            <div className="container-fluid">
                {products.length === 0
                    ? this.noProducts()
                    : this.renderCart()}
            </div>
        )
    }
}

export default Cart