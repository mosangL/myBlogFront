import Vue from 'vue'
import Vuex from 'vuex'
import ajax from '@/assets/js/ajax.js';
import api from '@/assets/js/api.js';

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		applyParent: '',
		blogList: [], //关键字搜索博客,
		keyWordsSearchFlag: false,
	},
	mutations: {
		setApplyParent(state, applyName){
			state.applyParent = applyName;
		},
		updBlog(state, params){
			state.blogList = params.blogs || [];
			state.keyWordsSearchFlag = params.keyWordsSearchFlag || false;
		}
	},
	actions: {
		queryBlogByKeyWord(context, keyWords) {
			ajax('post', api.queryBlogByKeyWord, {
				keyWords: keyWords
			}, res => {
				res && context.commit("updBlog", {blogs: res.data || [], keyWordsSearchFlag: true});
			})
			
		},
	},
	modules: {}
})
