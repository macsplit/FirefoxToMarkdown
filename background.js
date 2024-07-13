browser.runtime.onMessage.addListener((message) => {
	if (message.action === "setNoAutoSelect") {
		return browser.storage.local.set({
			noAutoSelect: message.data
		});
	} else {
		if (message.action === "getNoAutoSelect") {
			return browser.storage.local.get('noAutoSelect').then((data) => {
				return { data: data.noAutoSelect };
			}).catch((err)=>{
				return { data: false };
			});
		}
	}
});