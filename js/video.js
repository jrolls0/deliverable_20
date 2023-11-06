var video;

 window.addEventListener("load", function() {
	let video_let = document.querySelector(".video");
	video_let.autoplay = false;
	video_let.loop = false;

	let volumeSlider = document.querySelector("#slider");
	document.querySelector("#play").addEventListener("click", function() {
		video_let.play();
		video_let.volume = volumeSlider.value / 100;
		document.querySelector("#volume").innerHTML = volumeSlider.value + "%";
	});
});
