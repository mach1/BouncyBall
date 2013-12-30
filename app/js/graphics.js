define(["object-pool", "controls"], function(objectPool, controls) {
	var canvas, context;

	function init() {
		canvas = document.getElementById('canvas');
		context = canvas.getContext('2d');
		controls.init(canvas);
	}

	function start() {
		animate();
	}

	function clear() {
		context.clearRect(0, 0, 500, 400);
    context.save();
	}

	function drawObjects() {
		var objects = objectPool.getList();
		for (var i = 0; i < objects.length; i++) {
			objects[i].draw(context);
		}
	}

	function animate() {
		clear();
		drawObjects();
		context.restore();
		requestAnimationFrame(animate);
	}

	return {
		init : init,
		start : start
	}
});