define(['object-pool', 'ball'], function(objectPool, Ball) {
  var height = window.innerHeight;
  var width = window.innerWidth;


	function init() {
		objectPool.put(new Ball(100, 100));
	}

  function step(timeDiff) {
    calculateVelocities(timeDiff);
    moveObjects();
  }

  function moveObjects() {
    objectPool.getList().forEach(function(object) {
      object.move();
      if (object.movable) {
        checkOutOfBounds(object);
      }
    });
  }

  function calculateVelocities(timeDiff) {
    objectPool.getList().forEach(function(object) {
      var acceleration;
      if (object.movable) {
        acceleration = calculateAcceleration(object);
        debugger;
        object.velocity.x += (acceleration.x * (timeDiff / 1000));
        object.velocity.y += (acceleration.y * (timeDiff / 1000));
      }
    });
  }

  function calculateAcceleration(object) {
    var force = calculateForces(object);
    var g = 9.81;

    return {
      x : force.x / object.mass,
      y : g + force.y / object.mass
    }
  }

  function calculateForces(object) {
    var dragForce = calculateDragForce(object, 1.22);
    return dragForce;
  }


  function calculateDragForce(object, rho) {
    // F = 0.5 * rho * v^2 * Cd * A
    var vx = object.velocity.x;
    var vy = object.velocity.y;
    var Cd = object.dragCoefficient;
    var A = object.getCrossSectionalArea();
    var Fx = -0.5 * rho * Math.pow(vx, 2) * Cd * A;
    var Fy = -0.5 * rho * Math.pow(vy, 2) * Cd * A;
    debugger;
    return {
      x : isNaN(Fx) ? 0 : Fx,
      y : isNaN(Fy) ? 0 : Fy
    }
  }

  function checkOutOfBounds(object) {
    if (object.position.y > height - object.radius) {
      object.velocity.y *= object.restitution;
      object.position.y = height - object.radius;
    }

    if (object.position.x > width - object.radius) {
      object.velocity.x *= object.restitution;
      object.position.x = width - object.radius;
    }

    if (object.position.x < object.radius) {
      object.velocity.x *= object.restitution;
      object.position.x = object.radius;
    }
  }

	return {
		init : init,
    step : step
	}
});