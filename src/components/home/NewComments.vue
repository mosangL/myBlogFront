<template>
	<div class="panel">
		<header>最新评论</header>
		<ul>
			<li v-for="(item, index) in commentlists" :key="index">
				<div>{{item.user_name}}<span class="ctime">{{new Date(+item.ctime*1000).toLocaleDateString().replace(/\//g,"-")}}</span></div>
				<div class="des hover-blue">{{item.comments}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
// import parseTime from '@/assets/js/parseTime.js';
export default{
	data(){
		return{
			limit: 5,
			commentlists: []
		}
	},
	created() {
		// 获取最新评论
		this.ajax('post', this.api.getNewComments, 'limit=' + this.limit, res => {
			// console.log(res);
			this.commentlists = res? res.data : [];
		})
	}
}
</script>

<style scoped>
	li div .ctime{
		float: right;
		margin-right: 15px;
		font-size: 14px;
	}
	li .des{
		color: #777;
		margin-top: 5px;
	}
	
</style>