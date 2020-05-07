import Home from '../components/Home.vue';
import Game from '../components/Game.vue';
import Points from '../components/Points.vue';
import PageNotFound from '../components/PageNotFound.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/game',
      name: 'Game',
      component: Game,
    },
    {
      path: '**',
      name: 'PageNotFound',
      component: PageNotFound,
    },
  ],
});
