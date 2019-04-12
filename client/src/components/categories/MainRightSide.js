import React, {Component} from 'react'
import Slider from './slider/Slider'
import CategoriesHover from './hover/CategoriesHover'

export default class MainRightSide extends Component {
    state = {
        hover: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.hovered !== prevProps.hovered) {
            this.setState({hover: this.props.hovered !== null})
        }
    }
    
    render() {
        const { hover} = this.state

        return (
            <div>
                {hover ? <CategoriesHover hovered={this.props.hovered} /> : ''}
                <Slider />
            </div>
        )
    }
}
