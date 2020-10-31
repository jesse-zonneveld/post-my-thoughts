import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    };

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        });
        console.log(e.target.id, e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const { auth, authError } = this.props;
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
                    <div className="login-first-name-container">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Joe"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="login-last-name-container">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Smith"
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
                    <button className="login-btn">Signup</button>
                    {authError ? <div>{authError}</div> : null}
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
