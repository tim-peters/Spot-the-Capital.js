
/* return a city id randomly but at least every 25 times return the capial city id */
function randomCity() {
	var output;
	if(amountCitiesSinceCapital > 25 || (output = Math.round(Math.random()*(countriesData[displayedCountry].cities.length-1))) == 0)
	{
		amountCitiesSinceCapital = 0;	
		return 0;
	}
	else
	{
		amountCitiesSinceCapital++;
		return output;
	}
}

// check whether a city is already displayed (to avoid duplicates)
function cityIsDisplayed(key) {
	for(var n=0;n<displayedCities.length;n++)
		if(displayedCities[n] != undefined && displayedCities[n].key == key)
			return true;

	return false;
}

// check whether a country has already been displayed (to avoid showing it twice)
function countryHasBeenDisplayed(key) {
	for(var n=0;n<displayedCountries.length;n++)
		if(displayedCountries[n] == key)
			return true;

	return false;
}

// try to remove an html element.
// this function seems to be necessary because removing an element sometimes doesn't work (under investigation. might be a chrome bug) :(
function removeElement(elmt) {
	try {
		elmt.parentNode.removeChild(elmt)
	} catch (e) {
		throw new Error("unable to delete element. Empty it instead");
		elmt.innerHTML = "";
		elmt.id = "";
		elmt.className = "";
		return false;
	}
	return true;
}