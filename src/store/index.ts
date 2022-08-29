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
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}