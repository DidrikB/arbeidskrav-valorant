<template>
    <section class="row p-4">
        <add-agent></add-agent>
        <agent-store
        v-for="(agent, i) in agentStores" :key="i"
        :title="agent.title"
        :type="agent.type"
        :difficulty="agent.difficulty"
        :informasjon ="agent.informasjon"
        :image="agent.image"
        class="col-3"
        ></agent-store>

    </section>

</template>

<script>
import AgentStore from "./AgentStore.vue"
import agentServices from "../../services/agentServices"
import AddAgent from "./AddAgent.vue"

export default {
setup(){
    const agentStores = agentServices.getAlll();
    return {agentStores}
},
components: {
    AgentStore,
    AddAgent
}
}
</script>