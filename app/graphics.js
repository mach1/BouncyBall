define([], function() {

  var canvas, context, frameHeight, frameWidth;

  function init() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    frameHeight = canvas.height;
    frameWidth = canvas.width;

  }

  function start() {
    animate();
  }

  function animate() {
    requestAnimationFrame(animate);
  }

  function clearFrame() {
    context.clearRect(0, 0, frameWidth, frameHeight);
    context.save();
  }

  return {
    init : init,
    start : start
  }
});