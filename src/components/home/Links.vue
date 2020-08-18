<template>
	<div class="panel">
		<header>友情链接</header>
		<table class="table friendship-link">
			<tbody>
				<tr>
					<td><a href="https://www.npmjs.com/package/vue-cli" title="vue-cli" target="_blank">Vue-cli</a></td>
					<td><a href="https://www.eolinker.com/#/" title="EOLINKER接口管理" target="_blank">EOLINKER接口管理</a></td>
				</tr>
				<tr>
					<td><a href="https://codepen.io/search/pens?q=canvas&page=1&order=popularity&depth=everything" title="CodePen" target="_blank">CodePen</a></td>
					<td><a href="https://developer.aliyun.com/mirror" title="阿里巴巴镜像站" target="_blank">阿里巴巴镜像站</a></td>
				</tr>
				<tr>
					<td><a href="https://stackoverflow.com/" title="Stack Overflow - 分享社区" target="_blank">Stack Overflow</a></td>
					<td><a href="http://browserify.org/" title="Browserify" target="_blank">Browserify</a></td>
				</tr>
				<tr>
					<td><a href="http://css.doyoe.com/" title="CSS参考手册" target="_blank">CSS参考手册</a></td>
					<td><a href="https://github.com/pyenv/pyenv" title="GitHub-pyenv 多版本控制工具" target="_blank">GitHub-pyenv</a></td>
				</tr>
				<tr>
					<td><a href="https://pypi.org/" title="PyPI" target="_blank">PyPI</a></td>
					<td><a href="https://www.nowcoder.com/" title="牛客网" target="_blank">牛客网</a></td>
				</tr>
				<tr>
					<td><a href="https://www.html.cn/" title="html中文网" target="_blank">html中文网</a></td>
					<td><a href="https://echarts.baidu.com/option.html#title" title="ECharts样式设置" target="_blank">ECharts样式设置</a></td>
				</tr>
				<tr>
					<td><a href="http://www.w3school.com.cn/html5/index.asp" title="W3school" target="_blank">W3school</a></td>
					<td><a href="https://www.58pic.com/" title="ECharts样式设置" target="_blank">千图网</a></td>
				</tr>
				
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	table tr td{
		padding: 8px;
		width: 6%;
		a{
			color: #eee;
			&:hover{
				color: #00c1de;
			}
		}
	}
	
</style>
