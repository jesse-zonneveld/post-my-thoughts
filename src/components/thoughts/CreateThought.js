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
            <div className="create-thought l-container-full-screen">
                <div className="l-container-full-screen filter-white">
                    <div className="l-container-1080">
                        <form
                            onSubmit={this.handleSubmit.bind(this)}
                            className="create-thought-form"
                        >
                            <h2 className="form-title">Create New Thought</h2>
                            <div className="thought-title-container form-box">
                                <input
                                    type="text"
                                    id="title"
                                    className="thought-title-input"
                                    onChange={this.handleChange.bind(this)}
                                    placeholder=" "
                                    required
                                />
                                <label htmlFor="title">Title</label>
                            </div>
                            <div className="thought-content-container form-box">
                                <textarea
                                    id="content"
                                    className="thought-content-input"
                                    onChange={this.handleChange.bind(this)}
                                    required
                                    placeholder=" "
                                ></textarea>
                                <label htmlFor="content">Content</label>
                            </div>
                            <button className="login-btn">Create</button>
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createThought: (thought) => dispatch(createThought(thought)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateThought);
