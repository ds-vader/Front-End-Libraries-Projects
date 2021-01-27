import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://my-json-server.typicode.com/twoSad/randomQuoteDB'
})

export const quoteAPI = {
    getQuote(id){
        return instance.get(`quotes/${id}`)
        .then(responce =>{
            return responce.data
        })
    }
}