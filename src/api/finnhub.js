const finnhub = require('finnhub');


const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c73m4riad3i8g8erd4f0"
const finnhubClient = new finnhub.DefaultApi();


export default {
    finnhubClient
};