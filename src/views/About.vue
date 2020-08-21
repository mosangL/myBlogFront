<template>
	<div class="about flex-wrap">
		<div class="content">
			<div class="left">
				<div class="text">
					<h2><strong>关于我</strong></h2>
					<hr>
					<p><a>我就是我，是颜色不一样的烟火。</a></p>
					<p>这句slogan可能是很多博主开博的动力，但一直以来我都打心眼里觉得自己词穷又懒，没有那么多一定要对外公开输出的东西。</p>
					<p>后来我陆续接触到很多新东西，学到新知识，在自己偷偷欣喜之余，也想把自己成长的点滴记录分享出来，想必在不同的时间之上地点之外，可能正好有一个曾经的我，正好需要这些经验。</p>
					<p>博客是一个合适的载体，所以我决定试着做一个个人博客，梳理我觉有价值的东西。<br>就我个人而言这也是一件特别有意义的事，可以记录技术的成长，也可以记录我个人的成长。</p>
					<h2><strong>关于博客</strong></h2>
					<hr>
					<p>框架大致搭建好了，现在还在内容填充阶段，我写东西比较慢，暂时没有多少我自己满意的内容，但是也欢迎大家的指正和批评。 </p>
					<p>有关域名，Oray免费送的，所以凑合用吧 … 以后再整一个公网IP。</p>
					
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
