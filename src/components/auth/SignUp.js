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
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/post-my-thoughts/" />;
        return (
            <div className="signup l-container-full-screen">
                <div className="l-container-full-screen filter-white">
                    <div className="l-container-1080">
                        <form
                            onSubmit={this.handleSubmit.bind(this)}
                            className="signup-form"
                        >
                            <h2 className="signup-title">New User</h2>

                            <div className="signup-username-container form-box">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="signup-first-name-container form-box">
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder=" "
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <label htmlFor="firstName">First Name</label>
                            </div>
                            <div className="signup-last-name-container form-box">
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder=" "
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <label htmlFor="lastName">Last Name</label>
                            </div>
                            <div className="signup-password-container form-box">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder=" "
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <label htmlFor="password">Password</label>
                            </div>
                            <button className="signup-btn">
                                Create Account
                            </button>
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
