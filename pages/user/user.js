// pages/user/user.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		user: {}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			userid: wx.getStorageSync('userid'),
			user: {
				logo: '',
				name: '张三',
				gender: '男',
				phone: '13256895478',
				deptName: '计算机学院',
				deptTel: '0755-12457896',
				subject: '高等数学',
				remark: '有事电话联系。'
			}
		})
	},

	callPhone: function(e) {
		wx.makePhoneCall({
			phoneNumber: e.currentTarget.dataset.phone
		})
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		return {
			title: '张三的名片'
		}
	}
})