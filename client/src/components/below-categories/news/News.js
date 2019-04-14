import React, {Component} from 'react'
import './News.css'
import small_picture1 from './img/1.png'
import small_picture2 from './img/2.png'
import small_picture3 from './img/3.png'
import small_picture4 from './img/4.png'
import small_picture5 from './img/5.jpg'
import small_picture6 from './img/6.png'
import small_picture7 from './img/7.png'
import Slider from 'react-slick'

class News extends Component {
    render() {
        var settings = {
            slidesToShow: 3,
            centerMode: false,
            slidesToScroll: 3,
            dots: false,
            variableWidth: true,
            arrows: false,
            focusOnSelect: true
        }

        return (
            <div className="slider-segment news">
                <h3 className="segment-header">
                    Aktualności
                </h3>
                <Slider {...settings} className="news-slider">
                    <div>
                    <div className="image-container">
                            <img src={small_picture1} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                            <p className="featured-product-name">Dedykowane grupy na Facebooku</p>
                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture2} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                        <p className="featured-product-name">Dedykowane grupy na Facebooku</p>
                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture3} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                        <p className="featured-product-name">Dedykowane grupy na Facebooku</p>

                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture4} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                        <p className="featured-product-name">Dedykowane grupy na Facebooku</p>

                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture5} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                        <p className="featured-product-name">Dedykowane grupy na Facebooku</p>

                        </div>
                    </div>
                    <div>
                        <div className="image-container">
                            <img src={small_picture6} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                        <p className="featured-product-name">Dedykowane grupy na Facebooku</p>

                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture7} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                        <p className="featured-product-name">Dedykowane grupy na Facebooku</p>

                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default News
