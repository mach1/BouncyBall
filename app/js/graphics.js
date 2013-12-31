define(["object-pool", "controls"], function(objectPool, controls) {
	var canvas, context;

	function init() {
		canvas = document.getElementById('canvas');
		context = canvas.getContext('2d');
	}

	function start() {
		animate();
	}

	function clear() {
		context.clearRect(0, 0, 800, 600);
    context.save();
	}

	function drawObjects() {
		objectPool.getList().forEach(function(object) {
			object.draw(context);
		});
	}

	function moveObjects() {
		objectPool.getList().forEach(function(object) {
			object.move();
		});
	}

	function animate() {
		clear();
		moveObjects();
		drawObjects();
		context.restore();
		requestAnimationFrame(animate);
	}

	function getCanvas() {
		return canvas;
	}

	return {
		init : init,
		start : start,
		canvas : canvas
	}
});