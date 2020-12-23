import React from 'react'
import './Quote.scss'

const Quote = (props) => {
    return (
        <div id="wrapper">
            <div id="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left" /><span id="text">{props.quote}</span><i class="fa fa-quote-right" />
                </div>
                <div className="quote-author">- <span id="author">{props.author}</span></div>
                <div className="buttons">
                    <a
                        className="button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_top"
                        href={'https://twitter.com/intent/tweet?hashtags=quotes&text=' + '"' + props.quote+ '" - ' + props.author}
                    >
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a
                        className="button"
                        id="tumblr-quote"
                        title="Post this quote on tumblr!"
                        target="_blank"
                        href={'https://www.tumblr.com/new'}
                    >
                        <i className="fa fa-tumblr"></i>
                    </a>
                    <button className="button" id="new-quote" onClick={props.newQuote}>New quote</button>
                </div>
            </div>
            <div className="footer">by 2Sad</div>
        </div>
    )
}

export default Quote;