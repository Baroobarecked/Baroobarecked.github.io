import React from 'react';
import { render } from 'react-dom';
import App from "./App.js";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import About from './components/about.js';
import Projects from './components/projects';
import Main from './components/main';
import Resume from './components/resume';
import Contact from './components/contact'

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Main />} />
                <Route exact path='about' element={<About />}>
                    <Route exact path='resume' element={<Resume />} />
                    <Route exact path='contact' element={<Contact />} />
                </Route>
                <Route exact path='projects' element={<Projects />} />
            </Route>
        </Routes>
    </BrowserRouter>
    // <App />
    , document.getElementById('root')
);
