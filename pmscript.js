
$.getJSON("https://statsapi.web.nhl.com/api/v1/people/8466139/stats?stats=careerRegularSeason", function(data){
	
	console.log(data);


	var pmgwgoals = data.stats[0].splits[0].stat.gameWinningGoals;
	
	
			$('.pmgwgoals').append(pmgwgoals);
	
		}
		 );