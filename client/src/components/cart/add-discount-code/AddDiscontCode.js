import React, {Component} from 'react'
import './AddDiscontCode.css'

class AddDiscontCode extends Component {
    state = {
        buttonClicked: false,
        discountCode: ''
    }

    onClick = () => {
        this.setState({buttonClicked: true})
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {buttonClicked, discountCode} = this.state

        return (
            <div className="cart-right-side discount-card">
                {buttonClicked
                    ? <div className="input-group mb-3">
                            <input
                                value={discountCode}
                                onChange={this.onChange}
                                name="discountCode"
                                type="text"
                                className="form-control"
                                placeholder="Kod rabatowy"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button discount-button">Dodaj</button>
                            </div>
                        </div>
                    : <p onClick={this.onClick} className="cart-right-side-heading">
                        Dodaj kod rabatowy
                    </p>
}
            </div>
        )
    }
}

export default AddDiscontCode