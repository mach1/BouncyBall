define(["graphics", "logic", "controls"], function(graphics, logic, controls) {

	function start() {
		logic.init();
		graphics.init();
    controls.init(graphics);
		graphics.start();
	}

	return {
		start : start
	}
});