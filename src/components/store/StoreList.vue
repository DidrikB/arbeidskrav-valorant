<!--DIDRIKS KODER -->

<template>
    <store-search></store-search>
    <section class="row justify-content-center">
        <store-item
            v-for="(store, i) in storeItems" :key="i" 
            :image="store.image"
            :title="store.title"
            :type="store.type"
            :price="store.price"
            v-bind:class="store.price > 1000 ? 'col-12 border-top' : 'col-6 '"
        >
        </store-item>
    </section>
</template>

<script>
import StoreItem from "./StoreItem.vue"
import StoreSearch from './StoreSearch.vue'
import storeServices from "../../services/storeServices"

export default {

    setup() {

        const storeItems = storeServices.getAll(); 

        return { storeItems }
    },

    components: {
        StoreItem,
        StoreSearch
    }
}
</script>