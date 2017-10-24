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
	 * 输入手机号（用户名）
	 */
	bindUserIDInput: function (e) {
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
		if (this.data.userID === '' || this.data.password === '') {
			this.setData({
				isError: true,
				errorText: "手机号或密码不能为空"
			});
			return;
		}
		// this.setData({
		// 	isError: true,
		// 	errorText: "请输入正确的手机号或密码"
		// });
		let that = this;
		wx.request({
			url: 'http://localhost:8000/contact/login',
			data: {
				userID: this.data.userID,
				password: this.data.password
			},
			method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			// header: {}, // 设置请求的 header
			success: function (res) {
				// success
				if (res.data.success) {
					wx.setStorageSync('USERID', that.data.userID);

					wx.switchTab({
						url: "/pages/department/department"
					});
				}
			},
			fail: function () {
				// fail
			},
			complete: function () {
				// complete
			}
		})
		// console.log(this.data.userName, this.data.password);
	}
})