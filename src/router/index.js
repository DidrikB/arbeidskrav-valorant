import { createRouter, createWebHistory } from 'vue-router'
import AgentsPage from '../pages/AgentsPage.vue'
import StorePage from '../pages/StorePage.vue'

const routes = [
    {
        name: "StorePage", 
        path: "/",
        component: StorePage
    },
    {
        name: "AgentsPage",
        path: "/agents",
        component: AgentsPage
    }
]; 

const router = createRouter({
    history: createWebHistory(), 
    routes
}); 

export default router;







































