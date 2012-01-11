dojo.provide('view.tutorial_view');
dojo.require('view.templates');

TutorialView = Backbone.View.extend({
  id: 'tutorial',

  template: _.template(TPL_TUTORIAL),

  render: function() {
    $(this.el).html(this.template());
  }
});
