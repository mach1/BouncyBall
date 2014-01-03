define(['game-object'], function(GameObject) {

	function Ball(x, y, radius) {
		this.position = {
			x : x,
			y : y
		};
		this.radius = 40;
		this.restitution = -0.7;
		this.velocity = {
			x : 0,
			y : 0
		},
		this.movable = true;
		this.dragCoefficient = 0.47;
		this.mass = 5;
	}

	Ball.prototype = new GameObject();

	Ball.prototype.draw = function(context) {
		context.fillStyle = 'red';
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
	};

	Ball.prototype.touches = function(x, y) {
		var offsetX = x - this.position.x;
		var offsetY = y - this.position.y;
		var distanceFromCenter = Math.sqrt(Math.pow(offsetX, 2) +
			Math.pow(offsetY, 2));
		return distanceFromCenter < this.radius;
	};

	Ball.prototype.moveTo = function(x, y) {
		this.position.x = x;
		this.position.y = y;
	};

	Ball.prototype.move = function() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
	};

	Ball.prototype.getCrossSectionalArea = function() {
		// area of circle
		var area = Math.PI * Math.pow(this.radius, 2);
		// in m^2
		return area / 10000;
	};

	return Ball;
});