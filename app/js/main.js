require.config({
  paths : {
    json : 'vendor/json',
    text : 'vendor/text'
  },
  baseUrl: 'js'
});

require(['controller'], function(controller) {
    controller.start();
});
