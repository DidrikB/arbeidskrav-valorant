<template>
    <section>
        <input v-model="addAgentTitle" type="text">
        <input v-model="addAgentRole" type="text">
        <input v-model="addAgentDifficulty" type="text">
        <input @click="addAgentFunction" type= "button" value="Add Agent">

    </section>
</template>

<script>

import {ref} from 'vue'
import agentServices from'../../services/agentServices'
export default {
    setup(){

        const addAgentTitle = ref("")
        const addAgentRole = ref("")
        const addAgentDifficulty = ref("")

        const addAgentFunction = () => agentServices.addAgent(addAgentTitle)
        

        return{
            addAgentTitle, 
            addAgentRole,
            addAgentDifficulty,
            addAgentFunction
        }

    }
}
</script>