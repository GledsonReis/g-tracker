<template>
    <section class="project">
        <h1>Projetos</h1>

        <form @submit.prevent="save" class="form">
            <div class="field">
                <label for="projectName">Nome do Projeto</label>
                <div class="control">
                    <input
                        type="text"
                        class="input"
                        v-model="projectName"
                        id="projectName"
                    />
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <button class="button" type="submit">
                        Salvar
                    </button>
                </div>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";

export default defineComponent({
    name: 'ProjetosView',
    data () {
        return {
            projectName: "",
        };
    },
    methods: {
        save() {
            this.store.commit('ADD_PROJECT', this.projectName)
            this.projectName = "";
            this.$router.push('/projects')
        }
    },
    setup () {
        const store = useStore()
        return {
            store
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
        background: none!important;
    }
</style>