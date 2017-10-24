// pages/card/card.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isLoading: false,
		isNoMore: false,
		page: 1,
		pageNum: 20,
		dataType: 1,
		dataId: 0,
		cardsData: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			dataType: options.type ? parseInt(options.type) : 1,
			dataId: options.id ? parseInt(options.id) : 0
		});
		wx.setNavigationBarTitle({
			title: options.title
		});
		this.fetchCardList();
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		if (!this.data.isNoMore) {
			this.setData({
				isLoading: true,
				page: this.data.page + 1
			});
			this.fetchCardList();			
		}
	},
	callPhone: function (e) {
		wx.makePhoneCall({
			phoneNumber: e.currentTarget.dataset.phone
		})
	},

	fetchCardList: function () {
		let url = 'http://localhost:8000/contact/',
			that = this;
		if (this.data.dataType === 1) {
			url += 'getContactsByDeptID';
		}
		if (this.data.dataType === 2) {
			url += 'getContactsBySubjectID';
		}
		wx.request({
			url: `${url}/${that.data.dataId}?page=${that.data.page}`,
			data: {},
			method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
			// header: {}, // 设置请求的 header
			success: function (res) {
				// success
				if (res.data.success) {
					let isHasNoMore = false;
					if (res.data.data.length < that.data.pageNum) {
						isHasNoMore = true;
					}
					that.setData({
						cardsData: that.data.cardsData.concat(res.data.data),
						isLoading: false,
						isNoMore: isHasNoMore
					});
				}
			},
			fail: function () {
				// fail
			},
			complete: function () {
				// complete
			}
		});
	}
})