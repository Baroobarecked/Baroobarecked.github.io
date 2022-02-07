import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import de from '../../public/dehome.png';
import harmony from '../../public/harmony.png';
import perpetual from '../../public/perpetualjot.png';

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

    changeStyle(e){
        e.stopPropagation()
        if(e.target.attributes.class) {
            if(e.target.attributes.class.value.includes('projectDesc')) {
                e.target.style.background = 'rgba(0, 0, 0, 0.7)'
                e.target.firstChild.style.position = 'absolute'
                e.target.firstChild.style.height = '100%'
                e.target.firstChild.style.width = 'auto'
                e.target.lastChild.style.visibility = 'visible'
                e.target.lastChild.style.background = 'none'
                e.target.lastChild.style.height = 'auto'
            }
        }
    }

    revertStyle(e){
        e.stopPropagation()
        if(e.target.attributes.class) {
            if(e.target.attributes.class.value.includes('projectDesc')) {
                e.target.style.background = 'rgba(0, 0, 0, 0)'
                e.target.firstChild.style.position = 'relative'
                e.target.firstChild.style.width = '100%'
                e.target.firstChild.style.height = 'auto'
                e.target.lastChild.style.visibility = 'hidden'
                e.target.lastChild.style.height = '0%'
            }
        }
    }

    render(){
        return (
            <div id="projects">
                <div className="projectDesc one" onMouseOver={e => {
                    this.changeStyle(e)
                }}
                onMouseLeave={e => {
                    this.revertStyle(e)
                }}>
                    <img className="bgimage" src={de} />
                    
                    <h2>Digital Eclipse</h2>
                    <span><a href="https://digital-eclipse.herokuapp.com">Live Link</a> | <a href="https://github.com/Baroobarecked/Digital_Eclipse">Repository</a></span>
                    <p>
                        Digital Eclipse strives to recreate the experience of listening 
                        to vinyl records in a digital environment. It is a way for you 
                        to host your own music on the cloud so you can listen to your 
                        records on the go. Everything from how you select, play, pause, 
                        and stop music was designed to mimic the behaviors you have to 
                        go through to play vinyl records.
                    </p>
                    
                    
                </div>
                <div className="projectDesc two" onMouseOver={e => {
                    this.changeStyle(e)
                }}
                onMouseLeave={e => {
                    this.revertStyle(e)
                }}>
                    <img className="bgimage" src={harmony} />
                    
                    <h2>Harmony</h2>
                    <span><a href="https://harmony-aug21.herokuapp.com">Live Link</a> | <a href="https://github.com/LaterBlackBird/Harmony">Repository</a></span>
                    <p>
                        Harmony is a discord clone with a simple UI. 
                        It focuses on instant delivery of messages between 
                        groups of people. In Harmony there are two main ways 
                        to interact with other users, directly and via group 
                        messaging. Two people can interact with each other through 
                        private conversations initiated by either party or in a 
                        server room where they can participate in discussions 
                        across multiple channels.
                    </p>
                </div>
                <div className="projectDesc three" onMouseOver={e => {
                    this.changeStyle(e)
                }}
                onMouseLeave={e => {
                    this.revertStyle(e)
                }}>
                    <img className="bgimage" src={perpetual} />
                    
                    <h2>Perpetual Jot</h2>
                    <span><a href="https://perpetualjot.herokuapp.com">Live Link</a> | <a href="https://github.com/Baroobarecked/perpetualjot">Repository</a></span>
                    <p>
                        Perpetual Jot is a note taking app inspired by Evernote. 
                        The core principle in the design is to make note taking a 
                        fluid process with as few button presses as possible. It
                        accomplishes this by having updates on the backend occur 
                        with every stroke of the keyboard.
                    </p>
                </div>
            </div>
        )
    }
}


export default hot(module)(Projects);