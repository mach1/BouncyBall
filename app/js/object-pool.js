define(['line'], function(Line) {
	var objects = [];

	function getList() {
		return objects;
	}

	function put(object) {
		objects.push(object);
	}

	function addLine(x1, y1, x2, y2) {
		var line = new Line(x1, y1, x2, y2);
		put(line);
		return line;
	}

	function remove (object) {
		var index = objects.indexOf(object);
		if (~index) {
			objects.splice(index, 1);
		}
	}

	return {
		getList : getList,
		put 		: put,
		addLine : addLine,
		remove  : remove
	};
});