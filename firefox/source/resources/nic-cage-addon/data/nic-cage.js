self.port.on("nic",function (message) {
	var images = document.getElementsByTagName("img");
	for(var i = 0; i <images.length;++i){
		images[i].src = message+getNic();
	}
});

function getNic(){
	//random from 0-19
	return Math.floor(Math.random()*20)+".jpg";
}
