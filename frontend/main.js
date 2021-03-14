import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import router from './router';
import Vuetify from 'vuetify';

import App from './App.vue';

Vue.config.productionTip = false;


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuetify);


let vuetify = new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
});

const app = new Vue({
	vuetify,
	router,
	el: '#app',
	render: h => h(App)
});
