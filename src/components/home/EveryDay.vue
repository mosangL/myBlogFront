<template>
	<div class="every-day">

		<span class="quote-headtips" style="color: rgb(175, 19, 72);">
			每日一句 ( 202082 ) &nbsp;
			<span class="glyphicon"></span>
		</span>
		<div v-html="getContent" class="every-day-content"></div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				content: "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
			}
		},
		methods: {

		},
		computed: {
			getContent(){
				return this.content;
			}
		},
		created() {
			//请求数据给content赋值
			this.ajax('post', this.api.queryEveryDay, '', res => {
				// console.log(res);
				if(res){
					this.content = res.data[0].content;
				}
			})
		}
	}
</script>

<style scoped >

	.every-day {
		background-color: #F5F5F5;
		box-shadow: 1px 1px 10px #5f5f5f;
		min-height: 20px;
		padding: 19px;
		box-sizing: border-box;
		border: 1px solid #e3e3e3;
		border-radius: 4px;
	}

	.quote-headtips {
		margin-top: 3px;
	}

	.glyphicon::before {
		font-family: MyIcon;
		content: "\e122";
		font-size: 12px;
		cursor: pointer;
		margin-left: 5px;
	}
	.every-day-content{
		margin-top: 10px;
	}
	p {
		margin: 0 0 10px;
	}
</style>
