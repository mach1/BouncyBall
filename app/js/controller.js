define(["graphics", "logic", "controls"], function(graphics, logic, controls) {

  var startTime;

	function start() {
		logic.init();
		graphics.init();
    controls.init(graphics);
    startTime = new Date().getTime();
    requestAnimationFrame(loop);
  }


  function loop() {
    var now = new Date().getTime();
    var timeDiff = now - startTime;
    startTime = now;
    graphics.animate();
    logic.step(timeDiff);

    requestAnimationFrame(loop);
  }

	return {
		start : start
	}
});