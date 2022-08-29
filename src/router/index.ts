import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Tasks from '../views/Tasks.vue';
import Projects from '../views/Projects.vue';
import ProjectForm from '../views/Projetos/Form.vue'

const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tasks
}, {
    path: '/projetos',
    name: 'Projetos',
    component: Projects
}, {
    path: '/projetos/novo',
    name: 'Novo Projeto',
    component: ProjectForm
}, {
    path: '/projetos/:id',
    name: 'Editar Projeto',
    component: ProjectForm
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;