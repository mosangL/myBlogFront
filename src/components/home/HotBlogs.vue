<template>
	<div class="panel">
		<header>最近热门</header>
		<ul>
			<router-link tag="li" :to="{name: 'blogDetail',params:{id:item.id}}" class="hover-blue" v-for="item in hotLists" :key="item.id">{{item.title}}</router-link> 
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return{
			limit: 5,
			hotLists: []
		}
	},
	methods:{

	},
	created() {
		this.ajax('post', this.api.queryBlogByViews, {
			limit: this.limit
		}, res => {
			this.hotLists = res? res.data : [];
		})
	}
}
</script>

<style scoped>
	
</style>
