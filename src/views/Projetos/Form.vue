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
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { NOTIFY } from "@/store/mutations";
import { NotificationType } from "@/interfaces/INotification";
import { CREATE_PROJECT, UPDATE_PROJECT } from "@/store/actions";
import { useRouter } from "vue-router";

export default defineComponent({
    name: 'ProjetosView',
    props: {
        id: {
            type: String
        }
    },
    methods: {
        // save() {
        //     if (this.id) {
        //         this.store.dispatch(UPDATE_PROJECT, {
        //             id: this.id,
        //             name: this.projectName
        //         }).then(() => this.successRequest())
        //     } else {
        //         this.store.dispatch(CREATE_PROJECT, this.projectName)
        //           .then(() => this.successRequest())
        //     }

        // },

    },
    setup (props) {
        const router = useRouter()
        const store = useStore()

        const projectName = ref("")

        if(props.id) {
            const project = store.state.project.projects.find(proj => proj.id == props.id)
            projectName.value = project?.name || ''
        }

        const successRequest = () => {
            projectName.value = "";
            store.commit(NOTIFY, {
                title: "Novo projecto adicionado",
                text: "Projeto foi salvo com sucesso! :D",
                type: NotificationType.SUCESSO
            })
            router.push('/projetos')
        }

        const save = () => {
            if (props.id) {
                store.dispatch(UPDATE_PROJECT, {
                    id: props.id,
                    name: projectName.value
                }).then(() => successRequest())
            } else {
                store.dispatch(CREATE_PROJECT, projectName.value)
                  .then(() => successRequest())
            }

        }

        return {
            projectName,
            save
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