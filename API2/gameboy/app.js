var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstTagScript = document.getElementsByTagName('script')[0];
firstTagScript.parentNode.insertBefore(tag, firstTagScript);





// Function that initializes the player with specific events
// and sets functions to handle those events.

// J---aiyznGQ
function onYouTubeIframeAPIReady(){
	console.log("ready");
	var p = new YT.Player('frogger', {
            videoId: 'l9fO-YuWPSk',        
            width: 350,
            height: 260,
            playerVars: {
			controls: 0,
			modestbranding: 1,
			showinfo: 0
		},
        events: {
		    'onReady': onPlayerReady,
		}
	});
}



function onPlayerReady(event){
    var player = event.target;
    var parent = event.target.a.parentNode;
    var a = document.createElement('button');
    a.textContent = "A";
    a.onclick = function() {
        player.pauseVideo();
    };
    parent.appendChild(a);
    var b = document.createElement('button');
    b.textContent = "B";
    b.onclick = function() {
    player.playVideo();
        };
    parent.appendChild(b);
    
	
}







