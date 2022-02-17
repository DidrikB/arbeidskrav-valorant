import { ref } from 'vue'

const StoreService = ( function(){

    const storeItems = ref( [
        { title: "Trigis", price: 2500, type: "Collection", image: "tigris.jpg", onSale: true},
        { title: "Silvanus", price: 600, type: "Phantom", image: "silvanus.jpg", onSale: false},
        { title: "Infantry", price: 750, type: "Operator", image: "infantry.jpg", onSale: false},
        { title: "Singularity", price: 875, type: "Phantom", image: "singularity.jpg", onSale: true},
        { title: "Sensation", price: 500, type: "Vandal", image: "sensation.jpg", onSale: false},
        
    ] ); 

    const getAll = () => storeItems

    return {
        getAll,
    }

} () )

export default StoreService