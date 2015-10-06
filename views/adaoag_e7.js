function car(plateNo, model, color) {
	this.plateNo = plateNo;
	this.model = model;
	this.color = color;
	this.speed = 0;

	this.startCar = function() {
		this.speed = 10;
	}

	this.stopCar = function() {
		this.speed = 0;
	}
	
	this.accelerate = function(n) {
		this.speed += n;
	}

	this.decelerate = function(n) {
		this.speed -= n;
	}

	this.repaintCar = function(color) {
		this.color = color;
	}
}
