import React, { Component } from "react";
import { hot } from 'react-hot-loader';

class About extends Component {

    render(){
        return (
            <div id="about">
                <h1>From About</h1>
            </div>
        )
    }
}

export default hot(module)(About);