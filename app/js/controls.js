define(["object-pool"], function(objectPool) {

	var mouseCanvas;
	var draggedObject;
	var graphics;
	var slingshot;

	function init(injectedGraphics) {
		graphics = injectedGraphics;
		mouseCanvas = graphics.getCanvas();
		mouseCanvas.onmousemove = mouseMove;
    mouseCanvas.onmousedown = mouseDown;
    mouseCanvas.onmouseup = mouseUp;
	}

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
		var touchedObjects = getObjectsTouchedByMouse(mousePosition);

		if (touchedObjects.length) {
			draggedObject = touchedObjects[0];
			draggedObject.velocity.x = 0;
			draggedObject.velocity.y = 0;
			createSlingshot(draggedObject.position.x, draggedObject.position.y, mousePosition.x, mousePosition.y);
		}
	}

	function getObjectsTouchedByMouse(mousePosition) {
		var objects = objectPool.getList();
		return objects.filter(function(object) {
			return object.touches(mousePosition.x, mousePosition.y);
		});
	}

	function createSlingshot(x1, y1, x2, y2) {
		slingshot = objectPool.addLine(x1, y1, x2, y2);
	}

	function mouseUp(event) {
		var mousePosition = getMousePosition(event);
		objectPool.remove(slingshot);
		slingshot = null;
		draggedObject.velocity.x = (draggedObject.position.x - mousePosition.x) / 10;
		draggedObject.velocity.y = (draggedObject.position.y - mousePosition.y) / 10;
	}


	return {
		init : init
	}
});