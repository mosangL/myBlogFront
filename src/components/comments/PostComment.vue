<template>
	<div class="post-comment">
		<div id="respond">
			<h3>发表评论</h3>
			<div class="cancel-comment-reply">
				<small><a rel="nofollow" @click="cancelcommentReply">点击这里取消回复。</a></small>
			</div>
			<el-form :model="formInline" class="demo-form-inline commentform" size="medium">
				<el-form-item label="">
					<el-col :span="7">
						<el-input v-model="formInline.name" placeholder="昵称"></el-input>
					</el-col>
					<el-col :span="10" :offset="1">
						<el-input v-model="formInline.email" placeholder="邮箱(评论被回复时你讲收到通知)"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="">
					<el-input type="textarea" v-model="formInline.content" placeholder="无意义的内容我不会回复你"></el-input>
				</el-form-item>
				<el-form-item label="">
					<el-col :span="7">
						<el-input placeholder="验证码" v-model.trim="vcode"></el-input>
					</el-col>
					<el-col :span="7" :offset="1">
						<span v-html="codeImg" @click="getCodeImg"></span>
					</el-col>
				</el-form-item>
				<el-form-item>
					<el-button @click="onSubmit">提交留言</el-button>
					<el-button @click="resetForm">重写</el-button>
				</el-form-item>

			</el-form>

		</div>
	</div>
</template>

<script>
	export default {
		props:['blog_id'],
		data() {
			return {
				codeImg: '', // 验证码
				vcode: '', // 用户输入的验证码
				rightCode: '', // 正确的验证码
				formInline: {
					name: '',
					email: '',
					content: '',
					reply: '0', //0表示直接评论博客不是回复某人的评论, 若是回复某人，就取某人的名字
				},
				
			}
		},
		computed:{
			getCodeImg(){
				return () => {
					this.ajax('post', this.api.queryRandomCode, '', res => {
						// console.log(res);
						this.codeImg = res.data? res.data.data : '';
						this.rightCode = res.data? res.data.text.toLocaleLowerCase() : '';
					})
				}
			}
		},
		methods: {
			//重置表单
			resetForm(){
				this.vcode = '';
				this.formInline.name = '';
				this.formInline.email = '';
				this.formInline.content = '';
			},
			//点击提交
			onSubmit() {
				if(!this.formInline.content.trim()){
					this.$alert("请输入内容");
					return;
				}
				if(!this.vcode){
					this.$alert("请输入验证码");
					return;
				}
				if(this.vcode.toLocaleLowerCase() != this.rightCode){
					this.$alert("验证码错误，请重新输入");
					return;
				}
				if(this.$store.state.applyParent){
					this.formInline.reply = this.$store.state.applyParent;
				}
				this.ajax('post', this.api.addComment, {
					blog_id: this.blog_id,
					parent: this.formInline.reply, //表示回复谁的评论
					user_name: this.formInline.name,
					email: this.formInline.email,
					comments: this.formInline.content,
				}, res => {
					// console.log(res)
					this.$alert(res.msg);
					this.resetForm();
					this.$emit('addNewComment', true)
				})
			},
			//点击取消回复
			cancelcommentReply(){
				this.$store.commit('setApplyParent', '0');
				this.resetForm();
			}
		},
		created() {
			// console.log(this.blog_id)
			this.getCodeImg();
		
		}
	}
</script>

<style scoped lang="less">
	.post-comment {
		margin-top: 20px;
		padding: 19px;
		margin-bottom: 20px;
		background-color: #f5f5f5;
		border: 1px solid #e3e3e3;
		border-radius: 4px;
		box-shadow: 1px 1px 5px rgba(97, 97, 97, .48);

		h3 {
			margin: 12px 0 10px;
			font-weight: normal;
		}

		a {
			color: #337ab7;
			cursor: pointer;
		}
		
		.commentform {
			margin-top: 5px;
			button:first-child{
				background-color: #d9edf7;
			}
		}
	}
</style>
