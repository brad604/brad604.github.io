
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


$.getJSON("https://cors-anywhere.herokuapp.com/https://records.nhl.com/site/api/skater-career-scoring-regular-season?cayenneExp=playerId=8471214", 
		  function(data){
   
    console.log(data);
   
   
 
    var otgoals = data.data[0].overtimeGoals;  
	var otgoalsbehind = 5000 - data.data[0].overtimeGoals;  
    var otpoints = data.data[0].overtimePoints;     
    var otpointsbehind = 5000 - data.data[0].overtimePoints;     

        $('.otgoals').append(otgoals);
        $('.otgoalsbehind').append(otgoalsbehind);
        $('.otpoints').append(otpoints);
        $('.otpointsbehind').append(otpointsbehind);	
	
    }
         );



$.getJSON("https://cors-anywhere.herokuapp.com/https://records.nhl.com/site/api/three-or-more-goal-games-career?cayenneExp=threeOrMoreGoalGames>=1%20and%20playerId=8471214", function(data){
	
	console.log(data);
	
	

var hats = data.data[0].threeOrMoreGoalGames;
var hatsbehind = 50 - data.data[0].threeOrMoreGoalGames + 1;


		$('.hats').append(hats);
		$('.hatsbehind').append(hatsbehind);

	
	}
		 );



$.getJSON("https://cors-anywhere.herokuapp.com/https://records.nhl.com/site/api/skater-multipoint-games-career?cayenneExp=gameTypeId=2%20and%20playerId=8471214", function(data){
	
	console.log(data);
	
	
	var multigoal = data.data[0].multiGoalGames;
	var multigoalbehind = 5000 - data.data[0].multiGoalGames;
	

		$('.multigoal').append(multigoal);
		$('.multigoalbehind').append(multigoalbehind);
	
	}
		 );
