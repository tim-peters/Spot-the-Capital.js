function start() {
	var content = "";

	content += "<div class=\"startScreen\">";
	
	content += "<h1>Spot the Capital</h1>";

	content += "<p>";
	content += "Amount of players<br>";
	content += "<input type='number' min='1' max='4' name='amountPlayers' value='"+amountPlayers+"'>";
	content += "</p>";

	content += "<p>";
	content += "Steps to win<br>";
	content += "<input type='number' min='1' max='"+countriesData.length+"' name='progressGoal' value='"+progressGoal+"'>";
	content += "</p>";

	content += "<p>";
	content += "Time per city<br>";
	content += "<input type='number' min='0.5' max='30' name='timePerCity' value='"+timePerCity+"'>";
	content += "</p>";

	content += "<input type=\"button\" onClick=\"startSubmit()\" value=\"START\">";

	content += "</div>";

	document.body.innerHTML = content;
}

function startSubmit() {
	amountPlayers = document.getElementsByName("amountPlayers")[0].value;
	progressGoal = document.getElementsByName("progressGoal")[0].value;
	timePerCity = document.getElementsByName("timePerCity")[0].value;

	document.body.innerHTML = "";
	startGame();
}