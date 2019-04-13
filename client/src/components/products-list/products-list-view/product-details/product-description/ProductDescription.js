/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './ProductDescription.css'
import FeaturedProducts from '../../../../below-categories/featured-products/FeaturedProducts';

import desc_img_1 from './img/1.jpg'
import desc_img_2 from './img/2.jpg'
import desc_img_3 from './img/3.png'
import desc_img_4 from './img/4.jpg'
import desc_img_5 from './img/5.jpg'
import desc_img_6 from './img/6.jpg'

class ProductDescription extends Component {
    render() {
        return (
            <div className="product-description-container">
                <ul
                    className="top-bar-navigator sticky-top sticky-offset"
                    id="description-navbar">
                    <li>
                        <a href="#worth-to-buy">Warto dokupić</a>
                    </li>
                    <li>Opis</li>
                    <li>Specyfikacja</li>
                    <li>Opinie</li>
                    <li>Pytania i odpowiedzi</li>
                    <li>Gwarancje i usługi</li>
                    <li>Raty</li>
                </ul>

                <div
                    data-spy="scroll"
                    data-target="#description-navbar"
                    data-offset="0"
                    className="product-description-bottom">
                    <FeaturedProducts/>

                    <div className="full-card desc">
                        <h3>Opis produktu</h3>

                        <img src={desc_img_1} alt="" className="img-fluid"/>
                        <p className="desc-big-heading">Zobaczyć to uwierzyć</p>
                        <p className="desc-small-text">Wyświetlacz HUAWEI FullView Display to więcej niż
                            imponujący ekran; ożywia w pełni wciągające wrażenia wizualne. Dzięki
                            88-procentowemu współczynnikowi ekranu do obudowy, wąska ramka HUAWEI MateBook
                            13 o wymiarach 4,4 mm zapewnia więcej miejsca na jasną, bogatą i żywą grafikę,
                            która rozpala Twoją wyobraźnię. Bądź oczarowany.</p>

                        <img src={desc_img_2} alt="" className="img-fluid"/>
                        <p className="desc-big-heading">Lekki, ale wytrzymały</p>
                        <p className="desc-small-text">HUAWEI MateBook 13 został zaprojektowany z myślą
                            o optymalnej przenośności. Jego smukła, metalowa rama o grubości 14,9 mm jest
                            starannie wykonana z wykończeniem w kształcie diamentu na każdym rogu, dzięki
                            czemu zyskuje ultranowoczesny wygląd i styl premium. Potężnie elegancka maszyna.</p>

                        <img src={desc_img_3} alt="" className="img-fluid"/>
                        <p className="desc-big-heading">Przełomowa moc</p>
                        <p className="desc-small-text">Prędkość i moc łączą się w HUAWEI MateBook 13,
                            aby zapewnić rewolucyjne możliwości wydajności. Wyposażony w nowy 8. generacji
                            (Whisky Lake) procesor Intel Core, działa 40% szybciej niż jego poprzednik.
                        </p>

                        <p className="desc-big-heading">Ciesz się dłużej</p>
                        <p className="desc-small-text">PNajlepsza w tej klasie bateria 42 Wh (TYP)
                            pozwala na dłuższe korzystanie z zasilania. HUAWEI MateBook 13 ze zintegrowaną
                            grafiką może odtwarzać lokalne filmy 1080p przez 10 godzin.
                        </p>

                        <img src={desc_img_4} alt="" className="img-fluid"/>
                        <p className="desc-big-heading">Naciśnij i działaj</p>
                        <p className="desc-small-text">Przycisk zasilania HUAWEI MateBook 13 ze
                            zoptymalizowanym BIOS-em pozwala na szybkie uruchomienie i logowanie się.
                            Bezpieczny, szybki i przyjazny dla użytkownika.
                        </p>

                        <img src={desc_img_5} alt="" className="img-fluid"/>
                        <p className="desc-big-heading">Nie słuchaj tego, poczuj to</p>
                        <p className="desc-small-text">HUAWEI MateBook 13 wyposażony jest w dźwięk Dolby
                            Atmos® , który zapewnia niesamowite wrażenia w słuchawkach dzięki zapierającym
                            dech w piersi, ruchomemu dźwiękowi, który płynie nad tobą i wokół ciebie.
                            Poczujesz się jakbyś był wewnątrz akcji, gdy dźwięk ożywa z bogactwem i głębią i
                            wydaje się poruszać w trójwymiarowej przestrzeni.
                        </p>

                        <img src={desc_img_6} alt="" className="img-fluid"/>

                        <div className="description-actions">
                            <span><i class="far fa-comments"></i> Pytanie techniczne do producenta</span>
                            <span>Błąd w opisie? Zgłoś!</span>
                        </div>
                    </div>

                    <div className="product-full-specification">
                        <h2>Specyfikacja</h2>
                        <div className="category">
                            <h3>Produkt</h3>
                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    Producent
                                </div>
                                <div className="col-sm-6 right-side">
                                    <span className="text-blue">Huawei</span>
                                </div>
                            </div>
                        </div>

                        <div className="category">
                            <h3>Informacje podstawowe</h3>
                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Linia
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Matebook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Seria
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Skrótowa specyfikacja
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13" QHD IPS/i5/8GB/256GB_SSD/UHD620/USB-C/BT/Windows 10
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Kolor
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Szary
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Typ
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Ultrabook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Zastosowanie
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Multimedialne, Ultramobilne</div>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Informacje podstawowe</h3>
                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Linia
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Matebook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Seria
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Skrótowa specyfikacja
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13" QHD IPS/i5/8GB/256GB_SSD/UHD620/USB-C/BT/Windows 10
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Kolor
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Szary
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Typ
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Ultrabook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Zastosowanie
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Multimedialne, Ultramobilne</div>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Informacje podstawowe</h3>
                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Linia
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Matebook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Seria
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Skrótowa specyfikacja
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13" QHD IPS/i5/8GB/256GB_SSD/UHD620/USB-C/BT/Windows 10
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Kolor
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Szary
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Typ
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Ultrabook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Zastosowanie
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Multimedialne, Ultramobilne</div>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Informacje podstawowe</h3>
                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Linia
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Matebook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Seria
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Skrótowa specyfikacja
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13" QHD IPS/i5/8GB/256GB_SSD/UHD620/USB-C/BT/Windows 10
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Kolor
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Szary
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Typ
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Ultrabook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Zastosowanie
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Multimedialne, Ultramobilne</div>
                            </div>
                        </div>
                        <div className="category">
                            <h3>Informacje podstawowe</h3>
                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Linia
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Matebook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Seria
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Skrótowa specyfikacja
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    13" QHD IPS/i5/8GB/256GB_SSD/UHD620/USB-C/BT/Windows 10
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Kolor
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Szary
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Typ
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Ultrabook
                                </div>
                            </div>

                            <div className="row one-spec">
                                <div className="col-sm-6 left-side">
                                    <span className="text-blue">
                                        Zastosowanie
                                    </span>
                                </div>
                                <div className="col-sm-6 right-side">
                                    Multimedialne, Ultramobilne</div>
                            </div>
                        </div>

                        <div className="description-actions">
                            <span><i class="far fa-comments"></i> Pytanie techniczne do producenta</span>
                            <span>Drukuj opis</span>
                        </div>
                    </div>
                </div>

                <div className="full-card">
                    <h3>Opinie (0)</h3>
                    <p>Produkt nie ma jeszcze opinii</p>
                    <a href="#" className="add-opinion-button">Dodaj opinię jako pierwszy</a>
                </div>

                <div className="full-card">
                    <h3>Pytania i odpowiedzi (0)</h3>
                    <p>Zastanawiasz się czy produkt spełni twoje oczekiwania?</p>
                    <a href="#" className="add-opinion-button">Zapytaj innych klientów</a>
                </div>
            </div>
        )
    }
}

export default ProductDescription