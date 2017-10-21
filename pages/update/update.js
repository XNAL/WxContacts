// pages/update/update.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		update: null,
		deptArray: [
			'A部门', 'B部门', 'C部门', 'D部门', 'E部门'
		],
		deptIndex: 0,
		subjectArray: [
			'A学科', 'B学科', 'C学科', 'D学科', 'E学科'
		],
		subjectIndex: 0
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let deptIdx = this.data.deptArray.indexOf('C部门');
		let subjectIdx = this.data.subjectArray.indexOf('B学科');
		this.setData({
			update: {
				name: '张三',
				phone: '13266668888',
				gender: '男',
				deptName: 'C部门',
				subject: 'B学科'
			},
			deptIndex: deptIdx,
			subjectIndex: subjectIdx
		});

	},
	bindDeptPickerChange: function(e) {
		this.setData({
			deptIndex: e.detail.value
		});
	},
	bindSubjectPickerChange: function(e) {
		this.setData({
			subjectIndex: e.detail.value
		});
	}
})