<template>
    <section>
       
        <input @click="addAgent" type= "button" value="Add Agent">

    </section>
</template>

<script>

import {ref} from 'vue'
export default {
    setup(){
        const agents = ref([]);
        const newAgent = ref("");


        const addAgent = () => {
        var title = prompt("Legg til en ny agent")
       
        agents.value.push(title);
        console.log(newAgent)

        // agents.value.push(newAgent.value);
        }
        return {agents, addAgent,newAgent}
    }
}
</script>