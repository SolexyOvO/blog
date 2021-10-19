import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from "../views/Blog.vue"
import BlogAdd from '../views/BlogAdd.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog/:id',
    name: "Blog", // 博客详情页
    component: Blog,
    
  },
  {
    path: '/blogadd',
    name: "BlogAdd",
    component: BlogAdd
  },
 
]

const router = new VueRouter({
  routes
})

export default router
