<template>
	<div class="about flex-wrap">
		<div class="content">
			<div class="left">
				<div class="text">
					<h2><strong>关于我</strong></h2>
					<hr>
					<p class="">博主<a href="">肖小年</a>，江西省，吉安人氏。</p>
					<p>野生程序员一枚<br>我的座右铭是：人因梦想而伟大，机遇永远属于有准备、立即行动、并能坚持到底的人！</p>
					<h2><strong>关于博客</strong></h2>
					<hr>
					<p>从2020年8月 – 今<br>博主很懒+词穷，佛系更新… </p>
					<p>有关域名，Oray免费送的，所以凑合用吧。</p>
					
				</div>
				<CommentsList :blog_id="-1" v-if="hackReset" /> 
				<!-- -1指的是给网站作者留言 -->
				<PostComment :blog_id="-1" @addNewComment="addNewComment" />
			</div>
			<div class="right">
				<Tags />
				<HotBlogs />
				<NewComments />
			</div>
		</div>
	</div>
</template>

<script>
	import HotBlogs from '@/components/home/HotBlogs.vue';
	import NewComments from '@/components/home/NewComments.vue';
	import Tags from '@/components/home/Tags.vue';
	import CommentsList from '@/components/comments/CommentsList.vue';
	import PostComment from '@/components/comments/PostComment.vue';
	import parseTime from '@/assets/js/parseTime.js';
	export default {
		name: 'About',
		components: {
			HotBlogs,
			NewComments,
			Tags,
			CommentsList,
			PostComment
		},
		data() {
			return {
				hackReset: true
			}
		},
		methods:{
			//有新的留言提交成功
			addNewComment(){
				this.hackReset = false;
				this.$nextTick(() => {
					this.hackReset = true;
				});
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.about{
		.left{
			.text{
				background-color: #fff;
				box-sizing: border-box;
				min-height: 20px;
				padding: 10px 19px 19px;
				margin-bottom: 20px;
				background-color: #f5f5f5;
				border: 1px solid #e3e3e3;
				border-radius: 4px;
				box-shadow: 1px 1px 5px rgba(97,97,97,.48);
				h2{
					margin: 20px 0 12px;
				}
				hr{
					margin-top: 20px;
					margin-bottom: 20px;
					border: 0;
					border-top: 1px solid #b9b9b9;
					box-sizing: content-box;
					height: 0;
				}
				p{
					margin: 0 0 10px;
				}
				a{
					color: #337ab7;
				}
			}
		}
	}
</style>
