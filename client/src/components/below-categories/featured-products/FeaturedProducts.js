import React, {Component} from 'react'
import './FeaturedProducts.css'
import small_picture1 from './img/1.jpg'
import small_picture2 from './img/2.jpg'
import small_picture3 from './img/3.jpg'
import small_picture4 from './img/4.jpg'
import small_picture5 from './img/5.jpg'
import small_picture6 from './img/6.jpg'
import small_picture7 from './img/7.jpg'
import Slider from 'react-slick'

class FeaturedProducts extends Component {
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
            <div className="slider-segment">
                <h3 className="segment-header">
                    Polecane produkty
                </h3>
                <Slider {...settings} className="products-slider">
                    <div>
                    <div className="image-container">
                            <img src={small_picture1} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                            <p className="featured-product-price">4253 zł</p>
                            <p className="featured-product-name">Procesor AMD Ryzen ...</p>
                            <p className="featured-product-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="rating-count">(101)</span>
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture2} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                            <p className="featured-product-price">4253 zł</p>
                            <p className="featured-product-name">Procesor AMD Ryzen ...</p>
                            <p className="featured-product-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="rating-count">(101)</span>
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture3} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                            <p className="featured-product-price">4253 zł</p>
                            <p className="featured-product-name">Procesor AMD Ryzen ...</p>
                            <p className="featured-product-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="rating-count">(101)</span>
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture4} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                            <p className="featured-product-price">4253 zł</p>
                            <p className="featured-product-name">Procesor AMD Ryzen ...</p>
                            <p className="featured-product-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="rating-count">(101)</span>
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture5} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                            <p className="featured-product-price">4253 zł</p>
                            <p className="featured-product-name">Procesor AMD Ryzen ...</p>
                            <p className="featured-product-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="rating-count">(101)</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="image-container">
                            <img src={small_picture6} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                            <p className="featured-product-price">4253 zł</p>
                            <p className="featured-product-name">Procesor AMD Ryzen ...</p>
                            <p className="featured-product-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="rating-count">(101)</span>
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className="image-container">
                            <img src={small_picture7} alt="" className="img-fluid"/>
                        </div>
                        <div className="description-container">
                            <p className="featured-product-price">4253 zł</p>
                            <p className="featured-product-name">Procesor AMD Ryzen ...</p>
                            <p className="featured-product-rating">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="rating-count">(101)</span>
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default FeaturedProducts