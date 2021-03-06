import React from 'react'

const Hobby = () => {
    return (
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
    )
}

export default Hobby