function loginCheck(pageObj) {
	if (pageObj.onLoad) {
		let _onLoad = pageObj.onLoad;
		pageObj.onLoad = function () {
			if(wx.getStorageSync('userInfo')) {
				//获取页面实例，防止this劫持
				let currentInstance = getPageInstance();
				_onLoad.call(currentInstance);

			} else {
				//跳转到登录页
				wx.redirectTo({
					url: "/pages/login/login"
				});
			}
			// service.identityCheck(() => {
			// }, () => {
			// });
		}
	}
	return pageObj;
}

function getPageInstance() {
	var pages = getCurrentPages();
	return pages[pages.length - 1];
}

exports.loginCheck = loginCheck;