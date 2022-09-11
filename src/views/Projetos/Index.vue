<template>
    <section>
        <router-link to="/projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </router-link>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>
                        <router-link :to="`/projetos/${project.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="deleteProject(project.id)">
                            <span class="icon is-small">
                            <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
import { DELETE_PROJECT, GET_PROJECTS } from "@/store/actions";

export default defineComponent({
    name: 'ProjectIndex',
    methods: {
        deleteProject(id: string) {
            this.store.dispatch(DELETE_PROJECT, id)
        }
    },
    setup() {
        const store = useStore()
        store.dispatch(GET_PROJECTS)
        return {
            projects: computed(() => store.state.projects),
            store
        }
    }
})

</script>

<style scoped>
label {
    position: relative;
    background: none !important;
}
</style>