import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        email: "",
        password: "",
    };

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to="/post-my-thoughts/" />;

        return (
            <div className="login l-container-full-screen">
                <div className="l-container-full-screen filter-white">
                    <div className="l-container-1080">
                        <form
                            onSubmit={this.handleSubmit.bind(this)}
                            className="login-form"
                        >
                            <h2 className="login-title">Login</h2>
                            <div className="login-username-container form-box">
                                <input
                                    type="email"
                                    id="email"
                                    onChange={this.handleChange.bind(this)}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="login-password-container form-box">
                                <input
                                    type="password"
                                    id="password"
                                    onChange={this.handleChange.bind(this)}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button className="login-btn">Login</button>
                            {authError ? (
                                <div className="error-message">{authError}</div>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
