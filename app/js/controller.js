define(["graphics", "logic"], function(graphics, logic) {

	function start() {
		logic.init();
		graphics.init();
		graphics.start();
	}

	return {
		start : start
	}
});