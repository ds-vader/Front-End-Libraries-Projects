import React from 'react'
import { House } from 'react-bootstrap-icons';

import './navibar.scss'

//Navbar 

const Navibar = () => {

    return (
        <div class="nav">
            <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        <a href="/">
                            <House size={30} />
                        </a>
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="nav-links">
                    <a href="/RandomQuote" >Random Quote</a>
                    <a href="/MarkdownPreviewer">Markdown Previewer</a>
                    <a href="/DrumMachine">Drum Machine</a>
                    <a href="/Calculator">Calculator</a>
                    <a href="/TomatoTimer">Tomato Timer</a>
                </div>
            </div>
    )
}

export default Navibar;