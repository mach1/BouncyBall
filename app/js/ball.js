define(["game-object"], function(GameObject) {

	function Ball(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = 40
	};

	Ball.prototype = new GameObject();

	Ball.prototype.draw = function(context) {
		context.fillStyle = 'red';
		//context.translate(this.x, this.y);
    context.beginPath();
    context.arc(this.x,this.y,50,0, Math.PI * 2, true);
    context.fill();
    context.closePath();
	}

	Ball.prototype.touches = function(x, y) {
		console.log(this.x);
		console.log(this.y);
		console.log(x);
		console.log(y);
		console.log(Math.sqrt(
			Math.pow((x - this.x), 2) +
			Math.pow((y - this.y), 2)
		));
	}

	return Ball;
});