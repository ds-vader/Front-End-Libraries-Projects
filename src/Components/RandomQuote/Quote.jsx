import React from 'react'
import './Quote.scss'
import { Button } from 'react-bootstrap'

const Quote = (props) => {
    return (
        <div id="wrapper">
            <div id="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left" /><span id="text">{props.quote}</span><i class="fa fa-quote-right" />
                </div>
                <div className="quote-author">- <span id="author">{props.author}</span></div>
                <div className="buttons">
                    <Button className="fa fa-twitter button"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_blank"
                        href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
                            encodeURIComponent('"' + props.quote + '" - ' + props.author)}></Button>
                    <Button className="fa fa-tumblr button"
                        id="tumblr-quote"
                        title="Post this quote on tumblr!"
                        target="_blank"
                        
                        href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' +
                        encodeURIComponent(props.author) +
                        '&content=' +
                        encodeURIComponent(props.quote) +
                        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'}></Button>

                    <button className="button" id="new-quote" onClick={props.newQuote}>New quote</button>
                </div>
            </div>
            <div className="footer">by Medynskyi Dmytro</div>
        </div>
    )
}

export default Quote;