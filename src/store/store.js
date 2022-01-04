import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks';
import portFolio from './modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        stocks,
        portFolio
    }

});
