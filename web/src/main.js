import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App.vue'
import Todo from './components/todo.vue'
import HomePage from './components/HomePage.vue'
import Start from './components/Start.vue'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/theme-carbon.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MuseUI)
Vue.use(VueAwesomeSwiper)

Vue.config.devtools = true;
const routes = [ {
    path: '/',
    name: 'homePage',
    component: require('./components/HomePage.vue')
  },
   {
    path: '/todo',
    name: 'todoPage',
    component: require('./components/todo.vue')
  },
   {
    path: '/sign',
    name: 'signPage',
    component: require('./components/Sign.vue')
  },
   {
    path: '/personal',
    name: 'personal',
    component: require('./components/Personal.vue'),
    children:[
      {'path': '/personal/index',component: require('./components/Personal/index.vue')},
      {'path': '/personal/notebook',component: require('./components/Personal/notebook.vue')},
      {'path': '/personal/axios',component: require('./components/Personal/axios.vue')}
    ]
  },
  {
    path: '/start',
    name: 'startPage',
    component: require('./components/Start.vue')
  },
  {
    path: '*',
    redirect: '/'
  }];


const router = new VueRouter({
  routes
});


new Vue({
  el: '#app',  // el为实例提供挂载元素,值可以是css选择符,或者实际的html元素,或返回html元素的函数
  //如果实例在初始化的时候(比如现在)指定了这个选项,实例将立即进入编译过程,否则需要调用vm.$mount(),手动进行编译
  //注意元素只用作挂载点。如果提供了模板则元素被替换，除非 replace 为 false。元素可以用 vm.$el 访问
  //这里的el 绑定的是index.html下的div节点,id是app el :"#app"
  //我们也可以把他改了 在index.html里把他写成class='app',el就绑'.app'
  router,
  render: h => h(App)  //用h是jsx里面的通用的作为createELement的简写
  //这里的render是为了把虚拟的dom 渲染进来,这个dom就是从'./app.vue'里面渲染进来的
  //我们也可以这么写
  //render: function (createElement) {
  //return createElement(App)
  //}
});
