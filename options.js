document.getElementById('auto-select').addEventListener('change', (event) => {
	event.preventDefault();
	browser.runtime.sendMessage({
		action: "setNoAutoSelect", data: !document.getElementById('auto-select').checked
	})
});

window.addEventListener("load", function() {
	browser.runtime.sendMessage({
        action: "getNoAutoSelect"
    }).then((response) => {
		document.getElementById('auto-select').checked = !response.data;
    })
});
