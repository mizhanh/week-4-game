
$(document).ready(function() {
	
//Declare global variables
//=====================================================================
	var counterDia = 0;
	var counterRuby = 0;
	var counterSap = 0;
	var counterEme = 0;
	var valueDiamond = 0;
	var valueRuby = 0;
	var valueSapphire = 0;
	var valueEmerald = 0;
	var wins = 0;
	var losses = 0;
	var counterTotal = 0;
	var targetNumber = 0;

//=====================================================================

//FUNCTIONS
//=====================================================================

//Reset to start or restart game
	function reset() {
		counterDia = 0;
		counterRuby = 0;
		counterSap = 0;
		counterEme = 0;
		counterTotal = 0;
		valueDiamond = 0;
		valueRuby = 0;
		valueSapphire = 0;
		valueEmerald = 0;
		$("#score").empty();		
}

//Generate a random number to set target for the round
	function setTarget() {
		for (var i=0; i<120; i++) {
			var random = Math.floor((Math.random() * 102) + 19);
			targetNumber = random;
			$("#target").text(random);
		}	
	}	


//Progress evaluation
	function evaluate(){
		if (counterTotal == targetNumber) {
			wins++;
	 		$("#wins").text("Wins: " + wins);
	 		alert("You win!");
	 		reset();
	 		setTarget();	 		
		}
		else if (counterTotal > targetNumber) {
			losses++;
			alert("You Lose!");
 			$("#losses").text("Loses: " +  losses);
 			reset();
 			setTarget();			
		}	
	}
//===========================================================================	

//Game Starts
//===========================================================================
	reset();
	setTarget();

		//Generate random value for diamond
		for (var i=0; i<12; i++) {
			var imageDiamond = $(".diamond-image");
			var random = Math.floor((Math.random() * 12) + 1);	
			imageDiamond.attr("data-diamondvalue", random);	
		}
		//Assign the random value to the diamond image when click
		$(".diamond-image").on("click", function() {
			valueDiamond = ($(this).attr("data-diamondvalue"));
			valueDiamond = parseInt(valueDiamond);
			counterDia += valueDiamond;
			counterTotal = counterDia + counterRuby + counterSap + counterEme;
			$("#score").text(counterTotal);
			evaluate();
		});
		

		//Generate random value for ruby
		for (var i=0; i<12; i++) {
			var imageRuby = $(".ruby-image");
			var random = Math.floor((Math.random() * 12) + 1);	
			imageRuby.attr("data-rubyvalue", random);	
		}
		//Assign the random value to the ruby image when click
		$(".ruby-image").on("click", function() {
			valueRuby = ($(this).attr("data-rubyvalue"));
			valueRuby = parseInt(valueRuby);
			counterRuby += valueRuby;
			counterTotal = counterDia + counterRuby + counterSap + counterEme;
			$("#score").text(counterTotal);
			evaluate();	
		});

		
		//Generate random value for sapphire
		for (var i=0; i<12; i++) {
			var imageSapphire = $(".sapphire-image");
			var random = Math.floor((Math.random() * 12) + 1);	
			imageSapphire.attr("data-sapphirevalue", random);	
		}
		//Assign the random value to the ruby image when click
		$(".sapphire-image").on("click", function() {
			valueSapphire = ($(this).attr("data-sapphirevalue"));
			valueSapphire = parseInt(valueSapphire);
			counterSap += valueSapphire;
			counterTotal = counterDia + counterRuby + counterSap + counterEme;
			$("#score").text(counterTotal);
			evaluate();	
		});

		
		//Generate random value for sapphire
		for (var i=0; i<12; i++) {
			var imageEmerald = $(".emerald-image");
			var random = Math.floor((Math.random() * 12) + 1);	
			imageEmerald.attr("data-emeraldvalue", random);	
		}
		//Assign the random value to the ruby image when click
		$(".emerald-image").on("click", function() {
			valueEmerald = ($(this).attr("data-emeraldvalue"));
			valueEmerald = parseInt(valueEmerald);
			counterEme += valueEmerald;
			counterTotal = counterDia + counterRuby + counterSap + counterEme;
			$("#score").text(counterTotal);
			evaluate();	
		});

});

	











