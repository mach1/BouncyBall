define([], function() {
	var objects = [];

	function getList() {
		return objects;
	}

	function put(object) {
		objects.push(object);
	}

	return {
		getList : getList,
		put 		: put
	}
});