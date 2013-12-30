define(["lodash", "controller"], function (_, controller) {
  controller.start();
  return {
    version: _.VERSION
  };
});
