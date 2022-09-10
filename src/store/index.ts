import IProject from "@/interfaces/iProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, CHANGE_PROJECT, DELETE_PROJECT, NOTIFY } from "./mutations";
import { INotification } from "../interfaces/INotification";

interface Estado { 
    projects: IProject[]
    notifications: INotification[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projects: [],
        notifications: []
    },
    mutations: {
        [ADD_PROJECT](state, projectName: string) {
            const project = {
                id: new Date().toISOString(),
                name: projectName
            } as IProject
            state.projects.push(project)
        },
        [CHANGE_PROJECT](state, project: IProject) {
            const index = state.projects.findIndex(proj => proj.id == project.id)
            state.projects[index] = project
            console.log(index)
        },
        [DELETE_PROJECT](state, id: string) {
            state.projects = state.projects.filter(proj => proj.id != id)
        },
        [NOTIFY] (state,  newNotification: INotification) {
            newNotification.id = new Date().getTime()
            state.notifications.push(newNotification)

            setTimeout(() => {
                state.notifications = state.notifications.filter(notification => notification.id != newNotification.id)
            }, 3000)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}