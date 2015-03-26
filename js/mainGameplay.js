function clearGame() {
	console.log("clearGame");
	players = [];
	for(var n = 0;n<amountPlayers;n++)
		players.push(new playerClass(n));
	
	playerHasWon = -1;
	displayedCountry = Math.round(Math.random()*(countriesData.length-1));
	displayedCities = [];
	displayedCountries = [];
	progress = 0;
}

function runGame() {
	function displayCityWithDelay(n) { 
		setTimeout(function() {
			displayedCities[n] = new cityClass(n); 
			//console.log(n)
		},Math.random()*timePerCity*1000);
	}
	for(var n = 0;n<maxAmountCities;n++)
	{
		if(displayedCities[n] == undefined)
		{
			displayCityWithDelay(n);
		}
		else // shoudn't be a possible anyway...
			displayedCities[n].reset();
	}
	isRunning = true;
}

function startGame() {
	console.log("startGame");

	clearGame();

	for(var n = 0;n<amountPlayers;n++)
	{
		players[n].show();
	}
	countryElement = document.createElement("H1");
	countryElement.id = "country";
	countryElement.innerHTML = countriesData[displayedCountry].country;
	document.body.appendChild(countryElement);

	runGame();
}

function clearCities() {
	for(var n=0;n<displayedCities.length;n++)
	{
		if(displayedCities[n] != undefined)
			displayedCities[n].hide();
	}
	displayedCities = [];
}

function scoreCalculation(a, b) {
/*	if(a.points != 0 && b.points != 0)
	{*/	
		var scoreA = (a.time >= 1) ? a.points/a.time : a.points;
		var scoreB = (b.time >= 1) ? b.points/b.time : b.points;
		return scoreB - scoreA;
/*	}
	else
	{
		var scoreA = a.time;
		var scoreB = b.time;		
		return scoreA - scoreB;
	}*/
}

function showResults() {
	players.sort(scoreCalculation);
	console.dir(players);
	countryElement.innerHTML = "Player "+(players[0].id + 1)+" wins!";
	players[0].element.classList.add("winner");
	document.body.innerHTML += "<span onClick='resetGame();'>RESTART</span>";
}

function resetGame() {
	clearGame();
	document.body.innerHTML = "";
	start();
}

function nextStep() {
	clearCities();
	if(++progress < progressGoal && progress < countriesData.length)
		changeCountry();
	else
		showResults();
}

function changeCountry() {
	console.log("next Country");

	displayedCountries.push(displayedCountry);

	do {
		displayedCountry = Math.round(Math.random()*(countriesData.length-1));
	} while (countryHasBeenDisplayed(displayedCountry));
	countryElement.innerHTML = countriesData[displayedCountry].country;

	runGame();
}

function checkAnswer(id) {
	for(var n=0;n<displayedCities.length;n++)
	{
		if(displayedCities[n] != undefined && displayedCities[n].key == 0)
		{
			    displayedCities[n].element.style.color = "green";
			    players[id].addScore(1,displayedCities[n].time);
			    return true;
		}
	}
	if(players[id].points > 0)
		players[id].addScore(-1,0)
	else
		players[id].addScore(0,timePerCity);

	return false;
}

document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;

    for(var n = 0;n<keys.length && isRunning;n++)
    {
    	if(e.keyCode == keys[n].keycode && n < amountPlayers)
    	{
    		console.log("Player "+players[n].id+" answered!");
    		if(checkAnswer(n))
    		{
    			isRunning = false;
    			setTimeout("nextStep();", 1500);
    		}
    		else
    		{
    			isRunning = false;
    			setTimeout(function() {isRunning = true;}, 500);
    		}
    		return true;
       	}
    }
    if(e.keyCode == 32)
    	isRunning = !isRunning;
}