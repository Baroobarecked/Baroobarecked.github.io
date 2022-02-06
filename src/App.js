import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from './components/nav';
import Footer from './components/footer';

class App extends Component{
    render(){
        return(
            <div id="wrapper">
                <Nav />
                <Outlet />
                <Footer />
            </div>
        );
    }
}

export default hot(module)(App);