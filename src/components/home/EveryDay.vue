<template>
	<div class="every-day">

		<span class="quote-headtips neon-lights">
			每日一句 ( 202082 ) &nbsp;
			<span class="glyphicon" @click="speak"></span>
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
			//H5 语音合成播报功能
			speak(){
				if(!('speechSynthesis' in window)) {
					this.$alert("对不起，您的浏览器不支持H5语音转换");
					return;
				}
				let _play = document.querySelector(".every-day-content");
				let to_speak = new SpeechSynthesisUtterance(_play.innerText);
				//to_speak.rate = 1.4;// 设置播放语速，范围：0.1 - 10之间
				window.speechSynthesis.speak(to_speak);
			}
		},
		computed: {
			getContent(){
				return this.content;
			},
			
		},
		created() {
			//请求数据给content赋值
			this.ajax('post', this.api.queryEveryDay, '', res => {
				// console.log(res);
				if(res){
					this.content = res.data[0].content;
				}
			});
			
			// setInterval( ()=> {
			// 	//175, 19, 72
			// 	let red = Math.random() * 255 + 175;
			// 	let green = Math.random() * 255 + 19;
			// 	let blue = Math.random() * 255 + 72;
			// 	this.changeColor = 'rgb('+red+','+green+','+blue+')';
			// }, 500)		
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
		color: rgb(175, 19, 72);
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
