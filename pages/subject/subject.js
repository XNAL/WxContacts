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
		let that = this;
		wx.request({
			url: 'http://localhost:8000/contact/getSubjects',
			data: {},
			method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			// header: {}, // 设置请求的 header
			success: function (res) {
				// success
				if (res.data.success) {
					that.setData({
						subjectsData: res.data.data
					})
				}
			},
			fail: function () {
				// fail
			},
			complete: function () {
				// complete
			}
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