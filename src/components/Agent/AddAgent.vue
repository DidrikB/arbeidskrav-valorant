<template>
    <section>
        <input v-model="newAgent" type="text">
        <input @click="addAgent" type= "button" value="Add Agent" placeholder="Add a agent">

    </section>
</template>

<script>

import {ref} from 'vue'
export default {
    setup(){
        const agents = ref([]);
        const newAgent = ref("");

        const addAgent = () => {
            alert("")
           agents.value.push(newAgent.value);
        }
        return {agents, addAgent,newAgent}
    }
}
</script>