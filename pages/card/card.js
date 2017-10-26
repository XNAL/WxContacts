const app = getApp();
const filter = require('../../utils/filter');
Page(filter.loginCheck({

	/**
	 * 页面的初始数据
	 */
	data: {
		keyword: '',
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
		console.log('type0', options);
		let type = options.type ? parseInt(options.type) : 1,
			keyword = type === 3 ? options.title : '';
			console.log('type', type);
		this.setData({
			dataType: type,
			dataId: options.id ? parseInt(options.id) : 0,
			keyword: keyword
		});
		console.log('this.data', this.data);
		wx.setNavigationBarTitle({
			title: type === 3 ? `${keyword}的搜索结果` : options.title
		});
		console.log('type2', type);
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
		let api = app.globalData.apiUrl,
			url = '',
			that = this;
		if (this.data.dataType === 1) {
			url = `${api}/getContactsByDeptID/${that.data.dataId}`;
		}
		if (this.data.dataType === 2) {
			url = `${api}/getContactsBySubjectID/${that.data.dataId}`;
		}
		if (this.data.dataType === 3) {
			url = `${api}/searchByKeyword/${that.data.keyword}`;
		}
		wx.request({
			url: `${url}?page=${that.data.page}`,
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
		wx.navigateTo({
			url: '/pages/card/card?id=0&type=3&title=' + this.data.keyword
		})
	}
}))