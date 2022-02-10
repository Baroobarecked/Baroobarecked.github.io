import React, { Component } from "react";
import { hot } from 'react-hot-loader';


class Main extends Component {

    componentDidMount(){
        function drawLines(ctx, step, color) {
            let width = ctx.canvas.width;
            let height = ctx.canvas.height;
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = `rgb(${255 / 2 - color / 2}, ${0}, ${150})`;
            
            let x = 0;
            let y = 0;
            let amplitude = 50;
            let frequency = 50;
            while (x < width) {
                y = height/2 + amplitude * Math.sin((x + step)/frequency);
                ctx.lineTo(x, y);
                x = x + 1;
            }
            ctx.stroke();
        }
        let step = 0;
        function draw () {
            let canvas = document.querySelector('.spiral')
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 150, 150);
            
            let color = 255;
            for (let i = -4; i < canvas.height; i += 1) {
                drawLines(ctx, i + step, color);
                color -= 2.5;
            }
            
            step += 0.3;
            window.requestAnimationFrame(draw);
        }
        draw()
    }

    render(){
        return (
            <div id="main">
                <h1>Aaron Brubeck:</h1>
                <h2>Software</h2>
                <h2>Developer</h2>
                <canvas className="spiral" width="100vw" height="150"></canvas>
                <p>I am a software developer focused on applying creative solutions to unique problems.</p>
            </div>
        )
    }
}

export default hot(module)(Main);