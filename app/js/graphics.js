define(["object-pool", "controls", "json!../config/config.json"],
	function(objectPool, controls, config) {
	var canvas, context, width, height;

	function init() {
		canvas = document.getElementById('canvas');
		context = canvas.getContext('2d');
		width = window.innerWidth;
		height = window.innerHeight;
		context.canvas.width  = width
  	context.canvas.height = height;
	}

	function clear() {
		context.clearRect(0, 0, width, height);
    context.save();
	}

	function drawObjects() {
		objectPool.getList().forEach(function(object) {
			object.draw(context);
		});
	}

	function animate() {
		clear();
		drawObjects();
		context.restore();
	}

	function getCanvas() {
		return canvas;
	}

	return {
		init : init,
		getCanvas : getCanvas,
		animate : animate
	}
});