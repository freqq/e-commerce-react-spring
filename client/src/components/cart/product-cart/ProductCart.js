import React, {Component} from 'react'
import product_1 from './img/1.jpg'
import product_2 from './img/2.jpg'
import './ProductCart.css'

class ProductCart extends Component {
    render() {
        return (
            <div className="cart-product">
                <div className="row">
                    <div className="col-sm-1">
                        <img src={product_1} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-sm-9">
                        <p className="product-name">Procesor AMD Ryzen 5 2600 3.9GHz, 16MB, BOX (YD2600BBAFBOX)</p>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="rememberMe"
                                defaultChecked={false}
                                onChange={this.checkBoxOnChange}
                                id="rememberMeCheckBox"/>
                            <label className="form-check-label" htmlFor="rememberMeCheckBox">
                                Dodatkowy 1 rok gwarancji
                                <strong>71 zł</strong>
                                <span className="text-blue">więcej gwarancji</span>
                            </label>
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="rememberMe"
                                defaultChecked={false}
                                onChange={this.checkBoxOnChange}
                                id="rememberMeCheckBox"/>
                            <label className="form-check-label" htmlFor="rememberMeCheckBox">
                                Montaz komputera
                                <span className="discount">-5%</span>
                                <strong>71,25 zł</strong>
                                <span className="text-blue">więcej usług</span>
                            </label>
                        </div>

                        <div className="delivery-time">
                            <p>Dostawa na wtorek, 16 kwietnia</p>
                            <p className="bottom">z magazynu centralnego</p>
                        </div>

                    </div>
                    <div className="col-sm-2">
                        <span className="float-right delete-product">
                            <i className="fas fa-ellipsis-v"></i>
                        </span>

                        <div className="right-bottom">
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="price">709zł</div>
                            <p>30+ szt. na magazynie</p>
                        </div>
                    </div>
                </div>

                <hr />
            </div>
        )
    }
}

export default ProductCart