define(["game-object"], function(GameObject) {

	function Ball(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = 40;
		this.velocity = {
			x : 0,
			y : 0
		}
	};

	Ball.prototype = new GameObject();

	Ball.prototype.draw = function(context) {
		context.fillStyle = 'red';
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
	}

	Ball.prototype.touches = function(x, y) {
		var offsetX = x - this.x;
		var offsetY = y - this.y;
		var distanceFromCenter = Math.sqrt(Math.pow(offsetX, 2) +
			Math.pow(offsetY, 2));
		return distanceFromCenter < this.radius;
	}

	Ball.prototype.moveTo = function(x, y) {
		this.x = x;
		this.y = y;
	}

	Ball.prototype.move = function() {
		this.x += this.velocity.x;
		this.y += this.velocity.y;
	}

	return Ball;
});