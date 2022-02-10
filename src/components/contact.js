import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { Navigate } from "react-router-dom";

class Contact extends Component {
    state = {
        redirect: false
    }

    handleExit(){
        let redirect = true
        this.setState({ redirect })
    }

    render(){
        let {redirect} = this.state;
        return (
            <div id="contact" onClick={e => {
                e.stopPropagation()
                this.handleExit()
            }}>
                {redirect && <Navigate to='/about' />}
                <div id="contact_info">
                    <h1>Contact Information</h1>
                    <p><b>Phone:</b> (417)229-5599</p>
                    <p><b>Email:</b> aaron@brubecksecure.com</p>
                </div>
            </div>
        )
    }
}


export default hot(module)(Contact);