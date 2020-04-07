import { createRouter, createHashHistory } from '@posva/vue-router-next';
import Home from './routes/index.vue';
import Person from './routes/person.vue';
import Discover from './routes/discover.vue';
import Error404 from './routes/404.vue';

export const router = createRouter({
	history: createHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/all'
		},
		{
			path: '/all',
			component: Home
		},
		{
			path: '/person/:id',
			component: Person
		},
		{
			path: '/discover',
			component: Discover
		},
		{
			path: '/:catchAll(.*)',
			component: Error404
		}
	],
});
