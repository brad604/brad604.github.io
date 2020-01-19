
$.getJSON("https://records.nhl.com/site/api/three-or-more-goal-games-career?cayenneExp=threeOrMoreGoalGames>=1%20and%20playerId=8471214", function(data){
	
	console.log(data);
	
	

	var hats = data.data[0].threeOrMoreGoalGames;


	
	

	

		$('.hats').append(hats);


	
	}
		 );