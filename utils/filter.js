function loginCheck(pageObj) {
	if (pageObj.onLoad) {
		console.log(pageObj)
		let _onLoad = pageObj.onLoad;
		pageObj.onLoad = function (options) {
			if(wx.getStorageSync('USERID')) {
				//获取页面实例，防止this劫持
				let currentInstance = getPageInstance();
				_onLoad.call(currentInstance, options);

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