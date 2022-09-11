<template>
    <section>
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
import { NOTIFY } from "@/store/mutations";
import { NotificationType } from "@/interfaces/INotification";
import { CREATE_PROJECT, UPDATE_PROJECT } from "@/store/actions";

export default defineComponent({
    name: 'ProjetosView',
    props: {
        id: {
            type: String
        }
    },
    mounted () {
        if(this.id) {
            const project = this.store.state.project.projects.find(proj => proj.id == this.id)
            this.projectName = project?.name || ''
        }
    },
    data () {
        return {
            projectName: "",
        };
    },
    methods: {
        save() {
            if (this.id) {
                this.store.dispatch(UPDATE_PROJECT, {
                    id: this.id,
                    name: this.projectName
                }).then(() => this.successRequest())
            } else {
                this.store.dispatch(CREATE_PROJECT, this.projectName)
                  .then(() => this.successRequest())
            }

        },
        successRequest() {
            this.projectName = "";
            this.store.commit(NOTIFY, {
                title: "Novo projecto adicionado",
                text: "Projeto foi salvo com sucesso! :D",
                type: NotificationType.SUCESSO
            })
            this.$router.push('/projetos')
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
    label {
        position: relative;
        background: none!important;
    }
</style>