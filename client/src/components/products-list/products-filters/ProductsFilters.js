/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './ProductsFilters.css'
import keeper_img from './img/keeper.jpg'

class ProductsFilters extends Component {
    state = {
        rangeFrom: 0,
        rangeTo: 1000
    }

    onChange = e => {
        console.log(e.target.attributes.getNamedItem('data-from'))
        this.setState({
            rangeFrom: e
                .target
                .attributes
                .getNamedItem('data-from')
                .value
        })
    }

    inputOnChange = e => {
        console.log('zmieniam')
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="products-filters">
                <div className="category-keeper">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={keeper_img} alt=""/>
                        </div>
                        <div className="col-sm-9">
                            <p className="keeper-name">WK Kamil</p>
                            <p className="keeper-desc">Opiekun kategorii</p>
                            <p className="ask-keeper">
                                <i className="far fa-comment"></i>
                                Zapytaj o produkt</p>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="filter-category">
                    <h3>Pomocne linki</h3>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Szybka dostawa (196)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"/>
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            Darmowa dostawa (3396)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Outlet (45)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Nowości (19)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Wyprzedaz (17)
                        </label>
                    </div>
                </div>

                <hr/>

                <div className="filter-category">
                    <h3>Producenci</h3>
                    <h4>Sortuj: A-Z</h4>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Lenovo (2432)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"/>
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            MSI (1541)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            HP (973)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Acer (773)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Dell (571)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Hyperbook (457)
                        </label>
                    </div>
                    <div className="form-check show-more">
                        §
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Pokaz więcej
                        </label>
                    </div>
                </div>

                <hr/>

                <div className="filter-category">
                    <h3>Producenci</h3>
                    <h4>Sortuj: A-Z</h4>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Lenovo (2432)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"/>
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            MSI (1541)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            HP (973)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Acer (773)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Dell (571)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Hyperbook (457)
                        </label>
                    </div>
                    <div className="form-check show-more">
                        <i className="fas fa-chevron-down"></i>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Pokaz więcej
                        </label>
                    </div>
                </div>

                <hr/>

                <div className="filter-category">
                    <h3>Producenci</h3>
                    <h4>Sortuj: A-Z</h4>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Lenovo (2432)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"/>
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            MSI (1541)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            HP (973)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Acer (773)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Dell (571)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Hyperbook (457)
                        </label>
                    </div>
                    <div className="form-check show-more">
                        <i className="fas fa-chevron-down"></i>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Pokaz więcej
                        </label>
                    </div>
                </div>

                <hr/>

                <div className="filter-category">
                    <h3>Producenci</h3>
                    <h4>Sortuj: A-Z</h4>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Lenovo (2432)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"/>
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            MSI (1541)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            HP (973)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Acer (773)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Dell (571)
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"/>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Hyperbook (457)
                        </label>
                    </div>
                    <div className="form-check show-more">
                        <i className="fas fa-chevron-down"></i>
                        <label className="form-check-label" htmlFor="defaultCheck3">
                            Pokaz więcej
                        </label>
                    </div>
                </div>

                <hr/>

                <div className="weight">
                    <h3>Waga [kg]</h3>
                    <input
                        type="text"
                        className="js-range-slider"
                        name="my_range"
                        data-type="double"
                        data-min="0"
                        onChange={this.onChange}
                        data-max="1000"
                        data-from={this.state.rangeFrom}
                        data-to={this.state.rangeTo}
                        data-grid="false"
                        data-hide-from-to="true"
                        data-hide-min-max="true"
                        value=""/>

                    <div className="range-input">
                        <input
                            type="text"
                            name="rangeFrom"
                            value={this.state.rangeFrom}
                            onChange={this.inputOnChange}/>
                        -
                        <input
                            type="text"
                            name="rangeTo"
                            value={this.state.rangeTo}
                            onChange={this.inputOnChange}/>
                    </div>
                </div>

                <a href="#" className="filter-button">Filtruj</a>
                <a href="#" className="advanced-filter-button">
                    Filtrowanie zaawansowane
                    <i className="fas fa-chevron-right"></i>
                </a>
            </div>
        )
    }
}

export default ProductsFilters
