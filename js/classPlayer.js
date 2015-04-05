function playerClass(id) {
	var that = this;
	that.id = id;

	that.reset = function() {
		that.key = keys[that.id].name;
		that.keycode = keys[that.id].keycode;
		that.time = 0.0;
		that.points = 0;
	};
	that.reset();

	that.show = function() {
		that.element = document.createElement("DIV");
		that.element.className = "player";
		that.update();
		switch(that.id) {
			case 1:
				that.element.style.top = 0;
				that.element.style.right = 0;
			break;

			case 2:
				that.element.style.bottom = 0;
				that.element.style.left = 0;
			break;

			case 3:
				that.element.style.bottom = 0;
				that.element.style.right = 0;
			break;

			default:
				that.element.style.top = 0;
				that.element.style.left = 0;
			break;
		}
		document.body.appendChild(that.element);
	}

	that.update = function() {
		that.element.innerHTML = "<strong>Player "+(that.id+1)+" ("+that.key+")</strong><br>\nPoints: "+that.points+" / Time: "+Math.round(that.time*10)/10+"<br>Score: "+that.getScore();//Math.round((that.time += 0.1)*10)/10;;
	}

	that.addScore = function(score, time) {
		that.points += score;
		that.time += parseFloat(time);
		that.update();

		if(score > 0)
		{
			console.log("player "+(that.id+1)+" scored a point!");
			that.element.className = "player";
			that.element.offsetWidth = that.element.offsetWidth;
			that.element.classList.add("succeed");
		}
		else
		{
			console.log("player "+(that.id+1)+" failed!");
			that.element.className = "player"; // stop evetually running animation
			that.element.offsetWidth = that.element.offsetWidth; // trigger reflow (necessary for restarting the animation)
			that.element.classList.add("failed"); // start new animation
		}
	}

	that.getScore = function() {
		return (that.time >= 1) ? Math.round(that.points/that.time*100)/100 : that.points;
	}
}