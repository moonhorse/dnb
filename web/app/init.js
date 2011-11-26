$(function() {
  dojo.registerModulePath('controller', '../app/controller');
  dojo.registerModulePath('model', '../app/model');
  dojo.registerModulePath('view', '../app/view');
  dojo.require('controller.app_controller');

  DnbApp.init();

  $.jqplot('chartdiv',  [[[1, 2],[3,5.12],[5,13.1],[7,33.6],[9,85.9],[11,219.9]]]);
});
