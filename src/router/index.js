import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import fr from "element-ui/src/locale/lang/fr";

Vue.use(VueRouter);

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/map',
		name: 'Map',
		component: () => import('../views/Map.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/comments',
		name: 'Comments',
		component: () => import('../views/Comments.vue')
	},
	{
		path: '/edit',
		name: 'Edit',
		component: () => import('../views/Edit.vue')
	},
	//博客详情
	{
		path: '/blogDetail/:id',
		name: 'blogDetail',
		component: () => import('@/components/BlogDetail.vue')
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

// 全局守卫
// router.beforeEach((to, from, next) => {
// 	document.title = to.meta.title || 'myBlog';
// 	next();
// });

export default router;
