import React from 'react'

import selfie from '../../common/selfie.jpg'
import PersonalInfo from './PersonalInfo'
import Skills from './Skills'
import Social from './Social'
import Hobby from './Hobby'
import Certifications from './Certifications'
import AboutMe from './AboutMe'
import Education from './Education'
import Projects from './Projects'

import './cv.scss'

// from https://codepen.io/RajRajeshDn/pen/dyyrdQP

const CV = () => {
    return (
        <div className='CV'>
            <div className="resume">
                <div className="resume_left">
                    <div className="resume_profile">
                        <img src={selfie} alt="profile_pic" />
                    </div>
                    <div className="resume_content">
                        <PersonalInfo />
                        <Skills />
                        <Social />
                        <Hobby />
                    </div>
                </div>
                <div className="resume_right">
                    <AboutMe />
                    <Certifications />
                    <Education />
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default CV;