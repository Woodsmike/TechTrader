<template>
    <div>
        <app-stock v-for="stock in stocks" :stock="stock" :key="stock.id"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
    data() {
        return {
            stocks: [
                { id: 1, name: 'Google', price: 2000 },
                { id: 2, name: 'Amazon', price: 1100 },
                { id: 3, name: 'Yahoo', price: 110 },
                { id: 4, name: 'Apple', price: 1000 }
            ]
        }
    },
    components :{
        appStock: Stock
    }
}
</script>
