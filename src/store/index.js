import { createStore } from 'vuex'

export default createStore({
  state: {
    education: null,
    projects: null,
  },
  
  mutations: {
    setEducation: (state, education) => {
      state.education = education;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
  },
  actions: {
    
  },
  
})
