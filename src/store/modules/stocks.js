import stocks from '../../data/stocks'

const state = { 
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks){
        state.stocks = stocks;
    },
    'CHANGE_STOCKS'(state){

    }
};

const actions = {
    buyStock: ({ commit }, order) => {
        commit();
    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
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