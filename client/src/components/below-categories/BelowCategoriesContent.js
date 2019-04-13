import React, {Component} from 'react'
import FeaturedProducts from './featured-products/FeaturedProducts'
import News from './news/News'
import StealAlert from './steal-alert/StealAlert'
import BigSliderUnderStealAlert from './big-slider/BigSliderUnderStealAlert'
import FullWidthSlider from './full-width-slider/FullWidthSlider'
import './BelowCategoriesContent.css'

class BelowCategoriesContent extends Component {
    render() {
        return (
            <div className="container-fluid below-categories-content">
                <div className="row">
                    <div className="col-sm-9">
                        <FeaturedProducts />
                        <News />
                    </div>
                    <div className="col-sm-3">
                        <StealAlert />
                    </div>
                </div>
                <BigSliderUnderStealAlert />
                <FullWidthSlider />
            </div>
        )
    }
}
export default BelowCategoriesContent
