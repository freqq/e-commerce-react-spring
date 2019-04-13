/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import './ProductDetailsMain.css'

import big_1 from './img/original/1.jpg'
import big_2 from './img/original/2.jpg'
import big_3 from './img/original/3.jpg'
import big_4 from './img/original/4.jpg'
import big_5 from './img/original/5.jpg'
import big_6 from './img/original/6.jpg'
import small_1 from './img/small/1.jpg'
import small_2 from './img/small/2.jpg'
import small_3 from './img/small/3.jpg'
import small_4 from './img/small/4.jpg'
import small_5 from './img/small/5.jpg'
import small_6 from './img/small/6.jpg'

class ProductDetailsMain extends Component {
    render() {
        return (
            <div className="product-details-main-container">
                <div className="row">
                    <div className="col-sm-8 roduct-details-main-left">

                        <div className="sp-wrap">
                            <a href={big_1}><img src={small_1} alt=""/></a>
                            <a href={big_2}><img src={small_2} alt=""/></a>
                            <a href={big_3}><img src={small_3} alt=""/></a>
                            <a href={big_4}><img src={small_4} alt=""/></a>
                            <a href={big_5}><img src={small_5} alt=""/></a>
                        </div>

                    </div>
                    <div className="col-sm-4 product-details-main-right">
                        <span className="add-to-comparsion">
                            <i className="fas fa-balance-scale"></i>
                            dodaj do porównania
                        </span>

                        <p className="product-name">
                            Laptop Huawei Matebook 13 (Wright-W19A)
                        </p>
                        <p className="product-description">
                            Ultrabook 13" QHD IPS/i5/8GB/256GB_SSD/UHD620/USB-C/BT/Windows 10 PMG
                        </p>
                        <p className="product-id">ID produktu: 4144283</p>
                        <div className="item-actions">
                            <span>Oceń jako pierwszy</span>
                            <span>Zapytaj społeczność</span>
                            <span>Kupiło 14 osób</span>
                        </div>

                        <ul className="product-specificaton">
                            <li>Chipset karty graficznej:
                                <span className="text-bold">Intel UHD Graphics 620</span>
                            </li>
                            <li>Pamięć RAM (zainstalowana):
                                <span className="text-bold">8 GB</span>
                            </li>
                            <li>Procesor:
                                <span className="text-bold">Intel Core i5-8265U</span>
                            </li>
                            <li>Przekątna ekranu [cal]:
                                <span className="text-bold">13</span>
                            </li>
                            <li>System operacyjny:<span className="text-bold">Windows 10 Home</span>
                            </li>
                            <li className="last-li">Zobacz pełną specyfikację</li>
                        </ul>

                        <div className="producent-recommendation">
                            <h3>Producent Poleca</h3>
                            <p>Biznesowa propozycja najnowszego laptopa od Huawei. Wydajne podzespoły,
                                błyskawiczne przesyłanie danych z urządzeniami Huawei za pomocą OneHop oraz 10
                                godzin działania na baterii to tylko niektóre z jego zalet!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetailsMain