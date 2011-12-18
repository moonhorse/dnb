dojo.provide('model.menu_model');

MenuModel = Backbone.Model.extend({
  defaults: {
    items: [
      {
        display: 'Play',
        nav: 'newGame'
      },
      {
        display: 'Tutorial',
        nav: 'tutorial'
      },
      {
        display: 'History',
        nav: 'history'
      }
    ]
  }
});
