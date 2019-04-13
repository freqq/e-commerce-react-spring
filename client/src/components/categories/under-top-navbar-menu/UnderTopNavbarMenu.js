/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './UnderTopNavbarMenu.css'

class UnderTopNavbarMenu extends Component {
  render() {
    return (
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
    )
  }
}

export default  UnderTopNavbarMenu
