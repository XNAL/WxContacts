// pages/login/login.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		userID: '',
		password: '',
		isError: false,
		errorText: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	},

	/**
	 * 输入手机号（用户名）
	 */
	bindUserIDInput: function(e) {
		this.setData({
			userID: e.detail.value
		});
	},

	/**
	 * 输入密码
	 */
	bindPasswordInput: function (e) {
		this.setData({
			password: e.detail.value
		});
	},
	
	/**
	 * 点击登录按钮
	 */
	login: function (e) {
		if(this.data.userID === '' || this.data.password === '') {
			this.setData({
				isError: true,
				errorText: "手机号或密码不能为空"
			});
			return;
		}
		this.setData({
			isError: true,
			errorText: "请输入正确的手机号或密码"
		});
		// console.log(this.data.userName, this.data.password);
		wx.setStorageSync('USERID', this.data.userID);
		
		wx.switchTab({
			url: "/pages/department/department"
		});
	}
})