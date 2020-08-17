<template>
	<div id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>
<script>
	// @ is an alias to /src
	import Footer from '@/components/Footer.vue'
	import Header from '@/components/Header.vue'

	export default {
		components: {
			Footer,
			Header
		}
	}
</script>

<style lang="less">
	@activeColor: #00c1de;
	@red: #f00;
	@font-face {
		font-family: MyIcon;
		src: url('./assets/font/glyphicons-halflings-regular.woff2'), //喇叭content: "\e122";
	}
	
	*{
		padding: 0;
		margin: 0;
	}
	body{
		background-color: #E9EAED;
		font-size: 15px;
		overflow-x: hidden;
		line-height: 1.5;
		padding-top: 60px;
		#app {
			font-family: "Microsoft YaHei", Avenir, Helvetica, Arial, sans-serif;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			text-align: center;
			color: #333;
			a{
				text-decoration: none;
			}
			a:visited,
			a:active{ 
				background-color: transparent;
			}
			li{
				list-style: none;
			}
			button, input{
				outline: none;
			}
			.font16{
				font-size: 16px;
			}
			.red{
				color: @red;
			}
			.hover-blue{
				cursor: pointer;
				&:hover{
					color: #00c1de;
				}
			}
			//页面顶部固定
			.body-header{
				position: fixed;
				width: 100vw;
				top: 0;
				left: 0;
			}
			//小容器
			.panel{
				border-radius: 4px;
				overflow: hidden;
				background-color: #1f1f1f;
				color: #fff;
				box-shadow: 0 1px 1px rgba(0,0,0,0.05);
				margin-bottom: 20px;
				text-align: left;
				header{
					background-color: #191818;
					padding: 10px 15px;
					box-sizing: border-box;
				}
				li{
					padding: 10px 15px;
					box-sizing: border-box;
					border: 1px solid #292929;
				}
			}
			// 分页
			.el-pagination{
				.el-pager li.active {
					color: #fff;
					background-color: #191818;
				}
				.btn-prev {
					border-top-left-radius: 4px;
					border-bottom-left-radius: 4px;
				}
				.btn-next {
					border-top-right-radius: 4px;
					border-bottom-right-radius: 4px;
				}
			}
				
		}
	}
	
	// flex-wrap 容器
	@media screen and (max-width:850px){
		.flex-wrap .content{
			display: block!important;
			.left{
				padding-right: 0px!important;
			}
		}
	}
	
	.flex-wrap{
		width: 100vw;
		padding: 30px 0 10px;
		display: flex;
		justify-content: center;
		text-align: left;
		.content{
			display: flex;
			flex: 1;
			max-width: 1200px;
			box-sizing: border-box;
			flex-flow: row wrap;
			justify-content: space-between;
			.left{
				flex: 2 2;
				padding-right: 40px;
				box-sizing: border-box;
			}
			.right{
				flex: 1 1;
			}
		}
	}
	
</style>
