var tabs = require("sdk/tabs");
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
	include: "*",
	contentScriptFile: data.url("nic-cage.js"),
	onAttach: function(worker) {
		worker.port.emit("nic",data.url("nic"));
	}
});

