import React from 'react'

const Certifications = () => {
    return (
        <div className="resume_item resume_work">
            <div className="title">
                <p className="bold">Certifications</p>
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
    )
}

export default Certifications