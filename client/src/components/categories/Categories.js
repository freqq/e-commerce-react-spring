import React, {Component} from "react";
import MainRightSide from './MainRightSide'
import "./Categories.css";

class Categories extends Component {
    state = {
        hovered: null
    }

    onHover = e => {
        this.setState({
            hovered: e
                .target
                .getAttribute('name')
        })
    }

    onLeave = () => {
        this.setState({hovered: null})
    }

    render() {
        return (
            <div className="categories-container">
                <div className="under-top-navbar-menu">
                    <ul>
                        <li>
                            <a href="#" className="text-red">
                                AGD taniej do 426 zł!
                            </a>
                        </li>
                        <li>
                            <a href="#">Konfigurator PC</a>
                        </li>
                        <li>
                            <a href="#" className="text-red">
                                Alarm Cenowy
                            </a>
                        </li>
                        <li>
                            <a href="#">OUTLET</a>
                        </li>
                        <li>
                            <a href="#">Wyprzedaz</a>
                        </li>
                        <li>
                            <a href="#">Montaz zestawu PC</a>
                        </li>
                    </ul>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2 left-side-main-categories-menu">
                            <ul className="top-categories">
                                <li>
                                    <a href="#" className="categories">
                                        KATEGORIE
                                    </a>
                                </li>
                                <li onMouseLeave={this.onLeave} onMouseEnter={this.onHover} name="laptopy">
                                    <a href="#">
                                        Laptopy
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li onMouseLeave={this.onLeave} onMouseEnter={this.onHover} name="komputery">
                                    <a href="#">
                                        Komputery
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        RTV
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        AGD
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Telefony i tablety
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Foty i kamery
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Strefa Gracza
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Biuro
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                            </ul>

                            <hr/>
                            <ul className="down-main-left-side-menu">
                                <li>
                                    <a href="#">
                                        <i className="fas fa-volleyball-ball"/>
                                        Sport i turystyka
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-baby"/>
                                        Zabawki i dziecko
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-female"/>
                                        Kosmetyki
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-paw"/>
                                        Dla zwierzaka
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-car"/>
                                        Opony i felgi
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-book"/>
                                        Ksiązki
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-couch"/>
                                        Wyposazenie domu
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fas fa-home"/>
                                        Budowa i remont
                                        <i className="fas fa-chevron-right float-right"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="main-slider col-sm-10">
                            <MainRightSide hovered={this.state.hovered}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories
