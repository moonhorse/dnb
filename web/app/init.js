$(function() {
  dojo.registerModulePath('controller', '../app/controller');
  dojo.registerModulePath('model', '../app/model');
  dojo.registerModulePath('view', '../app/view');
  dojo.require('controller.app_controller');

  DnbApp.init();
});
