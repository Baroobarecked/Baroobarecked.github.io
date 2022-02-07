import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { Navigate } from "react-router-dom";

class Resume extends Component {
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
            <div id="resume" onClick={e => {
                e.stopPropagation()
                this.handleExit()
            }}>
                {redirect && <Navigate to='/about' />}
                <iframe src="https://onedrive.live.com/embed?cid=765844F142708659&resid=765844F142708659%212352&authkey=ADkLfh5mnq81rCw&em=2" width="476" height="288" frameborder="0" scrolling="no"></iframe>
            </div>
        )
    }
}


export default hot(module)(Resume);