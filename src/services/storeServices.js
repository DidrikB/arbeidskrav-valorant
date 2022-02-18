//DIDRIKS KODER

import { ref } from 'vue'

const StoreService = ( function(){

    const storeItems = ref( [
        { title: "Trigis", price: 2500, type: "Collection", image: "tigris.jpg"},
        { title: "Silvanus", price: 600, type: "Phantom", image: "silvanus.jpg"},
        { title: "Infantry", price: 750, type: "Operator", image: "infantry.jpg"},
        { title: "Singularity", price: 875, type: "Phantom", image: "singularity.jpg"},
        { title: "Sensation", price: 500, type: "Vandal", image: "sensation.jpg"},
        
    ] ); 

    const getAll = () => storeItems

    //const getType = () => storeItems.type

    const filterItems = (searchInput) => {
        storeItems.value.filter( searchInput )
    }

    return {
        getAll,
        filterItems,
        
    }

} () )

export default StoreService