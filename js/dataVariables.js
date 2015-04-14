// Initial values
var amountPlayers = 2, // How many players?
	timePerCity = 4, // How much time to recognize a city?
	progressGoal = 5, // How many recognized cities are needed to finish the game?
	maxAmountCities = 5, // How many cities should be displayed around the country at the same time?
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
//------------- do not change anything beyond this line
players = [],
displayedCountry = -1,
countryElement = {},
honey_jam = {},
progressBar = {},
displayedCities = [],
displayedCountries = [],
isRunning = false,
progress = 0,
amountCitiesSinceCapital = 0,
countriesData = [
	{
		country: "Australia",
		cities: [
			"Canberra",
			"Sydney",
			"Melbourne",
			"Brisbane",
			"Perth",
			"Adelaide",
			"Gold Coast (Queensland)",
			"Newcastle",
			"Sunshine Coast (Queensland)",
			"Wollongong",
			"Hobart",
			"Geelong",
			"Townsville",
			"Cairns",
			"Darwin"
		]
	},
	{
		country: "Canada",
		cities: [
			"Ottawa",
			"Toronto",
			"Montreal",
			"Calgary",
			"Edmonton",
			"Mississauga",
			"Winnipeg",
			"Vancouver",
			"Brampton",
			"Hamilton",
			"Quebec City",
			"Surrey",
			"Laval",
			"Halifax",
			"London (Ontario)",
			"Markham",
			"Vaughan",
			"Gatineau",
			"Longueuil",
			"Burnaby"
		]
	},
	{
		country: "China",
		cities: [
			"Beijing",
			"Chongqing",
			"Shanghai",
			"Tianjin",
			"Hong Kong",
			"Macau",
			"Anqing",
			"Bengbu",
			"Bozhou",
			"Chaohu",
			"Chizhou",
			"Chuzhou",
			"Fuyang",
			"Hefei",
			"Huaibei",
			"Huainan",
			"Huangshan",
			"Jieshou",
			"Lu'an",
			"Ma'anshan",
			"Mingguang"
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
		country: "Ireland",
		cities: [
			"Dublin",
			"Cork",
			"Limerick",
			"Galway",
			"Waterford",
			"Drogheda",
			"Dundalk",
			"Swords",
			"Bray",
			"Navan",
			"Ennis",
			"Kilkenny",
			"Tralee",
			"Carlowis",
			"Newbridge"
		]
	},
	{
		country: "Italia",
		cities: [
			"Rome",
			"Milan",
			"Naples",
			"Turin",
			"Palermo",
			"Genoa",
			"Bologna",
			"Florence",
			"Bari",
			"Catania",
			"Venice",
			"Verona",
			"Messina",
			"Padua",
			"Trieste",
			"Taranto",
			"Brescia",
			"Prato",
			"Reggio Calabria",
			"Modena"
		]
	},
	{
		country: "Netherlands",
		cities: [
			"Amsterdam",
			"Rotterdam",
			"The Hague",
			"Utrecht",
			"Eindhoven",
			"Tilburg",
			"Groningen",
			"Almere",
			"Breda",
			"Nijmegen",
			"Enschede",
			"Apeldoorn",
			"Haarlem",
			"Amersfoort",
			"Arnhem",
			"Zaanstad",
			"'s-Hertogenbosch",
			"Haarlemmermeer",
			"Zoetermeer",
			"Zwolle"
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
	},
	{
		country: "Spain",
		cities: [
			"Madrid",
			"Barcelona",
			"Valencia",
			"Seville",
			"Zaragoza",
			"Málaga",
			"Murcia",
			"Palma de Majorca",
			"Las Palmas de Gran Canaria",
			"Bilbao",
			"Alicante",
			"Córdoba",
			"Valladolid",
			"Vigo",
			"Gijón",
			"L'Hospitalet de Llobregat",
			"A Coruña",
			"Vitoria-Gasteiz",
			"Granada",
			"Elche"
		]
	},
	{
		country: "Switzerland",
		cities: [
			"Bern",
			"Zurich",
			"Geneva",
			"Basel",
			"Lausanne",
			"Lucerne",
			"Winterthur",
			"St. Gallen",
			"Lugano",
			"Thun",
			"Köniz",
			"La Chaux-de-Fonds",
			"Schaffhausen",
			"Fribourg",
			"Vernier",
			"Chur",
			"Neuchâtel",
			"Uster",
			"Sion"
		]
	},
	{
		country: "United Kingdom",
		cities: [
			"London",
			"Edinburgh",
			"Manchester",
			"Birmingham",
			"Glasgow",
			"Liverpool",
			"Bristol",
			"Oxford",
			"Cambridge",
			"Cardiff",
			"Brighton",
			"Newcastle-upon-Tyne",
			"Leeds",
			"York",
			"Inverness",
			"Bath",
			"Nottingham",
			"Reading",
			"Aberdeen",
			"Chester"
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
	}
];