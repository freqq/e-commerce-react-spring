import React, {Component} from 'react'
import './BigSliderUnderStealAlert.css'
import small_picture1 from './img/1.png'
import small_picture2 from './img/2.png'
import small_picture3 from './img/3.png'
import small_picture4 from './img/4.png'
import small_picture5 from './img/5.png'

class BigSliderUnderStealAlert extends Component {
    render() {
        return (
            <div className="slider-segment big-images-slider-segment full-width">
                <div className="big-images-slider">
                    <div>
                        <p className="title">Pralka Beko</p>
                        <div className="image-container">
                            <img src={small_picture1} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div>
                        <p className="title">Pralka Beko</p>
                        <div className="image-container">
                            <img src={small_picture2} alt="" className="img-fluid"/>
                        </div>

                    </div>
                    <div>
                        <p className="title">Pralka Beko</p>
                        <div className="image-container">
                            <img src={small_picture3} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div>
                        <p className="title">Pralka Beko</p>
                        <div className="image-container">
                            <img src={small_picture4} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div>
                        <p className="title">Pralka Beko</p>
                        <div className="image-container">
                            <img src={small_picture5} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BigSliderUnderStealAlert
