import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { Link } from "react-router-dom";


class Nav extends Component {
    render(){
        return (
            <div id="navigation">
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        )
    }
}

export default hot(module)(Nav);