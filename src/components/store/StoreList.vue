<!--DIDRIKS KODER -->

<template>
    <input v-model="searchInput" type="text">
    <input @click="searchFunction" type="button" value="search">
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
//import {ref} from 'vue'
import StoreItem from "./StoreItem.vue"
import storeServices from "../../services/storeServices"

export default {

    setup() {
       
       /* const searchInput = ref("")

        const searchFunction = storeServices.filterItems(searchInput.value)*/

        const storeItems = storeServices.getAll(); 

        return { storeItems }
    },

    components: {
        StoreItem
    }
}
</script>