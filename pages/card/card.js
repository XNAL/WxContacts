// pages/card/card.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isLoading: false,
		isNoMore: false,
		pageNum: 1,
		pageSize: 20,
		dataType: 1,
		cardsData: [{
				logo: '/image/subject.png',
				name: '张三',
				gender: '男',
				phone: '13245623232',
				subject: '高等数学',
				deptName: '校长办公室',
				deptTel: '0755-889556',
				remark: '有事电话联系。'
			},
			{
				logo: '',
				name: '李四四',
				gender: '女',
				phone: '15689623232',
				subject: '编译原理',
				deptName: '计算机学院',
				deptTel: '0755-889963',
				remark: '有事电话联系。'
			},
			{
				logo: '/image/subject.png',
				name: '刘一二',
				gender: '男',
				phone: '13245623232',
				subject: '大学英语',
				deptName: '校长办公室',
				deptTel: '0755-889556',
				remark: '有事电话联系。'
			},
			{
				logo: '',
				name: '王五五',
				gender: '女',
				phone: '15689623232',
				subject: '应用网络',
				deptName: '计算机学院',
				deptTel: '0755-889963',
				remark: '有事电话联系。'
			},
			{
				logo: '',
				name: '马六',
				gender: '女',
				phone: '15689623232',
				subject: '计算机科学与技术',
				deptName: '计算机学院',
				deptTel: '0755-889963',
				remark: '有事电话联系。'
			}
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			dataType: options.type ? parseInt(options.type) : 1
		})
		wx.setNavigationBarTitle({
			title: options.title
		})
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		if (!this.data.isNoMore) {
			// let that = this;
			this.setData({
				isLoading: true,
				pageNum: this.data.pageNum + 1
			});
			// this.fetchCardList();
			console.log(this.data.pageNum);
			setTimeout(() => {
				let isHasMore = false;
				if(this.data.pageNum > 5) {
					isHasMore = true;
				}
				this.setData({
					cardsData: this.data.cardsData.concat([{
						logo: '/image/subject.png',
						name: '张三' + this.data.pageNum,
						gender: '男',
						phone: '13245623232',
						subject: '高等数学',
						deptName: '校长办公室',
						deptTel: '0755-889556',
						remark: '有事电话联系。'
					},
					{
						logo: '',
						name: '李四四' + this.data.pageNum,
						gender: '女',
						phone: '15689623232',
						subject: '编译原理',
						deptName: '计算机学院',
						deptTel: '0755-889963',
						remark: '有事电话联系。'
					}]),
					isLoading: false,
					isNoMore: isHasMore
				});
			}, 1000);
		}
	},
	callPhone: function(e) {
		wx.makePhoneCall({
			phoneNumber: e.currentTarget.dataset.phone
		})
	},

	loadMore: function (e) {
		console.log(1);
		if (!this.data.isNoMore) {
			// let that = this;
			this.setData({
				isLoading: true,
				pageNum: this.data.pageNum + 1
			});
			// this.fetchCardList();
			console.log(this.data.pageNum)
			
		}
	},
	fetchCardList: function () {
		let that = this;
		let url = 'http://&pagenum=' + this.data.pageNum;
		wx.request({
			url: 'https://URL',
			data: {},
			method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			// header: {}, // 设置请求的 header
			success: function(res){
				// success
				let isHasMore = false;
				if(res.data.result.list.length < that.data.pageSize) {
					isHasMore = true;
				}
				that.setData({
					cardsData: that.data.cardsData.concat(res.data.result.list),
					isLoading: false,
					isNoMore: isHasMore
				});
			},
			fail: function() {
				// fail
			},
			complete: function() {
				// complete
			}
		});
	}
})