dojo.provide('view.game_view');

GameView = Backbone.View.extend({
  el: '#game',
  tagName: 'div',

  template: _.template('game'),

  render: function() {
    $(this.el).html(this.template());
    return this;
  }
});
