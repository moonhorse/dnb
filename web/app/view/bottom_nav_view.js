dojo.require('view.templates');
dojo.provide('view.bottom_nav_view');

BottomNavView = Backbone.View.extend({
  tagName: 'div',

  id: 'bottom_nav',

  template: _.template(TPL_BOTTOM_NAV),

  initialize: function() {
    this.model.bind('change', this.update, this);
  },

  render: function() {
    $(this.el).html(this.template());
    return this;
  },

  update: function() {
    if (this.model) {
    }
  }
});
