dojo.require('view.menu_button_view');
dojo.provide('view.menu_view');

MenuView = Backbone.View.extend({
  el: '#menu',

  render: function() {
    var items = this.model.get('items');
    for (var i = 0; i < items.length; i++) {
      var button = new MenuButtonView({display: items[i].display, nav: items[i].nav});
      $('#menu_panel').append(button.render().el);
    }
    return this;
  }
});
