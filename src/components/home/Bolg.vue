<template>
	<div id="blogs">
		<!-- 博客 -->
		<div class="panel-wrap">
			<div class="panel" v-for="(item, index) in articleList" :key="item.id">
				<div class="panel-body">
					<router-link tag="h2" :to="{name: 'blogDetail',params:{id:item.id}}" class="hover-blue">{{item.title}}</router-link> 
					<p class="description" v-html="item.content"></p>
				</div>

				<div class="panel-footer">发布于{{new Date(+item.ctime*1000).toLocaleDateString().replace(/\//g,"-")}}&nbsp;&nbsp; | &nbsp;&nbsp; 浏览({{item.views}})&nbsp;&nbsp; | &nbsp;&nbsp;Tags：{{item.tags.replace(/,/, ", ")}}</div>
			</div>
		</div>
		<!-- 分页 -->
		<div class="block">
			<el-pagination 
				layout="prev, pager, next" 
				:total="totalCount" 
				:page-size="limit"
				:hide-on-single-page="true"
				prev-text="上一页"
				next-text="下一页"
				@size-change="sizeChange"
				@current-change="changePage">
			</el-pagination>
		</div>

	</div>
</template>

<script>
	import parseTime from '@/assets/js/parseTime.js';
	export default {
		data() {
			return {
				page:1,//当前页
				limit:7, //每页展示的条数
				totalCount:0,//总条数
				articleList: [],
			}
		},
		methods: {
			sizeChange(val){
				console.log(`每页 ${val} 条`);
			},
			changePage(val){
				this.page = val;
				this.getList(+this.page, this.limit); 
			},
			
		},
		computed:{
			//获取博客列表数据
			getList(){
				return (page, limit) => {
					this.ajax('post', this.api.queryBlogByPage, {
						page: page - 1,
						limit: limit
					}, res => {
						// console.log(res);
						this.articleList = res.data || [];
						this.$store.commit('updBlog',{blogs: this.articleList});
					})
				}
			},
			//获取博客总数
			getCount(){
				return () => {
					this.ajax('post', this.api.getBlogCount, '', res => {
						// console.log(res);
						this.totalCount = res.data['count'] || 0;
					})
				}
			}
		},
		created() {
			this.getList(+this.page, this.limit); 
			this.getCount(); 
			setInterval(() => {
				if (this.$store.state.keyWordsSearchFlag) {
					this.articleList = this.$store.state.blogList || [];
				}
			}, 1500)
		},
		filters:{
			parseTime
		}
	}
</script>

<style scoped lang="less">
	.block{
		margin-bottom: 20px;
	}
	#blogs .panel-wrap {
		padding-top: 20px;
		.panel {
			.panel-body {
				background-color: #fff;
				color: #424242;
				padding: 15px;
				h2 {
					font-weight: normal;
					margin: 5px 0;
				}
				.description {
					font-size: 16px;
					word-break: break-word;
					word-wrap: break-word;
					overflow: hidden;
					max-height: 265px;
				}
			}
			.panel-footer {
				color: #eee;
				border-top: #bfbfbf;
				background-color: #1f1f1f;
				padding: 5px 15px;
			}
		}
	}
</style>
