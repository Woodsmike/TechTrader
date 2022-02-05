import finnhubClient from '../api/finnhub'

let finnhub = finnhubClient;
console.log(finnhub);
const getStockInfo = finnhub.finnhubClient.stockCandles;

const getCurrentQuote = finnhub.finnhubClient.quote;

let stocks = [
    { id: 1, name: 'Google', symbol : 'GOOG', price: 0 },
    { id: 2, name: 'Amazon', symbol : 'AMZN', price: 0 },
    { id: 3, name: 'Yahoo', symbol : 'YHOO', price: 0 },
    { id: 4, name: 'Apple', symbol : 'AAPL', price: 0 },
];

for (let stock of stocks) {
    finnhub.finnhubClient.quote(stock.symbol, (error, data, response) => {
    stock.price = data.c;
    });
}



export default {
    getStockInfo,
    getCurrentQuote,
    stocks: stocks
};
