/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import PasswordStrengthMeter from './password-strength-meter/PasswordStrengthMeter'
import "./Login.css";

class Login extends Component {
    state = {
        email: "",
        password: "",
        loginState: "login",
        passwordHidden: true,
        emailValid: true,
        passwordValid: true,
        rememberMe: false,
        acceptRegulations: false,
        newsletter: false
    };

    toggleShowPassword = () => {
        this.setState({
            passwordHidden: !this.state.passwordHidden
        });
    };

    checkBoxOnChange = e => {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    onClick = e => {
        this.setState({
            loginState: e
                .target
                .getAttribute("name"),
            email: '',
            password: '',
            emailValid: true,
            passwordValid: true,
            acceptRegulations: false,
            newsletter: false,
            rememberMe: false
        });
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        const {email, password, rememberMe, loginState, newsletter} = this.state;
        e.preventDefault();
        var request;

        if (loginState === 'login') {
            request = {
                email,
                password,
                rememberMe
            };
        } else {
            request = {
                email,
                password,
                newsletter
            };
        }
        console.log(request);
    };

    onBlur = e => {
        if (e.target.name === 'email') 
            this.validateEmail(e)
        else 
            this.validatePassword(e)
    }

    validateEmail = e => {
        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        if (!regex.test(e.target.value) && e.target.value.length > 0) 
            this.setState({emailValid: false})
        else 
            this.setState({emailValid: true})
    }

    validatePassword = e => {
        if (e.target.value.length < 8) 
            this.setState({passwordValid: false})
        else 
            this.setState({passwordValid: true})
    }

    render() {
        const {
            email,
            password,
            loginState,
            passwordHidden,
            emailValid,
            passwordValid,
            rememberMe,
            acceptRegulations,
            newsletter
        } = this.state;

        const isEnabledLogin = emailValid && passwordValid && email.length > 0 & password.length > 0
        const isEnabledRegister = isEnabledLogin && acceptRegulations

        return (
            <div className="login-container-all">
                <div className="login-container">
                    <img
                        src="https://www.morele.net/static/img/shop/logo/img-logo-morele.svg"
                        alt="brand-logo"/>
                    <div className="login-container-fluid">
                        <div className="login-top-buttons row">
                            <div className="col-sm-6">
                                <button
                                    name="login"
                                    onClick={this.onClick}
                                    type="submit"
                                    className={loginState === "login"
                                    ? "active"
                                    : ""}>
                                    Logowanie
                                </button>
                            </div>
                            <div className="col-sm-6">
                                <button
                                    name="register"
                                    onClick={this.onClick}
                                    type="submit"
                                    className={loginState === "register"
                                    ? "active"
                                    : ""}>
                                    Nowe konto
                                </button>
                            </div>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <input
                                onBlur={this.onBlur}
                                className={'login-input ' + (emailValid
                                ? ''
                                : 'invalid-input')}
                                placeholder="e-mail"
                                name="email"
                                type="email"
                                onChange={this.onChange}
                                value={email}/> {emailValid
                                ? ''
                                : <span className="email-error">Podaj poprawny adres e-mail!</span>}
                            <div className="password-group">
                                <input
                                    onBlur={this.onBlur}
                                    className={'login-input ' + (passwordValid
                                    ? ''
                                    : 'invalid-input')}
                                    placeholder="hasło"
                                    name="password"
                                    type={passwordHidden
                                    ? "password"
                                    : "text"}
                                    onChange={this.onChange}
                                    autoComplete="off"
                                    value={password}/> {passwordHidden
                                    ? (<i onClick={this.toggleShowPassword} className="far fa-eye"/>)
                                    : (<i onClick={this.toggleShowPassword} className="far fa-eye-slash"/>)}
                                {!passwordValid && loginState === 'login'
                                    ? <span className="email-error">Hasło powinno mieć przynajmniej 8 znaków!</span>
                                    : ''}
                                {loginState === 'register' && password.length > 0
                                    ? <PasswordStrengthMeter password={password}/>
                                    : ''}
                            </div>

                            {loginState === "login"
                                ? (
                                    <div className="remember-password-container">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="rememberMe"
                                                defaultChecked={rememberMe}
                                                onChange={this.checkBoxOnChange}
                                                id="rememberMeCheckBox"/>
                                            <label className="form-check-label" htmlFor="rememberMeCheckBox">
                                                Zapamiętaj mnie
                                            </label>
                                        </div>
                                        <span className="forgot-password">Nie pamiętam hasła</span>
                                    </div>
                                )
                                : (
                                    <div className="accept-rules">
                                        {password.length < 8
                                            ? <span className="minimum-password">
                                                    <i className="fas fa-exclamation-circle"/>
                                                    Minimum 8 znaków
                                                </span>
                                            : ''}

                                        <div className="custom-control custom-switch">
                                            <input
                                                name="acceptRegulations"
                                                defaultChecked={acceptRegulations}
                                                onChange={this.checkBoxOnChange}
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="accept-regulations"/>
                                            <label className="custom-control-label" for="accept-regulations">
                                                Akceptuję
                                                <span className="text-blue">regulamin</span>
                                                sklepu internetowego.
                                            </label>
                                        </div>

                                        <div className="custom-control custom-switch">
                                            <input
                                                name="newsletter"
                                                defaultChecked={newsletter}
                                                onChange={this.checkBoxOnChange}
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="newsletter-checkbox"/>
                                            <label className="custom-control-label" for="newsletter-checkbox">
                                                Chcę otrzymywać newsletter i korzystać ze specjalnych promocji.
                                                <span className="text-blue">Więcej</span>
                                            </label>
                                        </div>
                                    </div>
                                )}

                            <button
                                disabled={loginState === 'login'
                                ? !isEnabledLogin
                                : !isEnabledRegister}
                                type="submit"
                                className="login-button">
                                {loginState === "login"
                                    ? "Zaloguj się"
                                    : "Utwórz konto"}
                            </button>
                        </form>
                    </div>
                </div>
                <p className="or-continue">lub kontynuuj z</p>
                <p className="facebook-login">
                    <i className="fab fa-facebook-f"/>
                    Facebook
                </p>
                <a href="/" className="go-back-button">
                    <i className="fas fa-chevron-left"/>
                    Wróc do strony głównej
                </a>
            </div>
        );
    }
}

export default Login;
