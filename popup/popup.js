function listenForClicks() {
	console.log("popup.js");
	document.querySelector("#convertButton1").addEventListener('click', ()=> {
		function convert(tabs) {
		  document.querySelector("#convertButton1").classList.add("convertPressed");
		   	let message = (document.getElementById('includeLinks').checked) ? "convert1" : "convert2";
			browser.tabs.query({ active: true, currentWindow: true }).then( (tabs) => {
				browser.tabs.sendMessage(tabs[0].id, message).then((response) => {
		        	console.log("response: ", response);
		        	setTimeout(()=>{
		            	document.querySelector("#convertButton1").classList.remove("convertPressed");
		            	window.close();	            
		        	},250);
		        });
			});
		}

		browser.tabs
			.query({ active: true, currentWindow: true })
			.then(convert)
			.catch(e => console.log(e));
	});
}

browser.tabs
  .executeScript({ file: "/content.js" })
  .then(listenForClicks)
  .catch(e => console.log(e));