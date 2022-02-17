<template>
    <section class="row">
        <store-item
            v-for="(store, i) in storeItems" :key="i"
            :onsale="store.onSale"
            :image="store.image"
            :title="store.title"
            :type="store.type"
            :price="store.price"
            class="col-6"
        ></store-item>
    </section>
</template>

<script>
import StoreItem from "./StoreItem.vue"
import storeServices from "../../services/storeServices"

export default {
    setup() {
        const storeItems = storeServices.getAll(); 

        return { storeItems }
    },

    components: {
        StoreItem
    }
}
</script>