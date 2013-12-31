define([], function() {
	function GameObject(x, y) {
		this.x = x;
		this.y = y;
	}

  GameObject.prototype.move = function() {};

	return GameObject;
});
