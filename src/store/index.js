import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		applyParent: '',
	},
	mutations: {
		setApplyParent(state, applyName){
			state.applyParent = applyName;
		},
	},
	actions: {},
	modules: {}
})
