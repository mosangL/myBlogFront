<template>
	<div>
		<h3 v-show="count!=0">留言：目前有{{count}}条留言</h3>
		<div class="comments-list">
			<div class="comment-item" v-for="item in commentList" :key="item.id">
				<div class="comment-author">
					<!-- <img src="https://www.zh30.com/avatar/default.jpg" alt="用户评论头像" > -->
					<strong> {{item.user_name}}</strong>：
					<span v-if="item.parent != 0">回复@{{item.parent}}</span>
					<span class="datetime">
						发表于 {{item.ctime | parseTime}}
						<span class="reply">
							<a rel="nofollow" class="comment-reply-link" href="#pages" @click="setApply(item.user_name)">[回复]</a>
						</span>
					</span>
				</div>
				<p class="comment-content">{{item.comments}}</p>
			</div>
		
		</div>
		<!-- 分页 -->
		<div class="block" id="pages">
			<el-pagination 
				layout="prev, pager, next" 
				:total="count" 
				:page-size="limit"
				:hide-on-single-page="true"
				prev-text="上一页"
				next-text="下一页"
				@current-change="changePage">
			</el-pagination>
		</div>
	</div>
</template>

<script>
import parseTime from '@/assets/js/parseTime.js';
export default{
	props: ['blog_id'],
	data(){
		return{
			count: 0, //总数
			limit: 5, //每页展示的条数
			page: 1, //当前页
			commentList: [],
		}
	},
	created() {
		this.getCommentList();
		this.getCommentCountByBlogId();
	},
	methods:{
		changePage(val){
			this.page = val;
			this.getCommentList();
		},
		//根据博客id获取评论列表
		getCommentList(){
			this.ajax('post', this.api.getCommentsByBlogId, {
				blog_id: this.blog_id,
				limit: this.limit,
				offset: +this.page - 1,
			}, res => {
				// console.log(res);
				this.commentList = res.data || [];
			})
		},
		//获取留言/评论总数
		getCommentCountByBlogId(){
			this.ajax('post', this.api.getCommentCountByBlogId, {
				blog_id: this.blog_id
			}, res => {
				this.count = res.data.count || 0;
			})
		},
		//点击回复
		setApply(name){
			this.$store.commit('setApplyParent', name);
		}
	},
	filters:{
		parseTime,
	}
}
</script>

<style scoped lang="less">
	h3{
		font-weight: normal;
		margin-bottom: 15px;
		font-size: 16px;
	}
	.comments-list{
		.comment-item{
			border: 1px solid #7ca4c1;
			border-radius: 4px;
			border-style: dashed;
			padding: 15px 10px;
			margin-bottom: 15px;
			background-color: #d9edf7;
			color: #31708f;
			.comment-author{
				img{
					border-radius: 50%;
					vertical-align: middle;
				}
				a{
					color: #337ab7;
					text-decoration: none;
				}
			}
			.comment-content{
				margin-top: 5px;
			}
		}
	}
</style>