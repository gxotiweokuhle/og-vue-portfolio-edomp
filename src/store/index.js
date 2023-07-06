import { createStore } from 'vuex'



export default createStore({
  state: {
    education: null,
    edu: null,
    education2: null,
    item: null,
    testimonials: null,
    test: null,
    projects:null,
    project:null,
  },
  
  mutations: {
    setEducation: (state, education) => {
      state.education = education;
    },
    setEdu: (state, edu) => {
      state.edu = edu;
    },
    setTestimonials: (state, testimonials) =>{
      state.testimonials = testimonials;
    },
    setTest: (state, test) =>{
      state.test = test;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setProject: (state, project) =>{
      state.project = project;
    }
  },
  actions: {
    fetchEducation: async (context) => {
      fetch('https://gxotiweokuhle.github.io/data/portfolio.json')
      
      .then((res) => res.json())
      .then((data) => context.commit('setEducation', data.education))
    }, 
    fetchEdu: async (context, id) => {
      fetch('https://gxotiweokuhle.github.io/data/portfolio.json' + id)
      .then((res) => res.json())
      .then((edu) => context.commit('setEdu', edu))
    },
   
    fetchTestimonials: async (context) => {
      fetch('https://gxotiweokuhle.github.io/data/portfolio.json')
      .then((res) => res.json())
      .then((data) => context.commit('setTestimonials', data.testimonials))
    }, 
    fetchTest: async (context, id) => {
      fetch('https://gxotiweokuhle.github.io/data/portfolio.json' + id)
      .then((res) => res.json())
      .then((test) => context.commit('setTest', test))
    },
    fetchProjects: async (context) => {
      fetch('https://gxotiweokuhle.github.io/data/portfolio.json')
      .then((res) => res.json())
      .then((data) => context.commit('setProjects', data.projects))
    },
    fetchProject: async (context, id) => {
      fetch('https://gxotiweokuhle.github.io/data/portfolio.json' + id)
      .then((res) => res.json())
      .then((project) => context.commit('setProject', project))
    },

  }
})