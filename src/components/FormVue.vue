<template>
    <div class="box form">
        <div class="columns">
            <div 
                class="column is-5" 
                role="form"
                aria-label="Formulário para criação de uma nova tarefa"
            >
                <input 
                    type="text"
                    class="input"
                    placeholder="Qual tarefa você deseja iniciar?"
                    v-model="description"
                />
            </div>
            <div 
                class="column is-3" 
                role="form"
                aria-label="Formulário para criação de uma nova tarefa"
            >
                <div class="select">
                    <select v-model="projectId">
                        <option value="">Selecione um projeto</option>
                        <option
                            :value="project.id"
                            v-for="project in projects"
                            :key="project.id"
                        >
                            {{ project.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <TimerVue @onStopTimer="finishTask" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import TimerVue from './TimerVue.vue';

export default defineComponent({
    name: "FormVue",
    emits: ["onSaveTask"],
    components: {
        TimerVue
    },
    data() {
        return {
            description: '',
            projectId: ''
        }
    },
    methods: {
        finishTask(timeInSeconds: number): void {
            this.$emit('onSaveTask', {
                timeInSeconds: timeInSeconds,
                description: this.description,
                project: this.projects.find(project => project.id = this.projectId)
            })
            this.description = ''
        }
    },
    setup() {
        const store = useStore(key)
        return {
            projects: computed(() => store.state.project.projects)
        }
    }
})
</script>


<style>
.form {
    background: var(--bg-primary);
    color: var(--text-primary);
}
</style>