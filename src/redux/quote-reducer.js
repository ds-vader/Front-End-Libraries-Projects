const NEW_QUOTE = 'NEW-QUOTE';

let initialState = {}

const quoteReducer = (state=initialState, action)=>{
    switch(action.type){
        case NEW_QUOTE:
            state.randomQuote = action.generatedQuote;
            action.generatedQuote = '';
            return state;
        default:
            return state;
    }
}

export const generateQuoteCreator = (item) =>
    ({type: NEW_QUOTE, generatedQuote: item})


export default quoteReducer;