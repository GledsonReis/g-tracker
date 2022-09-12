import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { NOTIFY } from "./mutations";
import { INotification } from "../interfaces/INotification";
import { project, ProjectState } from "./modules/project";

export interface State {
    notifications: INotification[]
    project: ProjectState
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        notifications: [],
        project: {
            projects: []
        }
    },
    mutations: {
        [NOTIFY] (state,  newNotification: INotification) {
            newNotification.id = new Date().getTime()
            state.notifications.push(newNotification)

            setTimeout(() => {
                state.notifications = state.notifications.filter(notification => notification.id != newNotification.id)
            }, 3000)
        }
    },
    actions: {
    },
    modules: {
        project
    }
})

export function useStore(): Store<State> {
    return vuexUseStore(key)
}