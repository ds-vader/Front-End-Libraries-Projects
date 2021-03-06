import React from 'react'

const Projects = () => {
    return (
        <div className="resume_item resume_projects">
            <div className="title">
                <p className="bold">Projects</p>
            </div>
            <ul>
                <li>
                    <div className="info">
                        <a className='header_link' href="/RandomQuote" rel="noreferrer" target="_self">
                            <p className="semi-bold">Random Quotes</p>
                        </a>
                        <p className='text'>This project gives you a random quote from a famous person. If you want, you can share the quote on Twitter or on Tumblr</p>
                        <p>
                            <span className='hashtag'>#React</span> <span className='hashtag'>#Redux</span> <span className='hashtag'>#RestAPI</span> <span className='hashtag'>#ReactBootstrap</span> <span className='hashtag'>#JS</span> <span className='hashtag'>#HTML</span> <span className='hashtag'>#CSS</span>
                        </p>
                    </div>
                </li>
                <hr />
                <li>
                    <div className="info">
                        <a className='header_link' href="/MarkdownPreviewer" rel="noreferrer" target="_self">
                            <p className="semi-bold">Markdown Previewer</p>
                        </a>
                        <p className='text'>This is the simple markdown editor with live preview that includes a markup syntax guide and laconic design</p>
                        <p>
                            <span className='hashtag'>#React</span> <span className='hashtag'>#HTML</span> <span className='hashtag'>#SCSS</span> <span className='hashtag'>#MarkedLibrary</span>
                        </p>
                    </div>
                </li>
                <hr />
                <li>
                    <div className="info">
                        <a className='header_link' href="/DrumMachine" rel="noreferrer" target="_self">
                            <p className="semi-bold">Drum Machine</p>
                        </a>
                        <p className='text'>Drum pad machine with 2 sound presets, volume control, on/off button and display which indication current action. Also funny animation (on high resolution monitor)</p>
                        <p>
                            <span className='hashtag'>#React</span> <span className='hashtag'>#ReactBootstrap</span> <span className='hashtag'>#JS</span> <span className='hashtag'>#HTML</span> <span className='hashtag'>#SCSS</span> <span className='hashtag'>#Audio</span>
                        </p>
                    </div>
                </li>
                <hr />
                <li>
                    <div className="info">
                        <a className='header_link' href="/Calculator" rel="noreferrer" target="_self">
                            <p className="semi-bold">Calculator</p>
                        </a>
                        <p className='text'>Calculator with common functionality (adding, subtraction, multiplication, division). Also correct work with negative values</p>
                        <p>
                            <span className='hashtag'>#React</span> <span className='hashtag'>#JS</span> <span className='hashtag'>#Regex</span> <span className='hashtag'>#HTML</span> <span className='hashtag'>#CSS</span>
                        </p>
                    </div>
                </li>
                <hr />
                <li>
                    <div className="info">
                        <a className='header_link' href="/TomatoTimer" rel="noreferrer" target="_self">
                            <p className="semi-bold">Tomato Timer</p>
                        </a>
                        <p className='text'>Flexible and easy to use Tomato Timer where user can configure work session and break time interval, for greater convenience and opportunities to adapt to different tasks. Session and break combination in infinite loop. At the end of any period user will hear a signal to end the current session </p>
                        <p>
                            <span className='hashtag'>#React</span> <span className='hashtag'>#JS</span> <span className='hashtag'>#Audio</span> <span className='hashtag'>#TimeManager</span> <span className='hashtag'>#HTML</span> <span className='hashtag'>#CSS</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Projects