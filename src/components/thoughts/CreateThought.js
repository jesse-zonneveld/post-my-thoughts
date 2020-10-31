import React, { Component } from "react";
import { connect } from "react-redux";
import { createThought } from "../../store/actions/thoughtActions";
import { Redirect } from "react-router-dom";

class CreateThought extends Component {
    state = {
        title: "",
        content: "",
    };

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createThought(this.state);
        this.props.history.push("/post-my-thoughts/");
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to="/post-my-thoughts/login" />;

        return (
            <div className="login">
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="login-form"
                >
                    <div className="thought-title-container">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            className="thought-title-input"
                            placeholder="My New Thought"
                            onChange={this.handleChange.bind(this)}
                        />
                    </div>
                    <div className="thought-content-container">
                        <label htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            className="thought-content-input"
                            onChange={this.handleChange.bind(this)}
                        ></textarea>
                    </div>
                    <button className="login-btn">Create</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createThought: (thought) => dispatch(createThought(thought)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateThought);
