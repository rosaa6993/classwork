$(document).ready(function() {
	$('#query').on("keypress", function(event){
        
        if (event.keyCode == 13) {
            var score = 0;
            var attempt = 0;
			var query = this.value;
			var key = "jgquRUgdbCbfRwxZQNiUPgJYdUAqdpYL";
			var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=6";
			$.getJSON(url, function(json) {
				
				/* memory game */
	
				// need two copies of each image in a list
				var cards = [];
				
				// place image into a grid
				// obscure images
				var $game = $('#game');
				var matches = 2;
				$("#direction").text("click any two cards to match");
				for (let j = 0; j < matches; j++) {
					for (let i = 0; i < json.data.length; i++) {
						var img = json.data[i];
						var div = $('<div>')
						.addClass('card')
							.attr('data-num', i);
						var imgElem = new Image();
						imgElem.src = img.images.downsized.url;
						imgElem.style.display = "none";
						div.append(imgElem);
						cards.push(div);
					}
				}
				cards.sort(function() { return 0.5 - Math.random() });
				for (let i = 0; i < cards.length; i++) {
					$game.append(cards[i]);
				}
					 
				var clickedCards = [];
				
                // each card/image needs clicks event
				$('.card').click(function() {
					const $card = $(this);
					
                    // show images
					$card.children().show();
					
                    // is there another image to compare
					console.log(clickedCards.length, matches);
					if (clickedCards.length == matches - 1) {
						// compare images
						var allMatch = true;
						for (let i = 0; i < clickedCards.length; i++) {
							if (clickedCards[i].num != $card.data().num) {
								allMatch = false;
							}
						}
						if (allMatch) {
							// match, stay face up
				
                            score++;
							$('#score').text('You Win Score  ' + score);
							$card.children().addClass("match");
							for (let i = 0; i < clickedCards.length; i++) {
								clickedCards[i].img.addClass("match");
								}
                            if  (score == cards.length/2){
                                $("#win").addClass( "winShow");
							}
						} else {
							// not a match, hide the images
							$card.children().delay(1000).hide(0);
							for (let i = 0; i < clickedCards.length; i++) {
								clickedCards[i].img.delay(1000).hide(0);
							}
                         
						}
						
                        // clear the current image
						clickedCards = [];
					} else {
						// keep track of current image
						clickedCards.push({
							num: $card.data().num,
							img: $card.find('img')
						});
					}
                
				});
					
			});
		}
	});
});
//timer code
var count=30;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

  //Do code for showing the number of seconds here
    document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
};
$(document).ready(function() {
  setInterval(function() {
    cache_clear()
  }, 30000);
});

function cache_clear() {
  window.location.reload(true);
  // window.location.reload(); use this if you do not remove cache
}

   