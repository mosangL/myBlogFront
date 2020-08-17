<template>
	<div class="edit-blog">
		<h2>{{name}}</h2>
		<el-form ref="form" label-width="80px" size="medium">
			<el-form-item label="类型">
				<el-radio-group v-model="type">
					<el-radio label="1">博客</el-radio>
					<el-radio label="2">每日一句</el-radio>
				</el-radio-group>
			</el-form-item>
			<template v-if="type == 1">
				<el-form-item label="标题">
					<el-input v-model="title" placeholder="文章标题"></el-input>
				</el-form-item>
				<el-form-item label="标签">
					<el-input v-model="tags" placeholder="请用逗号分割"></el-input>
				</el-form-item>
			</template>
			<el-form-item label="内容">
				<editor v-model="container"></editor>
			</el-form-item>
			<el-form-item label="验证码">
				<el-input v-model="pw" type="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import editor from '@/components/QuillEditor.vue';
	export default {
		props: {
			value: Object
		},
		components: {
			editor
		},
		data() {
			return {
				title: '',
				tags: '',
				type: '2',
				pw: '1234567',
				container: '',
			}
		},

		watch: {
			type(newVal) {
				console.log(newVal)
			},
			// container(val){
			// 	console.log(val)
			// }
		},
		computed: {
			name() {
				return this.type == 1 ? '博客编辑' : '每日一句';
			}
		},
		methods: {
			onSubmit() {
				console.log(this.container)
				if (this.type == 1) { //编辑博客
					this.ajax('post', this.api.editBlog, {
						blog_container: this.container, //content必须放在开头传
						pw: this.pw.trim(),
						tags: this.tags,
						title: this.title,
					}, res => {
						console.log(res);
						if(res && res.msg){
							this.$alert(res.msg)
						}
					})
				} else { //每日一句
					this.ajax('post', this.api.editEveryDay, {
						blog_container: this.container,
						pw: this.pw.trim()
					}, res => {
						// console.log(res);
						if(res && res.msg){
							this.$alert(res.msg)
						}
					})

				}
			}
		}
	}
</script>

<style scoped xml:lang="less">

	.edit-blog {
		width: 60%;
		min-width: 600px;
		display: inline-block;
		padding: 30px 0 10px;

	}

	.edit-blog .el-form-item:first-child {
		text-align: left;
	}
</style>
