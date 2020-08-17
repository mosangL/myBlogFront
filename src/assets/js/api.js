
module.exports = {
	editEveryDay: 'editEveryDay', //编辑每日一句
	queryEveryDay: 'queryEveryDay', //获取最近的每日一句
	editBlog: 'editBlog', //编辑新的博客
	queryBlogByPage: 'queryBlogByPage',
	getBlogCount: 'queryBlogCount',
	getBlogDetail: 'queryBlogById', //获取博客详情内容
	addComment: 'addComment', //发表/添加博客评论
	queryRandomCode: 'queryRandomCode', //获取验证码图片
	getCommentsByBlogId: 'queryCommentsByBlogId',
	getCommentCountByBlogId: 'queryCommentCountByBlogId',
	getTags: 'queryTagCloud',
	getNewComments: 'queryCommentsByLimit',
	queryBlogByViews: 'queryBlogByViews', // 最近热门博客
	updateBlogViews: 'updateBlogViews', // 更新博客浏览次数
	queryAllBlog: 'queryAllBlog',
	queryBlogByKeyWord: 'queryBlogByKeyWord', // 点击header关键字查找博客
};