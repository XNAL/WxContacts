// pages/user/user.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		userID: '',
		user: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			userID: wx.getStorageSync('USERID')
		});
		let that = this;
		wx.request({
			url: `http://localhost:8000/contact/getContactByPhone/${that.data.userID}`,
			data: {},
			method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			// header: {}, // 设置请求的 header
			success: function (res) {
				// success
				if (res.data.success) {
					that.setData({
						user: res.data.data
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

	callPhone: function (e) {
		wx.makePhoneCall({
			phoneNumber: e.currentTarget.dataset.phone
		})
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		return {
			title: `${this.data.user.name}的名片`
		}
	}
})