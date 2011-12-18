dojo.provide('view.game_continue_view');
dojo.require('model.game_model');
dojo.require('view.templates');

GameContinueView = Backbone.View.extend({
  id: 'game_continue',
  tagName: 'div',

  template: _.template(TPL_GAME_CONTINUE),

  events: {
    "click #modal_new_game" : "_onNewGame",
    "click #modal_cancel" : "_onExit"
  },

  render: function() {
    var html;

    var result = this.model.get('result');
    var change = this.model.get('change');
    var newNback = this.model.get('nback') + change;

    var nbackChange = null;

    if (change > 0) {
      nbackChange = "We have changed the current n level to " + newNback + " because your correct rate is over 80%. Great job!";
    } else if (change < 0) {
      nbackChange = "We have changed the current n level to " + newNback + " because your correct rate is less than 50%. Let's pratctice!";
    }

    html = this.template({
      score: this.model.get('score'),
      totAudio: result.totAudio,
      totCorrectAudio: result.totCorrectAudio,
      totSquare: result.totSquare,
      totCorrectSquare: result.totCorrectSquare,
      nbackChange: nbackChange
    });

    $(this.el).html(html);

    return this;
  },

  _onNewGame: function() {
    this.model.newGame();
    this.model.next();
  },

  _onExit: function() {
    Backbone.history.navigate('', true);
  }
});
