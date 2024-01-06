

$.getJSON("https://ovirecords.herokuapp.com/https://records.nhl.com/site/api/scoring-plateaus?cayenneExp=fortyGoalSeasons%3E=1%20and%20playerId=8471214", 
		  function(data){
   
    console.log(data);
   
    var fortygoal = data.data[0].fortyGoalSeasons;  
	var fortygoalbehind = 12 - data.data[0].fortyGoalSeasons + 1;  
    var fiftygoal = data.data[0].fiftyGoalSeasons;     
    var fiftygoalbehind = 9 - data.data[0].fiftyGoalSeasons + 1;     
	var thirtygoal = data.data[0].thirtyGoalSeasons;     
    var thirtygoalbehind = 17 - data.data[0].thirtyGoalSeasons + 1;     
	var twentygoal = data.data[0].twentyGoalSeasons;     
    var twentygoalbehind = 22 - data.data[0].twentyGoalSeasons + 1;     

        $('.fortygoal').append(fortygoal);
        $('.fortygoalbehind').append(fortygoalbehind);
        $('.fiftygoal').append(fiftygoal);
        $('.fiftygoalbehind').append(fiftygoalbehind);	
	$('.thirtygoal').append(thirtygoal);
        $('.thirtygoalbehind').append(thirtygoalbehind);
	$('.twentygoal').append(twentygoal);
        $('.twentygoalbehind').append(twentygoalbehind);	
	
    }
         );

$.getJSON("https://ovirecords.herokuapp.com/https://records.nhl.com/site/api/skater-career-scoring-regular-season?cayenneExp=playerId=8471214", 
		  function(data){
   
    console.log(data);
   

    var otpoints = data.data[0].overtimePoints;     
    var otpointsbehind = 37 - data.data[0].overtimePoints + 1;     


        $('.otpoints').append(otpoints);
        $('.otpointsbehind').append(otpointsbehind);	
	
    }
         );

$.getJSON("https://ovirecords.herokuapp.com/https://records.nhl.com/site/api/three-or-more-goal-games-career?cayenneExp=threeOrMoreGoalGames>=1%20and%20playerId=8471214", function(data){
	
	console.log(data);
	
var hats = data.data[0].threeOrMoreGoalGames;
var hatsbehind = 50 - data.data[0].threeOrMoreGoalGames + 1;

		$('.hats').append(hats);
		$('.hatsbehind').append(hatsbehind);
	
	}
		 );



$.getJSON("https://ovirecords.herokuapp.com/https://records.nhl.com/site/api/skater-multipoint-games-career?cayenneExp=gameTypeId=2%20and%20playerId=8471214", function(data){
	
	console.log(data);
	
	var multigoal = data.data[0].multiGoalGames;
	var multigoalbehind = 189 - data.data[0].multiGoalGames + 1;
	
		$('.multigoal').append(multigoal);
		$('.multigoalbehind').append(multigoalbehind);
	
	}
		 );


$.getJSON("https://ovirecords.herokuapp.com/https://records.nhl.com/site/api/skater-career-scoring-regular-season?cayenneExp=playerId=8471675", 
		  function(data){
   
    console.log(data);
   
    var scotpoints = data.data[0].overtimePoints;  
 
        $('.scotpoints').append(scotpoints);
 
	
    }
         );

$.getJSON("https://ovirecords.herokuapp.com/https://records.nhl.com/site/api/skater-career-scoring-regular-season?cayenneExp=playerId=8470612", 
		  function(data){
   
    console.log(data);
   
    var rgotpoints = data.data[0].overtimePoints;  
 

        $('.rgotpoints').append(rgotpoints);
 
    }
         );

$.getJSON("https://ovirecords.herokuapp.com/https://records.nhl.com/site/api/skater-career-scoring-regular-season?cayenneExp=playerId=8469454", 
		  function(data){
   
    console.log(data);
   
    var ikotpoints = data.data[0].overtimePoints;  
 

        $('.ikotpoints').append(ikotpoints);
 
    }
         );

$.getJSON("https://ovirecords.herokuapp.com/https://records.nhl.com/site/api/skater-career-scoring-regular-season?cayenneExp=playerId=8471215", 
		  function(data){
   
    console.log(data);
   
    var emotpoints = data.data[0].overtimePoints;  
 

        $('.emotpoints').append(emotpoints);
 
    }
         );

$.getJSON("https://ovirecords.herokuapp.com/https://records.nhl.com/site/api/skater-career-scoring-regular-season?cayenneExp=playerId=8466138", 
		  function(data){
   
    console.log(data);
   
    var jtotpoints = data.data[0].overtimePoints;  
 

        $('.jtotpoints').append(jtotpoints);
 
    }
         );


$.getJSON("https://api-web.nhle.com/v1/player/8471214/landing", function(data){
	
	console.log(data);
	
	var goals = data.stats[0].splits[0].stat.goals;
	var goalsbehind = 894 - data.stats[0].splits[0].stat.goals + 1;
	var ppgoals = data.stats[0].splits[0].stat.powerPlayGoals;
	var ppgoalsbehind = 274 - data.stats[0].splits[0].stat.powerPlayGoals + 1;
	var gwgoals = data.stats[0].splits[0].stat.gameWinningGoals;
	var gwgoalsbehind = 135 - data.stats[0].splits[0].stat.gameWinningGoals + 1;
	
		$('.goals').append(goals);
 		$('.goalsbehind').append(goalsbehind);
		$('.ppgoals').append(ppgoals);
 		$('.ppgoalsbehind').append(ppgoalsbehind);
		$('.gwgoals').append(gwgoals);
 		$('.gwgoalsbehind').append(gwgoalsbehind);	
	
	}
		 );



$.getJSON("https://statsapi.web.nhl.com/api/v1/people/8466139/stats?stats=careerRegularSeason", function(data){
	
	console.log(data);
	
	var pmgwgoals = data.stats[0].splits[0].stat.gameWinningGoals;

		$('.pmgwgoals').append(pmgwgoals);
	
	}
		 );
