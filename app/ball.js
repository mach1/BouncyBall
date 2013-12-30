define([], function() {

  function draw(context) {
    context.translate(ball.position.x, ball.position.y);
    context.beginPath();
    context.arc(0, 0, ball.radius, 0, Math.PI*2, true);
    context.fill();
    context.closePath();

    context.restore();
  }

  return {
    draw : draw
  }
});