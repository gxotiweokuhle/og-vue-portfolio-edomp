import { createStore } from 'vuex'



export default createStore({
  state: {
    education: null,
    testimonials: null,
    test: null,
    projects:null,
    project:null,
    skills: null,
    Languages: null,
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
    },
    setSkills: (state, skills) => {
      state.skills = skills;
    },
    setLanguages: (state, Languages) => {
      state.Languages = Languages;
    },

  },
  actions: {
    fetchEducation: async (context) => {
      fetch('https://gxotiweokuhle.github.io/data/portfolio.json')
      
      .then((res) => res.json())
      .then((data) => {
        let {education} = data
        context.commit('setEducation', education)
      })
    }, 
    fetchSkills: async (context) => {
      fetch('https://gxotiweokuhle.github.io/data/portfolio.json')
      
      .then((res) => res.json())
      .then((data) => {
        let {skills} = data
        context.commit('setSkills', skills)
      })
    },
    fetchLanguages: async (context) => {
      fetch('https://gxotiweokuhle.github.io/data/portfolio.json')
      
      .then((res) => res.json())
      .then((data) => {
        let {Languages} = data
        context.commit('setLanguages', Languages)
      })
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