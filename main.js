window.onload = function(){

	var player = new Tone.Player({
	  "url" : "seinfeld.mp3",
	  "autostart" : true,
	  "loop" : true,
	  "reverse": false,
	  "playbackRate": 1
	}).toMaster();

	player.volume.value = -16;

	var laughter = new Tone.Player("./laugh2.mp3", function(){
		console.log('done!');
		Tone.Transport.start();
	}).toMaster();

	laughter.volume.value = -3;

	Tone.Transport.scheduleRepeat(function(time){
		console.log('tick');
		laughter.start();
	}, 120);
}
