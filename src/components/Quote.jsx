import React from 'react'

const Quote = (props) => {

    let onNewQuote = () => {
        props.newQuote();
    }

    return(
        <div className="main">
            <div className="main__quote">
                {props.quote()}
            </div>
            <div className="main__author">
                {props.author()}
            </div>
            <div className="main__shareButton"></div>
            <div className="main__newQuoteButton">
                <button onClick={ onNewQuote }>New Quote</button>
            </div>
        </div>
    )
}

export default Quote;