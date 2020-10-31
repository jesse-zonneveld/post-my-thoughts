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
        console.log(e.target.id, e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to="/post-my-thoughts/" />;

        return (
            <div className="login">
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="login-form"
                >
                    <div className="login-username-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="email@test.ca"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="login-password-container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <button className="login-btn">Login</button>
                    {authError ? <div>{authError}</div> : null}
                </form>
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
