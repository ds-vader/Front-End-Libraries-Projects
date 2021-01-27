import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DrumPad from './DrumPad'
import './DrumMachine.scss'
import LetsDance from './LetsDance/LetsDance'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import RangeSlider from 'react-bootstrap-range-slider';

const bankOne = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
];

const bankTwo = [
    {
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Chord-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Chord-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Shaker',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
        keyCode: 90,
        keyTrigger: 'Z',
        id: 'Punchy-Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Side-Stick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
];

class DrumMachineContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bankType: '',
            display: '',
            volume: '',
            power: ''
        }
    }

    componentDidMount() {
        this.setState({
            bankType: true,
            volume: 0.2,
            power: true
        })
    }

    // on/off func
    isON = () => {
        this.setState({
            power: !this.state.power
        });
    };

    //volume control
    volumeChange = (e) => {
        this.setState({
            volume: e.target.value
        })
        this.updateDisplay('Volume : ' + parseInt(e.target.value * 100) + '%');
    }

    //change sound set 
    bankTypeChanger = () => {
        this.setState({
            bankType: !this.state.bankType
        })
    }

    //update display info
    updateDisplay = (info) => {
        this.setState({
            display: info
        })
    }

    //add button animation
    animateDrumPad = (id) =>{
        let some = document.getElementById(id).classList;
        some.add('active-drum-pad')
        setTimeout(() => some.remove('active-drum-pad'), 100);
    }

    //activate some audio
    playAudio = (keyTrigger, id) => {
        if(!this.state.power) return
        
        const audio = document.getElementById(keyTrigger);
        audio.currentTime = 0;
        audio.volume = this.state.volume;
        if (this.state.power) {
            audio.play()
            
            this.animateDrumPad(id)
            
            if (!audio.paused) {
                this.updateDisplay(id)

            }
        };
    }

    render() {
        return (
            <div className='danceFloor'>
                <Container>
                    <Row>
                        <Col>
                            <LetsDance />
                        </Col>
                    </Row>
                    <Row>

                        <div id='drum-machine'>
                            <div className='keyboard'>
                                {
                                    this.state.bankType ?

                                        bankOne.map((item, i) => <DrumPad
                                            power={this.state.power}
                                            key={i}
                                            url={item.url}
                                            keyTrigger={item.keyTrigger}
                                            keyCode={item.keyCode}
                                            id={item.id}
                                            playAudio={this.playAudio}
                                        />)
                                        :
                                        bankTwo.map((item, i) => <DrumPad
                                            power={this.state.power}
                                            key={i}
                                            url={item.url}
                                            keyTrigger={item.keyTrigger}
                                            keyCode={item.keyCode}
                                            id={item.id}
                                            playAudio={this.playAudio}
                                        />)
                                }
                            </div>
                            <div className='controls'>
                                <p id='display'>
                                    {this.state.display}
                                </p>
                                <div className='controlSwitch'>
                                    <BootstrapSwitchButton
                                        width={240}
                                        height={50}
                                        onstyle="success"
                                        offstyle="danger"
                                        onlabel='Power On'
                                        offlabel='Power Off'

                                        checked={this.state.power}
                                        onChange={this.isON}
                                    />
                                </div>
                                <div className='controlSwitch'>
                                    <BootstrapSwitchButton
                                        width={240}
                                        height={50}
                                        onstyle="dark"
                                        offstyle="dark"
                                        style="border"
                                        onlabel='Bank One'
                                        offlabel='Bank Two'

                                        checked={this.state.bankType}
                                        onChange={this.bankTypeChanger}
                                    />
                                </div>
                                <RangeSlider
                                    value={this.state.volume} onChange={this.volumeChange} type="range" min="0" max="1" step="0.01"
                                    variant='light'
                                    tooltip='off'
                                />
                            </div>
                        </div>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default DrumMachineContainer