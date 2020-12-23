import { quoteAPI } from '../API/api'

const GET_QUOTE = 'GET_QUOTE'
const GET_AUTHOR = 'GET_AUTHOR'

let initialState = {
    quote: '',
    author: ''
}

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUOTE:
            return { ...state, quote: action.quote }
        case GET_AUTHOR:
            return { ...state, author: action.author }

        default: return state
    }
}

const getQuoteSuccess = (quote) => ({ type: GET_QUOTE, quote })
const getAuthorSuccess = (author) => ({ type: GET_AUTHOR, author })

export const getQuote = (id) => {
    return (dispatch) => {
        quoteAPI.getQuote(id)
            .then(data => {
                dispatch(getQuoteSuccess(data.quote))
                dispatch(getAuthorSuccess(data.author))
            })
    }
}

export default quoteReducer;
