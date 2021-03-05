import { quoteAPI } from '../api/api'

//actions names
const GET_QUOTE = 'GET_QUOTE'
const GET_AUTHOR = 'GET_AUTHOR'

const initialState = {
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

//action creators
const getQuoteSuccess = (quote) => ({ type: GET_QUOTE, quote })
const getAuthorSuccess = (author) => ({ type: GET_AUTHOR, author })

//thunks
export const getQuote = (id) => {
    return (dispatch) => {
        quoteAPI.getQuote(id)
            .then(data => {
                dispatch(getQuoteSuccess(data.quote))
                dispatch(getAuthorSuccess(data.author))
            }).catch(error => console.log(error))
    }
}

export default quoteReducer;
