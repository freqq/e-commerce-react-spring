/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import product_1 from './img/1.jpg'
import product_2 from './img/2.jpg'
import './Product.css'

class Product extends Component {
  render() {
    return (
        <div className="product-info">
        <div className="row">
            <div className="col-sm-2">
                <i className="far fa-heart"></i>
                <img src={product_1} alt=""/>
                <p className="compare">
                    <i className="fas fa-balance-scale"></i>
                    dodaj do porównania
                </p>
            </div>
            <div className="col-sm-7">
                <p className="recommender-by-producent">
                    Producent poleca
                    <i className="fas fa-chevron-down"></i>
                </p>
                <p className="product-name">
                    Laptop Huawei Matebook 13 (Wright-W19A)
                </p>
                <p className="product-description">
                    Ultrabook 13" QHD IPS/i5/8GB/256GB_SSD/UHD620/USB-C/BT/Windows 10 PMG
                </p>
                <p className="product-id">
                    ID produktu: 4144283
                </p>
                <div className="product-actions">
                    <p className="featured-product-rating">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="rating-count">(3)</span>
                    </p>
                    <p className="ask-social">Zapytaj społeczności</p>
                    <p className="buy-count">Kupiły 72 osoby</p>
                </div>

                <ul className="product-details">
                    <li>Chipset karty graficznej:<span className="text-bold">Intel UHD Graphics 620</span>
                    </li>
                    <li>Pamięć RAM (zainstalowana):
                        <span className="text-bold">8 GB</span>
                    </li>
                    <li>Procesor:<span className="text-bold">Intel Core i5-8265U</span>
                    </li>
                    <li>Przekątna ekranu [cal]:
                        <span className="text-bold">13</span>
                    </li>
                    <li>System operacyjny:
                        <span className="text-bold">Windows 10 Home</span>
                    </li>
                </ul>
            </div>
            <div className="col-sm-3">
                <p className="price">3 899 zł</p>
                <p className="installment">rata od 98,96 zł</p>

                <p className="delivery-time">Dostawa na wtorek, 16 kwietnia</p>

                <a href="#" className="add-to-cart-button">Do koszyka</a>
            </div>
        </div>
    </div>
    )
  }
}

export default Product