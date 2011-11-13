dojo.provide('model.menu_model');

MenuModel = Backbone.Model.extend({
  defaults: {
    items: [
      {
        display: 'New Game',
        nav: 'newGame'
      },
      {
        display: 'Tutorial',
        nav: 'tutorial'
      },
      {
        display: 'Training',
        nav: 'training'
      },
      {
        display: 'History',
        nav: 'history'
      }
    ]
  }
});
