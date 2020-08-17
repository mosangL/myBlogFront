<!-- 随机标签云 -->
<template>
	<article class="panel">
		<header>
			随机标签云
		</header>
		<div class="tags">
			<router-link v-for="(tag, index) in tags" :key="tag.id" tag="span" to="/" :style="{color: randomColor(), fontSize: randomSize()}">{{tag.tag}}</router-link>
		</div>
	</article>
</template>

<script>
export default{
	data(){
		return{
			fontSize:'12px',
			tags: [],
		}
	},
	computed:{
		randomColor(){
			return () => {
				let red = Math.random() * 255 + 50;
				let green = Math.random() * 255 + 50;
				let blue = Math.random() * 255 + 50;
				return 'rgb('+red+','+green+','+blue+')';
			}
		},
		randomSize(){
			return () => Math.random() * 18 + 12 + 'px';
		}
	},
	created() {
		this.ajax('post', this.api.getTags, 'num=20', res => {
			this.tags = res.data || [];
		})
	}
}
</script>

<style scoped lang="less">
	article{
		.tags{
			padding: 15px;
			word-wrap: break-word;
			word-break: break-all;
			span{
				margin: 5px;
				cursor: pointer;
			}
		}
	}
</style>
