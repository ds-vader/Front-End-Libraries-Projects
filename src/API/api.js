import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3004'
})

export const quoteAPI = {
    getQuote(id){
        return instance.get(`quotes/${id}`)
        .then(responce =>{
            return responce.data
        })
    }
}