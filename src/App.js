import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import "./scss/app.scss";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ThoughtDetails from "./components/thoughts/ThoughtDetails";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import CreateThought from "./components/thoughts/CreateThought";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app l-container-full-screen">
                    <Navbar />
                    <div className="l-container-1080 main-content">
                        <Switch>
                            <Route
                                exact
                                path="/post-my-thoughts"
                                component={Dashboard}
                            />
                            <Route
                                path="/post-my-thoughts/thoughts/:id"
                                component={ThoughtDetails}
                            />
                            <Route
                                path="/post-my-thoughts/login"
                                component={Login}
                            />
                            <Route
                                path="/post-my-thoughts/signup"
                                component={Signup}
                            />
                            <Route
                                path="/post-my-thoughts/create-thought"
                                component={CreateThought}
                            />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
