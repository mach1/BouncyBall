define(["object-pool", "ball"], function(objectPool, Ball) {

	function init() {
		objectPool.put(new Ball(100, 100));
	}

	return {
		init : init
	}
});