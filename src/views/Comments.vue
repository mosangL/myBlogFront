<template>
	<div class="comments flex-wrap">
		<div class="content">
			<div class="left">
				<article>
					<div class="text">
						<p>新开博，欢迎灌水交流~</p>
						<p class="red">博主Q联系: 1393726367</p>
					</div>
				</article>
				<!-- 留言区，-1指的是网站作者自己的id -->
				<CommentsList :blog_id="-1" v-if="hackReset"/>
				<!-- 发表评论 -->
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
	export default {
		name: 'Comments',
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
		},
	}
</script>

<style scoped="scoped" lang="less">
	.comments {
		.left {
			article {
				background-color: #fff;
				box-sizing: border-box;
				padding: 34px 19px;
				margin-bottom: 20px;
				background-color: #f5f5f5;
				border: 1px solid #e3e3e3;
				border-radius: 4px;
				box-shadow: 1px 1px 5px rgba(97, 97, 97, .48);

				p {
					margin: 0 0 10px;
				}

				p:first-child {
					margin-bottom: 30px;
				}


			}
		}
	}
</style>
