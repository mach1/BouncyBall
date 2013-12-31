define(["object-pool"], function(objectPool) {

	var mouseCanvas;
	var draggedObject;
	var graphics;
	var slingshot;

	function getMousePosition(event) {
		return {
	  	x : event.pageX - canvas.offsetLeft,
	    y : event.pageY - canvas.offsetTop
		}
	}

	function mouseMove(event) {
		var mousePosition = getMousePosition(event);
		if (slingshot) {
			slingshot.setEnd(mousePosition.x, mousePosition.y);
		}
	}

	function mouseDown(event) {
		var mousePosition = getMousePosition(event);
		var objects = objectPool.getList();
		var touchedObjects = objects.filter(function(object) {
			return object.touches(mousePosition.x, mousePosition.y);
		});

		if (touchedObjects.length) {
			draggedObject = touchedObjects[0];
			createSlingshot(draggedObject.x, draggedObject.y, mousePosition.x, mousePosition.y);
		}
	}

	function createSlingshot(x1, y1, x2, y2) {
		slingshot = objectPool.addLine(x1, y1, x2, y2);
	}

	function mouseUp(event) {
		var mousePosition = getMousePosition(event);
		objectPool.remove(slingshot);
		slingshot = null;
		draggedObject.velocity.x = (draggedObject.x - mousePosition.x) / 10;
		draggedObject.velocity.y = (draggedObject.y - mousePosition.y) / 10;
	}

	function init(injectedGraphics) {
		graphics = injectedGraphics;
		canvas.onmousemove = mouseMove;
    canvas.onmousedown = mouseDown;
    canvas.onmouseup = mouseUp;
    mouseCanvas = canvas;
	}

	return {
		init : init
	}
});