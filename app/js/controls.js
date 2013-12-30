define(["object-pool"], function(objectPool) {

	var isMouseDown = false;

	function mouseMove(event) {

	}

	function mouseDown(event) {
		var objects = objectPool.getList();
		objects.forEach(function(object) {

			object.touches(event.x, event.y);
		});
	}

	function mouseUp(event) {

	}

	function init(canvas) {
		canvas.onmousemove = mouseMove;
    canvas.onmousedown = mouseDown;
    canvas.onmouseup = mouseUp;
	}

	return {
		init : init
	}
});