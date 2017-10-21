const filter = require('../../utils/filter');

Page(filter.loginCheck({

	/**
	 * 页面的初始数据
	 */
	data: {
		keyword: '',
		subjectsData: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			subjectsData: [{
				name: 'A学科',
				count: 10
			}, {
				name: 'B学科',
				count: 20
			}, {
				name: 'C学科',
				count: 30
			}, {
				name: 'D学科',
				count: 40
			}, {
				name: 'E学科',
				count: 50
			}, {
				name: 'F学科',
				count: 60
			}, {
				name: 'A学科',
				count: 10
			}, {
				name: 'B学科',
				count: 20
			}, {
				name: 'C学科',
				count: 30
			}, {
				name: 'D学科',
				count: 40
			}, {
				name: 'E学科',
				count: 50
			}, {
				name: 'F学科',
				count: 60
			}]
		})
	},

	/**
	 * 输入关键字
	 */
	bindKeywordInput: function (e) {
		this.setData({
			keyword: e.detail.value
		});
	},

	/**
	 * 搜索
	 */
	search: function (e) {
		console.log(this.data.keyword);
	}
}))