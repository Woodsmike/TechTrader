import data from '../../data/stocks'

const state = { 
    stocks: []
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
        commit('SET_STOCKS', data.stocks);
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