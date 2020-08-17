<template>
	<div class="blog-detail flex-wrap">
		<div class="content">
			<div class="left">
				<div class="blog">
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>博客</el-breadcrumb-item>
					</el-breadcrumb>
					<!-- 博客详情 -->
					<article>
						<h2>{{detail.title}}</h2>
						<p class="blog-info">
							<span class="meat_span">作者: 肖小年</span>
							<span class="meat_span" v-if="detail.tags">分类:
								<a href="" v-for="(tag, i) in detail.tags">
									{{tag}}
									<i v-if="i+1 != detail.tags.length">, </i>
								</a>
							</span>
							<span class="meat_span">发布于: {{detail.ctime | parseTime}}</span>
							<span class="meat_span">浏览({{detail.views}})</span>
							<!-- <span class="meat_span">
								<a href="">评论(1)</a>
							</span> -->
						</p>
						<div class="blog-content" v-html="detail.content"></div>
					</article>
				</div>
				<!-- 留言区 -->
				<CommentsList :blog_id="id" v-if="hackReset == true"/>
				<!-- 发表评论 -->
				<PostComment :blog_id="id" @addNewComment="upDataComment"/>
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
		components: {
			HotBlogs,
			NewComments,
			Tags,
			CommentsList,
			PostComment
		},
		data() {
			return {
				id: this.$route.params.id, //blog_id
				detail: {},
				hackReset: true,
			}
		},
		watch:{
			//监听路由是否变化
			'$route' (to, from) { 
				console.log(to.params.id != from.params.id);
				if(to.params.id != from.params.id){
					this.id = to.params.id;
					this.getBlogDetail();
					this.upDateViews();
					this.upDataComment();
				}
			}
		},
		created() {
			// console.log(this.id);
			this.getBlogDetail();
			this.upDateViews();
			
		},
		methods:{
			//跟新留言板块
			upDataComment(){
				this.hackReset = false;
				this.$nextTick(() => {
					this.hackReset = true;
				});
			},
			// 获取博客内容详情
			getBlogDetail(){
				this.ajax('post', this.api.getBlogDetail, "id=" + this.id, res => {
					// console.log(res.data);
					if (res) {
						this.detail = res.data || {};
						if (this.detail.tags) {
							this.detail.tags = this.detail.tags.split(',');
						}
					}
				});
			},
			//更新博客浏览次数
			upDateViews(){ 
				setTimeout(() => {
					if(this.detail.id){
						this.ajax('post', this.api.updateBlogViews, {
							blog_id: this.detail.id,
							views: this.detail.views + 1
						}, res => {
							console.log(res.msg)
						})
					}
				}, 2000);
			}
		},
		filters:{
			parseTime
		}
	}
</script>

<style scoped lang="less">
	.blog-detail .blog {
		background-color: #fff;
		min-height: 20px;
		padding: 19px;
		margin-bottom: 20px;
		border: 1px solid #e3e3e3;
		border-radius: 4px;
		box-shadow: 1px 1px 5px rgba(97, 97, 97, .48);

		// 博客详情
		article {
			h2 {
				font-weight: normal;
				padding: 12px 0 6px;
			}

			.blog-info {
				span {
					margin-right: 6px;

					a {
						color: #337ab7;
					}
				}
			}

			.blog-content {
				word-wrap: break-word;
				word-break: break-all;
				overflow: hidden;
				margin-top: 20px;
				padding: 15px 0;
				border-top: 1px solid #b9b9b9;
				text-align: left;
				img {
					border-radius: 4px;
					overflow: hidden;
					max-width: 100%;
					margin: 10px;
				}
				p, div{
					text-align: left;
				}

			}
		}
	}
</style>
