import React from 'react'
import TomatoTimer from './TomatoTimer'

const audio = document.getElementById('beep');

class TomatoTimerContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            breakLength: '',
            sessionLength: '',
            timerType: '',
            timerState: '',
            timer: '',
            timerCycle: undefined
        }
        

    }

    componentDidMount() {
        let timerCycle = setInterval(this.countDown, 1000)

        this.setState({
            breakLength: 5,
            sessionLength: 25,
            timerType: 'Session',
            timerState: false,
            timer: 25 * 60,
            timerCycle: timerCycle
        })
    }

    componentWillUnmount() {
        clearInterval(this.timeCycle);
    }

    //time controller
    timeControl = (count, timerType) => {
        let newCount;

        if (timerType === 'session') {
            newCount = this.state.sessionLength + count
        } else {
            newCount = this.state.breakLength + count
        }

        if (newCount > 0 && newCount < 61 && !this.state.timerState) {
            this.setState({
                [`${timerType}Length`]: newCount
            })
        }

        if (this.state.timerType.toLowerCase() === timerType && newCount > 0 && newCount < 61 && !this.state.timerState) {
            this.setState({
                timer: newCount * 60
            })
        }
    }

    //reset to default values
    reset = () => {
        this.setState({
            breakLength: 5,
            sessionLength: 25,
            timerType: 'Session',
            timerState: false,
            timer: 25 * 60
        })

        clearInterval(this.timeCycle);

        audio.pause();
        audio.currentTime = 0;
    }

    //on/off control
    startStop = () => {
        if (this.state.timerState) {
            clearInterval(this.timeCycle)

            this.setState({
                timerState: false
            })
        } else {
            this.setState({
                timerState: true
            })
        }
    }

    //countdown timer
    countDown = () => {
        if (this.state.timer === 0) {
            audio.play();

            this.setState({
                timerType: (this.state.timerType === 'Session') ? 'Break' : 'Session',
                timer: (this.state.timerType === 'Session') ? (this.state.breakLength * 60) : (this.state.sessionLength * 60)
            })
        } else if (this.state.timerState) {
            this.setState({
                timer: this.state.timer - 1
            })
        }
    }

    //conver sec to normal time
    converter = (timeLeft) => {
        let minutes = Math.floor(timeLeft / 60)
        let seconds = timeLeft % 60

        seconds = seconds < 10 ? '0' + seconds : seconds
        minutes = minutes < 10 ? '0' + minutes : minutes

        return `${minutes}:${seconds}`;
    }

    render() {
        return (<TomatoTimer
            breakLength={this.state.breakLength}
            sessionLength={this.state.sessionLength}
            timerType={this.state.timerType}
            timerState={this.state.timerState}
            timer={this.state.timer}

            timeControl={this.timeControl}
            reset={this.reset}
            startStop={this.startStop}
            converter={this.converter}
        />)
    }
}

export default TomatoTimerContainer