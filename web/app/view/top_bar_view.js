dojo.require('view.templates');
dojo.require('model.nav_model');
dojo.provide('view.top_bar_view');

TopBarView = Backbone.View.extend({
  tagName: 'div',

  id: 'top_bar',

  template: _.template(TPL_TOP_BAR),

  initialize: function() {
    this.model.bind('change', this.update, this);
  },

  render: function() {
    $(this.el).html(this.template());
    return this;
  },

  update: function() {
    if (this.model) {
      $('#title').html(this.model.get('title'));
    }
  }
});
