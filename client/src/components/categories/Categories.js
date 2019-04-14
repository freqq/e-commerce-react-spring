/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import Slider from './slider/Slider'
import "./Categories.css";
import UnderTopNavbarMenu from "./under-top-navbar-menu/UnderTopNavbarMenu";

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
                <div className="container-fluid">
                    <div className="row">
                        <div className="main-slider col-sm-10 offset-sm-2">
                            <Slider />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories
