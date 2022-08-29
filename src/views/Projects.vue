<template>
    <section class="project">
        <h1>Projetos</h1>
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

export default defineComponent({
    name: 'ProjetosView',
    setup() {
        const store = useStore()
        return {
            projects: computed(() => store.state.projects)
        }
    }
})

</script>

<style scoped>
.project {
    padding: 1.25rem;
}

label {
    position: relative;
    background: none !important;
}
</style>