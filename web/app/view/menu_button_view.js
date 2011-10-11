dojo.provide('view.menu_button_view');

MenuButtonView = Backbone.View.extend({
  tagName: 'div',

  className: 'menu_button',

  events: {
    "click"  : "open"
  },

  initialize: function(options) {
    this.display = options.display;
    this.nav = options.nav;
  },

  render: function() {
    $(this.el).html(this.display);
    return this;
  },

  open: function() {
    Backbone.history.navigate(this.nav, true);
  }
});
