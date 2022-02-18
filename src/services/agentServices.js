import {ref} from 'vue'


const AgentService = (function(){

    const agentsInfo = ref([
        {title: "Sova", type: "Initiator", difficulty: "medium", image:"sova.png", informasjon:"LOL"},
        {title: "Phoenix", type: "Duelist", difficulty:"easy", image:"pheonix.png"},
        {title: "Viper", type: "Controller", difficulty: "hard", image:"viper.png"},
        {title: "Astra", type: "Controller",difficulty: "hard", image:"astra.png"},
        {title: "Chamber", type: "Sentinel", difficulty: "medium", image:"chambre.png"},
        {title: "Omen", type: "Controller", difficulty: "easy", image:"omen.png"},
        {title: "Kayo", type: "Initiator", difficulty: "medium", image:"kayo.png"},
        {title: "Yoru", type: "Duelist", difficulty: "hard", image:"yoru.png"},
        {title: "Skye", type: "Initiator", difficulty: "hard", image:"skye.png"},
        {title: "Jett", type: "Duelist", difficulty: "easy", image:"jett.png"},
        {title: "Breach", type: "Initiator", difficulty: "medium", image:"breach.png"},
        {title: "Raze", type: "Duelist", difficulty: "medium", image:"raze.png"},
        {title: "Killjoy", type: "Sentinel", difficulty: "hard", image:"killjoi.png"},
        {title: "Reyna", type: "Duelist", difficulty: "medium", image: "pdjQ6.png"},
        {title: "Cypher", type: "Sentinel", difficulty: "hard", image:"cypher.png"},
        {title: "Neon", type: "Duelist", difficulty: "hard", image:"neon.png"},
        {title: "Brimstone", type: "Controller", difficulty: "easy", image:"brim.png"},
        {title: "Sage", type: "Sentinel", difficulty: "easy", image:"sage.png"},
       
    ]);
    const getAlll = () => agentsInfo

    

    return {
        getAlll,

    }
}())
export default AgentService