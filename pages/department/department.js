// pages/department/department.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		keyword: '',
		deptsData: [{
			name: 'A部门',
			count: 10
		}, {
			name: 'B部门',
			count: 20
		}, {
			name: 'C部门',
			count: 30
		}, {
			name: 'D部门',
			count: 40
		}, {
			name: 'E部门',
			count: 50
		}, {
			name: 'F部门',
			count: 60
		}, {
			name: 'A部门',
			count: 10
		}, {
			name: 'B部门',
			count: 20
		}, {
			name: 'C部门',
			count: 30
		}, {
			name: 'D部门',
			count: 40
		}, {
			name: 'E部门',
			count: 50
		}, {
			name: 'F部门',
			count: 60
		}]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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
})