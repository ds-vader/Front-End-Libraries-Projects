import React from 'react'
import './TomatoTimer.css'
import { PlayCircleFill, PauseCircleFill, ArrowCounterclockwise, DashCircle, PlusCircle } from 'react-bootstrap-icons';

const TomatoTimer = (props) => {
    return (
        <div id='tomato'>
            <h1>Tomato Timer</h1>

            <div className='tomatoWrapper'>
                
                <div id='controllerPanel'>
                    <div id='session-label'>Session Length</div>
                    <div id='controller'>
                        <div id='session-decrement' onClick={() => { props.timeControl(-1, 'session') }}><DashCircle size={35} /></div>
                        <div id='session-length'>{props.sessionLength}</div>
                        <div id='session-increment' onClick={() => { props.timeControl(+1, 'session') }}><PlusCircle size={35} /></div>
                    </div>
                </div>

                <div>
                    <div id='timer-label'></div>
                    <div className='countdown-wrapper'>
                        <div className='countdown-item'>
                            <SVGCircle radius={
                                mapNumber(props.timer, // time left in sec
                                    props.timerType === 'Session' ? props.sessionLength * 60 : props.breakLength * 60, // max input value
                                    0, 0, 360)} />
                            <div id='time-left'>{props.converter(props.timer)}</div>
                            <span id='timer-label'>{props.timerType}</span>
                        </div>
                    </div>
                </div>
                <div id='controllerPanel'>
                    <div id='break-label'>Break Length</div>
                    <div id='controller'>
                        <div id='break-decrement' onClick={() => { props.timeControl(-1, 'break') }}><DashCircle size={35} /></div>
                        <div id='break-length'>{props.breakLength}</div>
                        <div id='break-increment' onClick={() => { props.timeControl(+1, 'break') }}><PlusCircle size={35} /></div>
                    </div>
                </div>

                <div></div>

                <div id='controller'>
                    <div id='start_stop' onClick={props.startStop}> {props.timerState ? < PauseCircleFill size={50} /> : < PlayCircleFill size={50} />}</div>
                    <div id='reset' onClick={props.reset}><ArrowCounterclockwise size={50} /></div>
                </div>
            </div>

        </div>
    )
}

// timer circle
const SVGCircle = ({ radius }) => (
    <svg className='countdown-svg'>
        <path fill="none" stroke="#333" strokeWidth="4" d={describeArc(100, 100, 98, 0, radius)} />
    </svg>
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export default TomatoTimer