var amountPlayers = 2,
	timePerCity = 5,
	progressGoal = 7,
	maxAmountCities = 5,
//------------- do not change anything beyond this line
players = [],
keys = [
	{
		name: "Q",
		keycode: "81"
	},
	{
		name: "P",
		keycode: "80"
	},
	{
		name: "X",
		keycode: "88"
	},
	{
		name: ".",
		keycode: "190"
	}

],
countriesData = [
	{
		country: "Germany",
		cities: [
			"Berlin",
			"Hamburg",
			"Munich",
			"Cologne",
			"Frankfurt",
			"Stuttgart",
			"Düsseldorf",
			"Dortmund",
			"Essen",
			"Bremen",
			"Dresden",
			"Leipzig",
			"Hannover",
			"Nuremberg",
			"Duisburg",
			"Bochum",
			"Wuppertal",
			"Bonn",
			"Bielefeld",
			"Mannheim"
		]
	},
	{
		country: "France",
		cities: [
			"Paris",
			"Marseille",
			"Lyon",
			"Toulouse",
			"Nice",
			"Nantes",
			"Strasbourg",
			"Montpellier",
			"Bordeaux",
			"Lille",
			"Rennes",
			"Reims",
			"Le Havre",
			"Saint-Étienne",
			"Toulon",
			"Grenoble",
			"Dijon",
			"Angers",
			"Villeurbanne",
			"Saint-Denis"
		]
	},
	{
		country: "USA",
		cities: [
			"Washington D.C.",
			"New York",
			"Los Angeles",
			"Chicago",
			"Houston ",
			"Philadelphia",
			"Phoenix",
			"San Antonio",
			"San Diego",
			"Dallas",
			"San Jose",
			"Austin",
			"Indianapolis",
			"Jacksonville",
			"San Francisco",
			"Columbus",
			"Charlotte",
			"Fort Worth",
			"Detroit",
			"Memphis"
		]
	},
	{
		country: "Russia",
		cities: [
			"Moscow",
			"Saint Petersburg",
			"Novosibirsk",
			"Yekaterinburg",
			"Nizhny Novgorod",
			"Samara",
			"Omsk",
			"Kazan",
			"Chelyabinsk",
			"Rostov-on-Don",
			"Ufa",
			"Volgograd",
			"Perm",
			"Krasnoyarsk",
			"Voronezh",
			"Saratov",
			"Krasnodar",
			"Tolyatti",
			"Izhevsk",
			"Ulyanovsk"
		]
	}
],
playerHasWon = -1,
displayedCountry = -1,
countryElement = {};
displayedCities = [],
displayedCountries = [],
isRunning = false,
progress = 0,
amountCitiesSinceCapital = 0;