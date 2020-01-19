
$.getJSON("https://records.nhl.com/site/api/skater-multipoint-games-career?cayenneExp=gameTypeId=2%20and%20playerId=8471214", function(data){
	
	console.log(data);
	
	

	var multigoal = data.data[0].multiGoalGames;

	
	

	

		$('.multigoal').append(multigoal);

	
	}
		 );