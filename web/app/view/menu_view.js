dojo.require('view.menu_button_view');
dojo.require('view.templates');
dojo.provide('view.menu_view');

MenuView = Backbone.View.extend({
  id: 'menu',

  textTemplate: _.template(TPL_TEXT),

  render: function() {
    var items = this.model.get('items');

    $(this.el).append(this.textTemplate({
      text : 'Scientifically proven to improve your IQ!',
      id: 'menu_improve'
    }));

    var panel = $('<div id="menu_panel"></div>');
    for (var i = 0; i < items.length; i++) {
      var button = new MenuButtonView({display: items[i].display, nav: items[i].nav});
      panel.append(button.render().el);
    }

    $(this.el).append(panel);  
    return this;
  }
});
