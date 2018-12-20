import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Service from './components/Service.vue'
import Project from './components/Project.vue'
import News from './components/News.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
