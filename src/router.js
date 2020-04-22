import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './routes/index.vue';
import Person from './routes/person.vue';
import Discover from './routes/discover.vue';
import Error404 from './routes/404.vue';


export const routerHistory = createWebHashHistory()
export const router = createRouter({
	history: routerHistory,
	routes: [
		{ path: '/', redirect: '/all' },
		{ path: '/all', component: Home },
		{ path: '/person/:id', component: Person },
		{ path: '/discover', component: Discover },
		{ path: '/:catchAll(.*)', component: Error404 }
	],
});
