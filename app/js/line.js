define(['game-object'], function(GameObject) {

  function Line(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = x2;

  }

  Line.prototype = GameObject.prototype;

  Line.prototype.draw = function(context) {
    context.beginPath();
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.stroke();
    context.closePath();
  }

  Line.prototype.setEnd = function(x, y) {
    this.x2 = x;
    this.y2 = y;
  }

  return Line;
});