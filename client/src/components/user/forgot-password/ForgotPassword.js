import React, {Component} from 'react'
import './ForgotPassword.css'

class ForgotPassword extends Component {
    state = {
        email: '',
        formSent: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        const {email} = this.state
        e.preventDefault()

        this.setState({formSent: true})

        var request = {
            email
        }

        console.log(request);
    }

    renderSent = () => {
        return (
            <div className="forgot-sent">
                <p className="forgot-password-subheading">e-mail z linkiem resetującym hasło został wysłany na Twoją skrzynkę pocztową:</p>
                <p>{this.state.email}</p>
                <p>Linki z e-maila będą aktywne przez 1 godzinę.</p>
                <button type="submit" className="login-button">
                    Przejdz do strony głównej
                </button>
            </div>
        )
    }

    renderForm = () => {
        const {email} = this.state
        return (
            <div className="forget-form">
                <p className="forgot-password-subheading">
                    Podaj adres e-mail powiązany z Twoim kontem.
                    <br/>
                    Prześlemy na niego dalsze instrukcje.
                </p>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="login-input"
                        type="email"
                        value={email}
                        name="email"
                        placeholder="e-mail"
                        onChange={this.onChange}/>
                    <button type="submit" disabled={email.length === 0} className="login-button">
                        Resetuj hasło
                    </button>
                </form>
            </div>
        )
    }

    render() {
        const {formSent} = this.state
        return (
            <div className="login-container-all forgot-password">
                <div className="login-container">
                    <img
                        src="https://www.morele.net/static/img/shop/logo/img-logo-morele.svg"
                        alt="brand-logo"/>

                    <p className="forgot-password-heading">Przypominanie hasła</p>

                    {formSent
                        ? this.renderSent()
                        : this.renderForm()}
                </div>

                {formSent
                    ? ''
                    : <a href="/" className="go-back-button">
                        <i className="fas fa-chevron-left"/>
                        Wróc do logowania
                    </a>
}
            </div>
        )
    }
}

export default ForgotPassword