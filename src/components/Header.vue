<template>
	<header class="body-header">
		<div class="nav-box">
			<router-link to="/" class="logo">
				<span class="title">肖小年个人博客</span>
				<span class="alias font16">| 技术博客</span>
			</router-link>
			<nav>
				<ul>
					<router-link tag="li" to="/" class="hover-blue">首页</router-link> 
					<router-link tag="li" to="/map" class="hover-blue">地图</router-link>
					<router-link tag="li" to="/about" class="hover-blue">关于</router-link>
					<router-link tag="li" to="/comments" class="hover-blue">留言</router-link>
				</ul>
			</nav>
			<div class="search">
				<input type="search" placeholder="输入关键词查找" v-model.trim="keyWords">
				<button @click="search"><i class="el-icon-search"></i>搜索</button>
			</div>
		</div>
		
	</header>
</template>

<script>
	export default {
		data(){
			return {
				keyWords: '',
			}
		},
		watch:{
			//监听路由是否变化
			'$route' (to, from) { 
				this.keyWords = '';
			}
		},
		methods: {
			search(){
				this.$store.dispatch('queryBlogByKeyWord', this.keyWords);
				window.scrollTo(0, 0);
			}
		}
	}
</script>

<style lang="less" scoped>
	@activeColor: #00c1de;
	@red: #f00;
	
	header {
		width: 100%;
		padding: 5px 0;
		background: #1C2327;
		color: #fff;
		height: 50px;
		position: relative;
		letter-spacing: 1px;
		::before{
			content: "";
			height: 5px;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			background: #000;
			background-image: linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
		}
		.nav-box{
			max-width: 1200px;
			margin: auto;
			padding: 0 20px;
			.logo {
				float: left;
				line-height: 56px;
				color: #FFF;
				font-size: 22px;
				letter-spacing: 2px;
				.alias{
					margin-left: 8px;
				}
			}
			nav{
				height: 100%;
				font-size: 16px;
				margin-top: 3px;
				display: inline-block;
				ul{
					li{
						line-height: 50px;
						margin: 0 20px;
						display: inline-block;
						&.router-link-exact-active {
							color: @activeColor;
						}
					}
					
				}
			}
			.search {
				height: 30px;
				float: right;
				display: inline;
				margin-top: 14px;
				
				// background: url(../images/bg.png) no-repeat center !important;
				input{
					background-color: #fff;
					width: 150px;
					height: 29px;
					padding-left: 8px;
					border-radius: 4px;
					vertical-align: middle;
					border: 0;
				}
				button{
					border: 0;
					background-color: #fff;
					border-radius: 4px;
					width: 50px;
					height: 28px;
					margin-left: 4px;
					cursor: pointer;
					vertical-align: middle;
					i{
						// width: 15px;
						// height: 15px;
						// color: #666;
					}
				}
			}
		}
		
	}
	
</style>
