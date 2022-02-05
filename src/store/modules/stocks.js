import data from '../../api/finnhub'

const stocks = [
    { id: 1, name: 'Google', symbol : 'GOOG', price: 0, quantity: 0 },
    { id: 2, name: 'Amazon', symbol : 'AMZN', price: 0, quantity: 0 },
    { id: 3, name: 'NetFlix', symbol : 'NFLX', price: 0, quantity: 0 },
    { id: 4, name: 'Apple', symbol : 'AAPL', price: 0, quantity: 0 }
];

for (let stock of stocks) {
    data.instance.quote(stock.symbol, (error, data, response) => {
        stock.price = data.c;
    });
}

const state = { 
    stocks: stocks
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'CHANGE_STOCKS'(state) {
        state.stocks.forEach(stock => {
            stock.price = stock.price;
        });
    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', state.stocks);
    },
    changeStocks: ({ commit }) => {
        commit('CHANGE_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};