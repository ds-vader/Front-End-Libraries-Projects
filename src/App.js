import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navibar from './Components/Navibar/Navibar'
import QuoteContainer from './Components/RandomQuote/QuoteContainer'
import MarkdownContainer from './Components/MarkdownPreviewer/MarkdownContainer'

function App() {
  return (
    <div>
      <Router>
      <Navibar />
        <Route exact path='/' />
        <Route path='/RandomQuote' render={() => <QuoteContainer />} />
        <Route path='/MarkdownPreviewer' render={() => <MarkdownContainer />} />
      </Router>
    </div>
  )
}

export default App;