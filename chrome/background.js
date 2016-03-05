console.log("start");

function ncUrl(number) {
	return chrome.extension.getUrl("cages/" + number + ".png");
}

cages = []

chrome.webRequest.onBeforeRequest.addListener(function(details){
	console.log("onBeforeRequest");
	console.log(details);
	if (details.url == "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nicolas_Cage_Deauville_2013.jpg/440px-Nicolas_Cage_Deauville_2013.jpg"){
		return;
	}
	var normalized = details.url.toLowerCase();
	if (normalized.indexOf(".jpg") >= 0 || normalized.indexOf(".png") >= 0 || normalized.indexOf(".gif") >= 0) {
		return {redirectUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nicolas_Cage_Deauville_2013.jpg/440px-Nicolas_Cage_Deauville_2013.jpg"};
	}
	// return details;
	// return {redirectUrl: "http://www.google.co.in/"};
}, {
	urls: ["http://*/*", "https://*/*"]
}, ["blocking"]);
chrome.webRequest.onHeadersReceived.addListener(function (details) {
	console.log("onHeadersReceived")
	console.log(details);
	if (details.url == "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nicolas_Cage_Deauville_2013.jpg/440px-Nicolas_Cage_Deauville_2013.jpg"){
		return;
	}
	var normalized = details.url.toLowerCase();
	if (normalized.indexOf(".jpg") >= 0 || normalized.indexOf(".png") >= 0 || normalized.indexOf(".gif") >= 0) {
		return {redirectUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nicolas_Cage_Deauville_2013.jpg/440px-Nicolas_Cage_Deauville_2013.jpg"};
	}
	// return details;
	// chrome.tabs.reload();
}, {
    urls: ["http://*/*", "https://*/*"]
}, ["blocking", "responseHeaders"]);

console.log("fin");