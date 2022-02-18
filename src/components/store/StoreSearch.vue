<!--DIDRIKS KODER -->

<template>
    <input v-model="searchInput" type="text">
    <input @click="searchFunction" type="button" value="search">
</template>

<script>
import {ref} from 'vue'
import storeServices from '../../services/storeServices'

export default {

    setup() {
       
       const searchInput = ref(""); 

        const searchFunction = () => {
            console.log("Du søkte etter: " + searchInput.value)
            storeServices.filterItems(searchInput.value)
        }

        return {searchInput, searchFunction }
    },

}

</script>*/