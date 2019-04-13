/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import './StealAlert.css'
import steal_image from './img/steal.jpg'

class StealAlert extends Component {
    render() {
        return (
            <div className="steal-alert-segment">
                <p className="steal-alert-header">
                    #PolowanieNaTanie
                </p>
                <div className="steal-content">
                    <img src={steal_image} alt=""/>
                    <div className="price">
                        <span className="old-price">749 zł</span>
                        <span className="new-price">609 zł</span>
                    </div>
                    <p className="steal-name">Monitor LG 29UM58-P</p>

                    <div className="progress">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                            width: 25 + '%'
                        }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>

                    <div className="sold-segment">
                        <span className="items-sold">Sprzedano 49 sztuk</span>
                        <span className="items-left">Pozostało 101 sztuk</span>
                    </div>

                    <div className="row code">
                        <div className="col-6 left-code">
                            LG412
                        </div>
                        <div className="col-6 right-code">
                            SKOPIUJ KOD
                        </div>
                    </div>

                    <a href="#" className="steal-cart-button">Do koszyka</a>

                    <div className="steal-time-left">
                        <div className="time-element">
                            <p className="time">01</p>
                            <p className="time-name">dni</p>
                        </div>
                        <div className="time-element">
                            <p className="time">:</p>
                            <p className="time-name">&nbsp;</p>
                        </div>
                        <div className="time-element">
                            <p className="time">18</p>
                            <p className="time-name">godz</p>
                        </div>
                        <div className="time-element">
                            <p className="time">:</p>
                            <p className="time-name">&nbsp;</p>
                        </div>
                        <div className="time-element">
                            <p className="time">49</p>
                            <p className="time-name">min</p>
                        </div>
                        <div className="time-element">
                            <p className="time">:</p>
                            <p className="time-name">&nbsp;</p>
                        </div>
                        <div className="time-element">
                            <p className="time">04</p>
                            <p className="time-name">sek</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StealAlert