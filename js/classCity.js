/* Class for a city element */
function cityClass(id) {
	var that = this;
	that.id = id;

	/* updates element's position and initiates seconds timer */
	that.update = function() {
		/* update seconds */
		var timer = setInterval(function(target) { // do 10 times per second...
			if(isRunning && target.element != undefined) // if game is not paused and corresponding element exists...
			{
				var actual_time;
				// write actual_time into the span inside the html element. Increase actual_time by 0.1. If actual_number is a whole number add ".0" to it for a uniform look. 
				target.element.getElementsByTagName("span")[0].innerHTML = (((actual_time = Math.round((target.time += 0.1)*10)/10)%1) != 0) ? actual_time : actual_time+".0";
				
				if(target.time >= timePerCity)
				{
					clearInterval(timer);
					// if lifetime of the city is reached and it's a capital (so no player pushed his button), give a penalty to each player (and show it to them while a break of 1.5 sec before resetting the city)
					if(target != undefined && target.key == 0)
					{	
						for(var n=0;n<players.length;n++)
							players[n].addScore(0,timePerCity);
						isRunning = false;
						document.body.classList.add("show");
						setTimeout(function() {isRunning = true;document.body.classList.remove("show");target.reset();},1500);
						return;
					}
					// otherwise just change the city to a new one
					target.reset();
				}
			}
		}, 100, that);

		// rearrange elements position
		that.element.style.left = that.pos[0]+"%";
		that.element.style.top = that.pos[1]+"%";
	}


	/* updates or creates new html element with the informations stored in the attributes of this class */
	that.show = function() {
		// try to find an existing element matching this instance
		if(that.element == undefined)
			that.element = document.getElementById("city_"+that.id);
		
		if(that.element == null || that.element == undefined) // if there is no corresponding element existing...
		{
			// create a new one
			console.log("creating html element (city) / "+that.name);
			that.element = document.createElement("DIV");
			that.element.className = "city";
			document.body.appendChild(that.element);
		}
		else
			console.log("updating html element (city) / "+that.name);
		
		// update the element's content (city name)
		that.element.innerHTML = that.name+" <span>"+that.time+"</span>";
		that.update();
	}

	/* resets all attributes (new city) */
	that.reset = function() {
		that.time = 0.0;
		that.pos = [Math.random()*90+5, Math.random()*90+5]; // position as a array of 2 (left,top)
		
		// set to a new city which is _not_ already displayed at the moment
		var key = "";
		do {
			key = randomCity();
		} while (cityIsDisplayed(key));
		that.key = key;
		
		that.name = countriesData[displayedCountry].cities[that.key];

		that.show();
		
		if(that.key == 0) that.element.classList.add("capital");
		else that.element.classList.remove("capital");
	};
	that.reset();

	/* destroys the corresponding html element and empties the element attribute */
	that.hide = function() {
		removeElement(that.element);
		that.element = undefined;
	}

}