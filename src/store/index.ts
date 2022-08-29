import IProject from "@/interfaces/iProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface Estado { 
    projects: IProject[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projects: []
    },
    mutations: {
        'ADD_PROJECT'(state, projectName: string) {
            const project = {
                id: new Date().toISOString(),
                name: projectName
            } as IProject
            state.projects.push(project)
        },
        'CHANGE_PROJECT'(state, project: IProject) {
            const index = state.projects.findIndex(proj => proj.id == project.id)
            state.projects[index] = project
            console.log(index)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}