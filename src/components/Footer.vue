<template>
	<div class="footer">
		<ul>
			<li class="hover-blue">CSS/DIV</li>
			<li class="hover-blue">javacript</li>
			<li class="hover-blue">Linux</li>
			<li class="hover-blue">PC技术</li>
			<li class="hover-blue">Python</li>
			<li class="hover-blue">关于SEO分享经验</li>
			<li class="hover-blue">新闻资讯</li>
			<li class="hover-blue">片言碎语</li>
			<li class="hover-blue">编程基础</li>
			<li class="hover-blue">视频分享</li>
		</ul>
		<div>Copyright © 2020 肖小年个人博客 All rights reserved. 由免费开源的node.js强力驱动. </div>		
	</div>
</template>

<script>
export default{
	data(){
		return{

		}
	},
	methods:{

	}
}
</script>

<style scoped lang="less">
	@activeColor: #00c1de;
	.footer{
		width: 100%;
		padding: 5px 0;
		background: #1C2327;
		color: #a2a2a2;
		letter-spacing: 1px;
		display: flex;
		flex-direction: column;
		padding: 20px 0;
		ul{
			margin-bottom: 10px;
			li{
				display: inline-block;
				padding: 0 8px;
			}
		}
	}
	
</style>
