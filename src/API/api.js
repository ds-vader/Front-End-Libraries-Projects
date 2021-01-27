import * as axios from 'axios'

//use axios to get access to API
const instance = axios.create({
    //free fake api server - http://my-json-server.typicode.com
    baseURL: 'http://my-json-server.typicode.com/twoSad/randomQuoteDB'
})

export const quoteAPI = {
    //use get request to get some quote
    getQuote(id){
        return instance.get(`quotes/${id}`)
        .then(responce =>{
            return responce.data
        })
    }
}