
$.getJSON("https://statsapi.web.nhl.com/api/v1/people/8471214/stats?stats=careerRegularSeason", function(data){
	
	console.log(data);
	
	

	var goals = data.stats[0].splits[0].stat.goals;
	var goalsbehind = 894 - data.stats[0].splits[0].stat.goals + 1;
	
	var ppgoals = data.stats[0].splits[0].stat.powerPlayGoals;
	var ppgoalsbehind = 274 - data.stats[0].splits[0].stat.powerPlayGoals + 1;
	
	var gwgoals = data.stats[0].splits[0].stat.gameWinningGoals;
	var gwgoalsbehind = 135 - data.stats[0].splits[0].stat.gameWinningGoals + 1;
	
	
		var goals2 = data.stats[0].splits[0].stat.goals;
		var assists = data.stats[0].splits[0].stat.assists;
		var games = data.stats[0].splits[0].stat.games;
		var shots = data.stats[0].splits[0].stat.shots;
		var points = data.stats[0].splits[0].stat.points;
		var pim = data.stats[0].splits[0].stat.penaltyMinutes;	
	

		$('.goals').append(goals);
 		$('.goalsbehind').append(goalsbehind);
		$('.ppgoals').append(ppgoals);
 		$('.ppgoalsbehind').append(ppgoalsbehind);
		$('.gwgoals').append(gwgoals);
 		$('.gwgoalsbehind').append(gwgoalsbehind);	
	
	
		$('.goals2').append(goals2);
		$('.assists').append(assists);
		$('.games').append(games);
		$('.shots').append(shots);
		$('.pim').append(pim);
		$('.points').append(points);
	
	}
		 );


$.getJSON("https://statsapi.web.nhl.com/api/v1/people/8466139/stats?stats=careerRegularSeason", function(data){
	
	console.log(data);


	var pmgwgoals = data.stats[0].splits[0].stat.gameWinningGoals;
	
	
			$('.pmgwgoals').append(pmgwgoals);
	
		}
		 );


$.getJSON("https://records.nhl.com/site/api/skater-career-scoring-regular-season?cayenneExp=playerId=8471214", function(data){
	
	console.log(data);
	
	

	var otpoints = data.data[0].overtimePoints;

	var otgoals = data.data[0].overtimeGoals;	
	

	

		$('.otpoints').append(otpoints);
		$('.otgoals').append(otgoals);
	
	}
		 );

