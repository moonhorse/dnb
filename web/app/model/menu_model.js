dojo.provide('model.menu_model');

MenuModel = Backbone.Model.extend({
  defaults: {
    items: [
      {
        display: 'New Game',
        nav: 'game'
      },
      {
        display: 'History',
        nav: 'history'
      },
      {
        display: 'Friends',
        nav: 'friends'
      },
      {
        display: 'Tutorial',
        nav: 'tutorial'
      }
    ]
  }
});
