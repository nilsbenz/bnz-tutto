import Vue from 'vue';
import App from '@/components/App';
import router from '@/plugins/router';
import store from '@/store/store';

Vue.config.productionTip = false;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker-cache.js').then(() => {
    console.log('Service Worker Registered');
  });
}

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
