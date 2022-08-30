import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Tasks from '../views/Tasks.vue';
import Projects from '../views/Projects.vue';
import ProjectForm from '../views/Projetos/Form.vue'
import Index from '../views/Projetos/Index.vue'

const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'Tarefas',
    component: Tasks
}, {
    path: '/projetos',
    component: Projects,
    children: [
        {
            path: '',
            name: 'Projetos',
            component: Index
        }, {
            path: 'novo',
            name: 'Novo Projeto',
            component: ProjectForm
        }, {
            path: ':id',
            name: 'Editar Projeto',
            component: ProjectForm,
            props: true
        }
    ]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;