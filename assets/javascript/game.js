
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
	var crystalValue = 0;


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
		setDiamondValue();
		setRubyValue();
		setSapphireValue();
		setEmeraldValue();				
}

//Generate a random number to set target for the round
	function setTarget() {
		for (var i=0; i<120; i++) {
			var random = Math.floor((Math.random() * 102) + 19);
			targetNumber = random;
			$("#target").text(random);
		}	
	}	

//Generate a random value for diamond
	function setDiamondValue() {
		for (var i=0; i<12; i++) {
			var random = Math.floor((Math.random() * 12) + 1);
			crystalDia = random;
		}
	}

//Generate a random value for ruby
	function setRubyValue() {
		for (var i=0; i<12; i++) {
			var random = Math.floor((Math.random() * 12) + 1);
			crystalRuby = random;
		}
	}

//Generate a random value for sapphire
	function setSapphireValue() {
		for (var i=0; i<12; i++) {
			var random = Math.floor((Math.random() * 12) + 1);
			crystalSap = random;
		}
	}

//Generate a random value for Emerald
	function setEmeraldValue() {
		for (var i=0; i<12; i++) {
			var random = Math.floor((Math.random() * 12) + 1);
			crystalEme = random;
		}
	}

//Progress evaluation
	function evaluate(){
		if (counterTotal == targetNumber) {
			wins++;
	 		$("#wins").text("Wins: " + wins);
	 		alert("You win!");
	 		setTarget();
	 		reset();
	 			 		
		}
		else if (counterTotal > targetNumber) {
			losses++;
			alert("You Lose!");
 			$("#losses").text("Loses: " +  losses);
 			setTarget();
 			reset();	
 					
		}	
	}
//===========================================================================	

//Game Starts
//===========================================================================
	reset();
	setTarget();
			
	
		//Assign the random value to the diamond image when click
		$(".diamond-image").on("click", function() {
			var imageDiamond = $(".diamond-image");		
			imageDiamond.attr("data-diamondvalue", crystalDia);	
			valueDiamond = ($(this).attr("data-diamondvalue"));
			valueDiamond = parseInt(valueDiamond);
			counterDia += valueDiamond;
			counterTotal = counterDia + counterRuby + counterSap + counterEme;
			$("#score").text(counterTotal);
			evaluate();
		});
		
	
		//Assign the random value to the ruby image when click
		$(".ruby-image").on("click", function() {
			//setValue();
			var imageRuby = $(".ruby-image");
			imageRuby.attr("data-rubyvalue", crystalRuby);
			valueRuby = ($(this).attr("data-rubyvalue"));
			valueRuby = parseInt(valueRuby);
			counterRuby += valueRuby;
			counterTotal = counterDia + counterRuby + counterSap + counterEme;
			$("#score").text(counterTotal);
			evaluate();	
		});

	
		//Assign the random value to the ruby image when click
		$(".sapphire-image").on("click", function() {
			//setValue();
			var imageSapphire = $(".sapphire-image");
			imageSapphire.attr("data-sapphirevalue", crystalSap);
			valueSapphire = ($(this).attr("data-sapphirevalue"));
			valueSapphire = parseInt(valueSapphire);
			counterSap += valueSapphire;
			counterTotal = counterDia + counterRuby + counterSap + counterEme;
			$("#score").text(counterTotal);
			evaluate();	
		});

		
		//Assign the random value to the ruby image when click
		$(".emerald-image").on("click", function() {
			//setValue();
			var imageEmerald = $(".emerald-image");
			imageEmerald.attr("data-emeraldvalue", crystalEme);
			valueEmerald = ($(this).attr("data-emeraldvalue"));
			valueEmerald = parseInt(valueEmerald);
			counterEme += valueEmerald;
			counterTotal = counterDia + counterRuby + counterSap + counterEme;
			$("#score").text(counterTotal);
			evaluate();	
		});

});

	











