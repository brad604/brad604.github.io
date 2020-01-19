$.getJSON("https://records.nhl.com/site/api/skater-career-scoring-regular-season?cayenneExp=playerId=8471214", function(data){
	
	console.log(data);
	

	var otpoints = data.data[0].overtimePoints;
	var otgoals = data.data[0].overtimeGoals;	
	

		$('.otpoints').append(otpoints);
		$('.otgoals').append(otgoals);
	
	}
		 );