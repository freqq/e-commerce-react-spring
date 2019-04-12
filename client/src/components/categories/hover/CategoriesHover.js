/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './CategoriesHover.css'

class CategoriesHover extends Component {
    state = {
        hoveredCategory: null,
        showHover: false
    }

    componentDidMount(){
        this.setState({hoveredCategory: this.props.hovered})
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.hovered !== prevProps.hovered) {
            this.setState({hoveredCategory: this.props.hovered})
        }
    }

    onHover = () =>[
        //this.setState({showHover: !this.state.showHover})
        console.log('zmiana')
    ]

    renderCategories = () => {
        return (
            <div onMouseLeave={this.onHover} onMouseEnter={this.onHover} className="categories-list">
                <div className="row">
                    <div className="col-sm-3">
                        <ul>
                            <li>
                                <a href="#" className="category-name">
                                    Netbooki, laptopy, ultrabooki
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Ultrabooki
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy 2w1
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy wyprzedazowe i poleasingowe
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" className="category-name">
                                    Podzespoły do laptopów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Dyski SDD
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Dyski HDD
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Napędy optyczne
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Pamięci do laptopów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Podzespoły i części serwisowe
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul>
                            <li>
                                <a href="#" className="category-name">
                                    Laptopy - zastosowanie
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy biznesowe
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy dla domu
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy ultramobilne
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy multimedialne
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy dla graczy
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy premium
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Mobilne stacje robocze
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" className="category-name">
                                    Przenoszenie i ochrona
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Torby do laptopów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Etui do laptopów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Plecaki do laptopów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Linki zabezpieczające
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-3">
                        <ul>
                            <li>
                                <a href="#" className="category-name">
                                    Laptopy - popularni producenci
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy Lenovo
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy Dell
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy HP
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy Asus
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy Apple
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy MSI
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy Fijitsu
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy Toshiba
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" className="category-name">
                                    Laptopy - rozmiar
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy z ekranem 10.1" - 12.5"
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy z ekranem 13.3" - 14.1"
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy z ekranem 15.6"
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Laptopy z ekranem 17.3"
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <ul>
                            <li>
                                <a href="#" className="category-name">
                                    Akcesoria do laptopów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Baterie do laptopów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Dyski zewnętrzne
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Lampki USB
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Podstawki chłodzące
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Przetwornice
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Rysiki
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Stacje dokujące i replikatory portów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Wentylatory USB
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Zasilacze do laptopów
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Akcesoria poleasingowe
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Pozostałe akcesoria do laptopów
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>
        )
    }

    render() {
        const {hoveredCategory, showHover} = this.state
        return (
            <div className="hovered-category-container">
                {hoveredCategory !== null && !showHover
                    ? <div>
                            {this.renderCategories()}
                        </div>
                    : 'Loading'}
            </div>
        )
    }
}

export default CategoriesHover