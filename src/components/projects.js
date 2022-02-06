import React, { Component } from "react";
import { hot } from 'react-hot-loader';

class Projects extends Component {
    componentDidMount() {
        let divs = document.querySelectorAll('.projectDesc');

        divs.forEach((div, index) => {
            let time = 500*index + 500
            setTimeout(() => {
                div.style.opacity = '100%'
            }, time)
        })
    }

    render(){
        return (
            <div id="projects">
                <div className="projectDesc one">
                    <span><a href="https://digital-eclipse.herokuapp.com">Live Link</a> | <a href="https://github.com/Baroobarecked/Digital_Eclipse">Repository</a></span>
                </div>
                <div className="projectDesc two">
                </div>
                <div className="projectDesc three">
                </div>
            </div>
        )
    }
}


export default hot(module)(Projects);