import React from 'react';
import QuoteContainer from './components/QuoteContainer'

const App = (props) =>{
  return(
    <div>
      <QuoteContainer store={props.store}/>
    </div>
  )
}

export default App;