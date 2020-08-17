<template>
	<div class="about flex-wrap">
		<div class="content">
			<div class="left">
				<div class="text">
					<h2><strong>关于我</strong></h2>
					<hr>
					<p class="">博主<a href="">肖小年</a>，大葱省，啤酒之城，算是80后大叔。</p>
					<p>会修电脑的野生程序员<br>内向闷骚老司机<br>喜欢逛B站<br>7年PHP开发<br>PHP是世界上最好的语言</p>
					<h2><strong>关于博客</strong></h2>
					<hr>
					<p>从2009年 – 今<br>博主很懒+词穷，佛系更新…<br>域名 zhengoo.cn -&gt; zh30.com<br>程序 tcms -&gt; WordPress<br>服务器 免费空间 -&gt;
						国内某收费空间 -&gt; 国外vps -&gt; 阿里云</p>
					<p>推荐便宜又稳定的xen-VPS吧: <a href="https://idc.hostshare.cn/page.aspx?c=referral&amp;u=8239" rel="nofollow external">HostShare</a><br>推荐自己在用的国外vps服务商：<br>2C2G3M香港优惠后最低38元
						<a href="https://locvps.wenjingnetwork.com/page.aspx?c=referral&amp;u=12409">LOCVPS&nbsp; (优惠码pn30off )</a></p>
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
				padding: 19px;
				margin-bottom: 20px;
				background-color: #f5f5f5;
				border: 1px solid #e3e3e3;
				border-radius: 4px;
				box-shadow: 1px 1px 5px rgba(97,97,97,.48);
				h2{
					margin: 10px 0 12px;
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
