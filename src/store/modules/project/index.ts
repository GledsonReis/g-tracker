import http from "@/http"
import IProject from "@/interfaces/iProject"
import { State } from "@/store"
import { GET_PROJECTS, CREATE_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from "@/store/actions"
import { ADD_PROJECT, CHANGE_PROJECT, REMOVE_PROJECT, DEFINE_PROJECTS } from "@/store/mutations"
import { Module } from "vuex"

export interface ProjectState {
  projects: IProject[]
}

export const project: Module<ProjectState, State> = {
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
    [REMOVE_PROJECT](state, id: string) {
      state.projects = state.projects.filter(proj => proj.id != id)
    },
    [DEFINE_PROJECTS](state, projects: IProject[]) {
      state.projects = projects
    }
  },
  actions: {
    [GET_PROJECTS]({ commit }) {
      http.get('projects')
        .then(response => commit(DEFINE_PROJECTS, response.data))
    },
    [CREATE_PROJECT](context, projectName: string) {
      return http.post('projects', {
        name: projectName,
      })
    },
    [UPDATE_PROJECT](context, project: IProject) {
      return http.put(`projects/${project.id}`, project)
    },
    [DELETE_PROJECT]({ commit }, id: string) {
      return http.delete(`projects/${id}`)
        .then(() => commit(REMOVE_PROJECT, id))
    }
  }
}