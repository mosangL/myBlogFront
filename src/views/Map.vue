<template>
	<div class="map flex-wrap">
		<div class="content">
			<div class="left">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>站点地图</el-breadcrumb-item>
				</el-breadcrumb>
				<h3 @click="getAllBlog('')">最新文章</h3>
				<ul>
					<router-link tag="li" :to="{name: 'blogDetail',params:{id:item.id}}" v-for="item in blogList" :key="item.id">{{item.title}}</router-link> 	
				</ul>
			</div>
			<div class="right">
				<h4>分类目录</h4>
				<ul>
					<li @click="tag=item.tag" v-for="item in tags" :key="item.id">{{item.tag}}</li> 
				</ul>
				<h4>页面</h4>
				<ul>
					<router-link tag="li" to="/" >归档</router-link> 
					<router-link tag="li" to="/about" >关于</router-link> 
					<router-link tag="li" to="/comments" >留言</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			blogList: [],
			tags:[],
			tag:'',
		}
	},
	watch:{
		tag(tagName){
			// console.log(tagName);
			this.getAllBlog(tagName);
		}
	},
	methods:{
		getAllBlog(tag){
			this.ajax('get', this.api.queryAllBlog, 'tag='+tag, res => {
				// console.log(res.data);
				this.blogList = res.data;
				this.$store.commit('updBlog',{blogs: this.blogList});
			})
		},
		getTags(){
			this.ajax('post', this.api.getTags, 'num=20', res => {
				this.tags = res.data || [];
			})
		}
	},
	created() {
		this.getAllBlog(this.tag);
		this.getTags();
		setInterval(() => {
			if (this.$store.state.keyWordsSearchFlag) {
				this.blogList = this.$store.state.blogList || [];
			}
		}, 1500)
	}
}
</script>

<style scoped lang="less">
	.flex-wrap{
		min-height: calc(100vh - 155px);
		box-sizing: border-box;
		.content{
			h4, h3{
				padding-bottom: 10px;
			}
			h3:hover{
				cursor: pointer;
				text-decoration: underline;
			}
			h4:last-of-type{
				padding-top: 10px;
			}
			ul{
				
				li{
					list-style:disc!important;
					padding: 3px 0;
					cursor: pointer;
				}
			}
			
			.left{
				.el-breadcrumb{
					margin-bottom: 20px;
				}
				ul li{
					text-decoration: underline;
				}
			}
			.right{
				ul li:hover{
					text-decoration: underline;
				}
			}
		}
	}
</style>