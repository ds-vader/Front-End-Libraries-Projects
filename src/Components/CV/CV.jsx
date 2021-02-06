import React, { useEffect } from 'react'
import './CV.css'
import selfie from '../../Common/selfie.jpg'

// from https://codepen.io/RajRajeshDn/pen/dyyrdQP
const CV = (props) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://kit.fontawesome.com/b99e675b6e.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className='CV'>
            <div className="resume">
                <div className="resume_left">
                    <div className="resume_profile">
                        <img src={selfie} alt="profile_pic" />
                    </div>
                    <div className="resume_content">
                        <div className="resume_item resume_info">
                            <div className="title">
                                <p className="bold">medynskyi dmytro</p>
                                <p className="regular">Front End developer</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-map-signs fa-2x"></i>
                                    </div>
                                    <div className="data">
                                        Nova Odesa <br /> Mykolaiv area <br /> Ukraine
             </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-mobile-alt fa-2x"></i>
                                    </div>
                                    <div className="data">
                                        +380 (97) 586-61-71
             </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fas fa-envelope fa-2x"></i>
                                    </div>
                                    <div className="data">
                                        dv.medynskyi<br />@gmail.com
             </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="fab fa-weebly fa-2x"></i>
                                    </div>
                                    <div className="data">
                                        2sad.site
             </div>
                                </li>
                            </ul>
                        </div>
                        <div className="resume_item resume_skills">
                            <div className="title">
                                <p className="bold">skill's</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="skill_name">- HTML 5 </div>
                                </li>
                                <li>
                                    <div className="skill_name">- CSS 3</div>
                                </li>
                                <li>
                                    <div className="skill_name">- SASS</div>
                                </li>
                                <li>
                                    <div className="skill_name">- Bootstrap</div>
                                </li>
                                <li>
                                    <div className="skill_name">- JQuery</div>
                                </li>
                                <li>
                                    <div className="skill_name">- JavaScript</div>
                                </li>
                                <li>
                                    <div className="skill_name">- React</div>
                                </li>
                                <li>
                                    <div className="skill_name">- Redux</div>
                                </li>
                                <li>
                                    <div className="skill_name">- Git</div>
                                </li>
                                <li>
                                    <div className="skill_name">- Babel</div>
                                </li>
                                <li>
                                    <div className="skill_name">- REST API</div>
                                </li>
                                <li>
                                    <div className="skill_name">- UX/UI</div>
                                </li>
                                <li>
                                    <div className="skill_name">- Figma</div>
                                </li>
                                <li>
                                    <div className="skill_name">- English lvl B1</div>
                                </li>
                            </ul>
                        </div>
                        <div className="resume_item resume_social">
                            <div className="title">
                                <p className="bold">Social</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <a href="https://t.me/twoSad" rel="noreferrer" target="_blank">
                                            <i class="fab fa-telegram fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Telegram</p>
                                        <p>@twoSad</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <a href="https://github.com/twoSad" rel="noreferrer" target="_blank">
                                            <i class="fab fa-github fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Github</p>
                                        <p>github.com/twoSad</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <a href="https://www.freecodecamp.org/2sad" rel="noreferrer" target="_blank">
                                            <i class="fab fa-free-code-camp fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">FreeCodeCamp</p>
                                        <p>freecodecamp.org/2sad</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <a href="https://www.linkedin.com/in/twosad" rel="noreferrer" target="_blank">
                                            <i className="fab fa-linkedin fa-2x"></i>
                                        </a>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Linkedin</p>
                                        <p>linkedin.com/in/twosad</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="resume_item resume_hobby">
                            <div className="title">
                                <p className="bold">Hobby</p>
                            </div>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i class="fas fa-dumbbell fa-2x"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Sport</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i class="fas fa-gamepad fa-2x"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Video games</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i class="fas fa-guitar fa-2x"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Guitar</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i class="fas fa-headphones fa-2x"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Music</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i class="fas fa-motorcycle fa-2x"></i>
                                    </div>
                                    <div className="data">
                                        <p className="semi-bold">Motorcycle</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="resume_right">
                    <div className="resume_item resume_about">
                        <div className="title">
                            <p className="bold">About me</p>
                        </div>
                        <p>Young frontend developer with six months of non-commercial experience. I'm looking for a job where I can use my skills to solve various tasks and conquer new heights.</p>
                    </div>
                    <div className="resume_item resume_work">
                        <div className="title">
                            <p className="bold">Work Experience</p>
                        </div>
                        <ul>
                            <li>
                                <div className="date">Nov 2020 - Present</div>
                                <div className="info">
                                    <p className="semi-bold">FreeCodeCamp</p>
                                    <p>Front End Libraries Certification<br />In-depth study of React / Redux</p>
                                </div>
                            </li>
                            <li>
                                <div className="date">Sep 2020 - Nov 2020</div>
                                <div className="info">
                                    <p className="semi-bold">FreeCodeCamp</p>
                                    <p>Responsive Web Design Certification<br />JavaScript Algorithms and Data Structures Certification</p>
                                </div>
                            </li>
                            <li>
                                <div className="date">Aug 2020 - Sep 2020</div>
                                <div className="info">
                                    <p className="semi-bold">W3Schools</p>
                                    <p>Passed the web developer's tutorial</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume_item resume_education">
                        <div className="title">
                            <p className="bold">Education</p>
                        </div>
                        <ul>
                            <li>
                                <div className="date">2016 - 2020</div>
                                <div className="info">
                                    <p className="semi-bold">Petro Mohyla Black Sea National University</p>
                                    <p>Bachelor’s degree in Computer Science</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume_item resume_projects">
                        <div className="title">
                            <p className="bold">Projects</p>
                        </div>
                        <ul>
                            <li>
                                <div className="info">
                                    <p className="semi-bold">Random Quotes</p>
                                    <p>This project gives you a random quote from a famous person. If you want, you can share the quote on Twitter or on Tumblr</p>
                                    <span className='hashtag'>#React</span>&nbsp;
                                    <span className='hashtag'>#Redux</span>&nbsp;
                                    <span className='hashtag'>#RestAPI</span>&nbsp;
                                    <span className='hashtag'>#ReactBootstrap</span>&nbsp;
                                    <span className='hashtag'>#JS</span>&nbsp;
                                    <span className='hashtag'>#HTML</span>&nbsp;
                                    <span className='hashtag'>#CSS</span>
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className="info">
                                    <p className="semi-bold">Markdown Previewer</p>
                                    <p>This is the simple markdown editor with live preview that includes a markup syntax guide and laconic design</p>
                                    <span className='hashtag'>#React</span>&nbsp;
                                    <span className='hashtag'>#HTML</span>&nbsp;
                                    <span className='hashtag'>#SCSS</span>&nbsp;
                                    <span className='hashtag'>#MarkedLibrary</span>
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className="info">
                                    <p className="semi-bold">Drum Machine</p>
                                    <p>Drum pad machine with 2 sound presets, volume control, on/off button and display which indication current action. Also funny animation (on high resolution monitor)</p>
                                    <span className='hashtag'>#React</span>&nbsp;
                                    <span className='hashtag'>#ReactBootstrap</span>&nbsp;
                                    <span className='hashtag'>#JS</span>&nbsp;
                                    <span className='hashtag'>#HTML</span>&nbsp;
                                    <span className='hashtag'>#SCSS</span>&nbsp;
                                    <span className='hashtag'>#Audio</span>
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className="info">
                                    <p className="semi-bold">Calculator</p>
                                    <p>Calculator with common functionality (adding, subtraction, multiplication, division). Also correct work with negative values</p>
                                    <span className='hashtag'>#React</span>&nbsp;
                                    <span className='hashtag'>#JS</span>&nbsp;
                                    <span className='hashtag'>#Regex</span>&nbsp;
                                    <span className='hashtag'>#HTML</span>&nbsp;
                                    <span className='hashtag'>#CSS</span>&nbsp;
                                </div>
                            </li>
                            <hr />
                            <li>
                                <div className="info">
                                    <p className="semi-bold">Tomato Timer</p>
                                    <p>Flexible and easy to use Tomato Timer where user can configure work session and break time interval, for greater convenience and opportunities to adapt to different tasks. Session and break combination in infinite loop. At the end of any period user will hear a signal to end the current session </p>
                                    <span className='hashtag'>#React</span>&nbsp;
                                    <span className='hashtag'>#JS</span>&nbsp;
                                    <span className='hashtag'>#Audio</span>&nbsp;
                                    <span className='hashtag'>#TimeManager</span>&nbsp;
                                    <span className='hashtag'>#HTML</span>&nbsp;
                                    <span className='hashtag'>#CSS</span>&nbsp;
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV;