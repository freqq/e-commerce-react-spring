import React, {Component} from 'react'

class AddGiveawayCard extends Component {
    state = {
        buttonClicked: false,
        giveAwayCard: ''
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
        const {buttonClicked, giveAwayCard} = this.state

        return (
            <div className="cart-right-side discount-card">
                {buttonClicked
                    ? <div className="input-group mb-3">
                            <input
                                value={giveAwayCard}
                                onChange={this.onChange}
                                name="giveAwayCard"
                                type="text"
                                className="form-control"
                                placeholder="Kod karty podarunkowej"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button discount-button">Dodaj</button>
                            </div>
                        </div>
                    : <p onClick={this.onClick} className="cart-right-side-heading">
                        Dodaj kartę podarunkową
                    </p>
}
            </div>
        )
    }
}

export default AddGiveawayCard