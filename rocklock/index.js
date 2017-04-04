var wordPlayced = '';

$(document).ready(function() {
$('div#instruction').text("Press Play!");	

	$('button#play').click(function() {
		$('body').css("background-color","#f7e6c3");
		$('div#result').empty();
		$('div#instruction').empty();
		$('audio').trigger('stop');
		n = Math.random();
		if (n >= 0.83) {
			$('audio#rock').trigger('play');
			wordPlayed = 'rock';
		}
		else if (n >= 0.67){
			$('audio#lock').trigger('play');
			wordPlayed = 'lock';
		}
		else if (n >= 0.5) {
			$('audio#rock2').trigger('play');
			wordPlayed = 'rock2';
		}
		else if (n >= 0.33){
			$('audio#lock2').trigger('play');
			wordPlayed = 'lock2';
		}
		else if (n >= 0.16){
			$('audio#rock3').trigger('play');
			wordPlayed = 'rock3';
		}
		else {
			$('audio#lock3').trigger('play');
			wordPlayed = 'lock3';
		}

		$('div#instruction').text("Did you hear 'rock' or 'lock'?");
	});

	$('button#rock').click(function() {
		$('div#instruction').empty();
		if (wordPlayed == 'rock' || wordPlayed == 'rock2' || wordPlayed == 'rock3'){
			$('body').css("background-color","lightgreen");
			$('div#result').css("color","green");
			$('div#result').text("Correct! Good job! :D");
		}
		else {
			$('body').css("background-color","#ff5050");
			$('div#result').css("color","white");
			$('div#result').text("That was wrong. Try again!");
		}

		$('div#instruction').text("Press Play!");
	})


	$('button#lock').click(function() {
		$('div#instruction').empty();
		if (wordPlayed == 'lock' || wordPlayed == 'lock2' || wordPlayed == 'lock3'){
			$('body').css("background-color","lightgreen");
			$('div#result').css("color","green");
			$('div#result').text("Correct! Good job! :D");
		}
		else {
			$('body').css("background-color","#ff5050");
			$('div#result').css("color","white");
			$('div#result').text("That was wrong. Try again!");
		}
		$('div#instruction').text("Press Play!");
	});


	
});