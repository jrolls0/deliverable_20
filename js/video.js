
window.addEventListener("load", function() {
	let video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;

	//play button
	let slider = document.querySelector("#slider");
	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		video.volume = slider.value / 100;
		document.querySelector("#volume").innerHTML = slider.value + "%";
	});

	//pause button
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
	});

	//slow down button
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate -= 0.1 * video.playbackRate;
		console.log(video.playbackRate)
	});

	//speed up   button
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate += 0.1 * video.playbackRate;
		console.log(video.playbackRate)
	});


	//skip ahead button
	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 > video.duration) {
            		video.currentTime = 0; // Go back to the start
        	} 
		else {
            		video.currentTime += 10;
        	}
		console.log(video.currentTime)
	});

	//mute button
	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
            		video.muted = false;
			this.textContent = 'Mute';
        	} 
		else {
            		video.muted = true;
			this.textContent = 'Unmute';
        	}
	});
	let display = document.querySelector("#volume");
	//volume slider
	slider.addEventListener("input", function() {
		video.volume = this.value / 100;
        	display.innerHTML = this.value + "%";
	});

	//Styled
	document.querySelector("#vintage").addEventListener("click", function() {
	        video.classList.add("oldSchool");
	 });
	
    	// Original
    	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
    	});

});
