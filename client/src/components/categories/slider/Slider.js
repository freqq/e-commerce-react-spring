import React, {Component} from 'react'
import './Slider.css'

import picture1 from './img/1.png'
import picture2 from './img/2.png'
import picture3 from './img/3.png'
import picture4 from './img/4.png'
import picture5 from './img/5.png'
import picture6 from './img/6.png'
import picture7 from './img/7.png'
import picture8 from './img/8.png'
import small_picture1 from './img/small/1.png'
import small_picture2 from './img/small/2.png'
import small_picture3 from './img/small/3.png'
import small_picture4 from './img/small/4.png'
import small_picture5 from './img/small/5.png'
import small_picture6 from './img/small/6.png'
import small_picture7 from './img/small/7.png'
import small_picture8 from './img/small/8.png'

class Slider extends Component {

    render() {
        return (
            <div>
                <div className="slider slider-for">
                    <div>
                        <img src={picture1} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={picture2} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={picture3} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={picture4} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={picture5} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={picture6} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={picture7} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={picture8} alt="" className="img-fluid"/>
                    </div>
                </div>
                <div className="slider slider-nav">
                    <div>
                        <img src={small_picture1} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={small_picture2} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={small_picture3} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={small_picture4} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={small_picture5} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={small_picture6} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={small_picture7} alt="" className="img-fluid"/>
                    </div>
                    <div>
                        <img src={small_picture8} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider
