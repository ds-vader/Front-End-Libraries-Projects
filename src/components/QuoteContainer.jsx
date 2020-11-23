import React from 'react';
import { generateQuoteCreator } from './../redux/quote-reducer';
import Quote from './Quote'

const QuoteContainer = (props) => {
    let state = props.store.getState();

    let _randomQuote = () => {
        let quote = state.quotes[Math.floor(Math.random() * state.quotes.length)];

        return quote;
    }

    let quote = () =>{
        return state.randomQuote.quote
    }

    let author = () =>{
        return state.randomQuote.author
    }

    let newQuote = () => {
        let action = generateQuoteCreator(_randomQuote());
        props.store.dispatch(action);
    }

    return (
        <Quote quote={quote} author={author} newQuote={newQuote}/>
    )
}

export default QuoteContainer;