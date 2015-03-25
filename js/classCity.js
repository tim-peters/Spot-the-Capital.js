function cityClass(id) {
	var that = this;
	that.id = id;

	that.show = function() {
		if(that.element == undefined)
			that.element = document.getElementById("city_"+that.id);
		//console.log(that.element);
		if(that.element == null || that.element == undefined)
		{
			console.log("creating html element (city) / "+that.name);
			that.element = document.createElement("DIV");
			that.element.className = "city";
			document.body.appendChild(that.element);
		}
		else
			console.log("updating html element (city) / "+that.name);
		that.element.innerHTML = that.name+"<br><span>"+that.time+"</span>";
		that.update();
		//setTimeout(function() { that.reset(); that.update(); }, timePerCity*1000);
	}

	that.hide = function() {
		removeElement(that.element);
		that.element = undefined;
	}
	that.update = function() {
		//console.log("updating: "+this.name);
		function updateSeconds(target) {
			//console.log("updateSeconds of "+target.element.innerHTML);
			var timer = setInterval(function(t) {
				if(isRunning && t.element != undefined)
				{
					t.element.getElementsByTagName("span")[0].innerHTML = Math.round((t.time += 0.1)*10)/10;
					if(t.time >= timePerCity)
					{
						clearInterval(timer);
						if(t != undefined && t.key == 0)
						{	
							for(var n=0;n<players.length;n++)
								players[n].addScore(0,timePerCity);
							isRunning = false;
							t.element.classList.add("failed");
							setTimeout(function() {isRunning = true;t.element.classList.remove("failed");t.reset();},1500);
							return;
						}
						t.reset();
					}
				}
			}, 100, target);
			//target.element.style.color = "red";
		}
		updateSeconds(that);
		//that.element.innerHTML = that.name+" <span>"+ (that.time += 4) +"</span>";
		that.element.style.left = that.pos[0]+"%";
		that.element.style.top = that.pos[1]+"%";
		//setTimeout(function() { that.reset(); that.update(); }, timePerCity*1000);
	}

	that.reset = function() {
		that.time = 0.0;
		that.pos = [Math.random()*90+5, Math.random()*90+5];
		var key = "";
		do {
			key = randomCity();
		} while (cityIsDisplayed(key));
		that.key = key;
		that.name = countriesData[displayedCountry].cities[that.key];
		//console.log("created city ("+that.name+")");

		that.show();
	};
	that.reset();
}