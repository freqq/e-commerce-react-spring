/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, {Component} from 'react'
import app_footer from './img/google.svg'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <h3>Twoje konto</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    Zamoówiania w realizacji
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Ostatnie zapytania
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Produkty do oceny
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Zgłoszenia serwisowe
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Zapisane koszyki
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Zapisane konfiguracje
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Modyfikacja / anulowanie zamówienia
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h3>Informacje prawne</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    Regulamin sklepu
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Polityka prywatności i cookies
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Koszty gospodarowania odpadami
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Materiały do pobrania
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Plan połaczeń
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Polityka transparentności
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h3>Pomocne linki</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    Jak kupić na raty?
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Numer konta bankowego
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Reklamacje, zwroty, serwis
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Częste pytania
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Punkty odbioru osobistego
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Tax Free, Foreign Shipping
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Dodatkowe gwarancje
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Leasing
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Wszystkie kategorie
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Producenci
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Nowości
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Marketplace
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h3>Morele.net</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    Kontakt
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Sprzedaz dla firm
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Grupa Morele.net
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Kariera
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Dane firmy
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Nasze referencje
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Autoryzacje producentów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Projekty UE
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Wspołpraca handlowa
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <h3>Social media</h3>
                        Znajdziesz nas na :
                        <ul className="footer-socials">
                            <li>
                                <i className="fab fa-facebook-f"></i>
                            </li>
                            <li>
                                <i className="fab fa-youtube"></i>
                            </li>
                            <li>
                                <i className="fab fa-instagram"></i>
                            </li>
                            <li>
                                <i className="fab fa-twitter"></i>
                            </li>
                        </ul>

                        <p className="download-app">
                            Pobierz naszą aplikację mobilną:
                        </p>
                        <img src={app_footer} alt="" />
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer