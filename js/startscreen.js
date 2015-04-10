/* creates the neccessary html content for the startscreen */
function start() {
	var content = "";

	content += "<div class=\"startScreen\">";
	
		content += "<h1>Spot the Capital</h1>";
		
		content += "<div class=\"explanation\">";
			content += "<strong>Find the bees to collect honey for the picnic!</strong>";
			content += "<p>"
			content += "It is hard to distinguish bees from flies agains the sun light. Fortunately just the bees can tell you the capital cities of each country. <br>So be fast and push your button when you see the correct city."
			content += "</p>"
			content += "<span class=\"bug\" style=\"background-image:url(./img/bee.png)\"></span>";
			content += "<span class=\"bug\" style=\"background-image:url(./img/bug.png)\"></span>";
			content += "<span class=\"bug\" style=\"background-image:url(./img/fly.png)\"></span><br>";
		content += "</div>";

		content += "<div class=\"preferences\">";

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

			content += "<p>";
				content += "<input type=\"button\" onClick=\"startSubmit()\" value=\"start game!\">";
			content += "</p>";

		content += "</div>";

		content += "<div class=\"rules\">";
			content += "<strong>The rules</strong>";
			content += "<p>The game’s goal is to spot the capital cities of the displayed countries. To spot a capital players must push their assigned buttons as fast as possible when the correct city is displayed.</p>";
			content += "<p>It is to avoid to press the button for not-capitals as well as missing to press when the capital is displayed.</p>";
			content += "<p>Each players score is calculated as a relation of scored points (spotted capitals minus mistakes) and time needed.</p>";
		content += "</div>";

	content += "</div>";

	document.body.innerHTML = content;
}

/* writes the determined values in the corresponding variables and runs the startGame()-Function */
function startSubmit() {
	amountPlayers = document.getElementsByName("amountPlayers")[0].value;
	progressGoal = document.getElementsByName("progressGoal")[0].value;
	timePerCity = document.getElementsByName("timePerCity")[0].value;

	document.body.innerHTML = "";
	startGame();
}