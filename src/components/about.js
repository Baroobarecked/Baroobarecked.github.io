import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { Link, Outlet } from 'react-router-dom'

class About extends Component {

    componentDidMount(){
        function drawLines(ctx, step, color2, color) {
            let width = ctx.canvas.width;
            let height = ctx.canvas.height;
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = `rgb(${255 / 2 - color / 2}, ${0}, ${color2})`;
            
            let x = 0;
            let y = 0;
            let amplitude = 50;
            let frequency = 30;
            while (x < width) {
                y = height/2 + amplitude * Math.sin((x + step)/frequency);
                ctx.lineTo(x, y);
                x = x + 1;
            }
            ctx.stroke();
        }
        let step = 0;
        let reverse = false;
        let count = 0;
        let color2 = 255;

        function draw () {
            let canvas = document.querySelector('.spiral')
            let ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 150, 150);
            
            let j = 6

            let color = 255;
            for (let i = -4; i < canvas.height; i += 5) {
                drawLines(ctx, i + step, color2, color);
                j += 2;
                color -= 8.5;
            }
            if(count === 300) {
                reverse = !reverse;
                count = 0;
            }
            count++;
            
            if(reverse) {
                color2 += 0.5;
            } else {
                color2 -= 0.5;
            }
            step += 0.3;
            window.requestAnimationFrame(draw);
        }
        draw()
    }

    render(){
        return (
            <>
                <div id="about">
                    <div id="about_content">
                        <h1>About Me</h1>
                        <p>
                            East Africa provided me with some amazing life experiences 
                            during my childhood, however experiencing technology was 
                            often not one of those. So when I got my hands on my first 
                            laptop and consistent internet access my junior year of 
                            highschool, it sparked something inside of me that would 
                            turn into a burning curiosity. I needed to know more about 
                            this new device, because for the first time I owned something 
                            I felt I did not truly understand. I just hopped into the 
                            backseat as my curiosity drove me into the world of Linux and 
                            software development. Ever since then I have sought to learn 
                            and apply new things every day. 
                        </p>
                        <p>
                            Javascript, html, and css is only the beginning, I have
                            developed skills in Redux, React, NodeJS, SequelizeJs,
                            PostgreSQL, Python, Flask, and SQLAlchemy.
                        </p>
                    </div>
                    <div id="profile_image">
                        Profile image
                        <Link to='/about/resume'>Resume</Link>
                    </div>
                </div>
                <canvas className="spiral" width="100vw" height="150"></canvas>
                <Outlet />
            </>
        )
    }
}

export default hot(module)(About);