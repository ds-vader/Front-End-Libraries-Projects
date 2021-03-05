import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Navibar from './Components/Navibar'
import CV from './Components/CV'
import QuoteContainer from './Components/RandomQuote'
import MarkdownContainer from './Components/MarkdownPreviewer'
import DrumMachineContainer from './Components/DrumMachine'
import CalculatorContainer from './Components/Calculator'
import TomatoTimerContainer from './Components/TomatoTimer'

function App() {
  return (
    <div id='app'>
      <Router>
      <Navibar />
        <Route exact path='/' render={() => <CV />}/>
        <Route path='/RandomQuote' render={() => <QuoteContainer />} />
        <Route path='/MarkdownPreviewer' render={() => <MarkdownContainer />} />
        <Route path='/DrumMachine' render={()=> <DrumMachineContainer />} />
        <Route path='/Calculator' render={()=> <CalculatorContainer />} />
        <Route path='/TomatoTimer' render={()=> <TomatoTimerContainer />} />
      </Router>
    </div>
  )
}

export default App;