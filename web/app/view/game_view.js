dojo.provide('view.game_view');
dojo.require('model.game_model');

GameView = Backbone.View.extend({
  el: '#game',
  tagName: 'div',

  template: _.template('<div><%= board %><div><div class="game_button"><div class="audio_button">A</div><div class="buffer"></div><div class="square_button">S</div></div>'),

  events: {
    "click .audio_button"  : "_onAudio",
    "click .square_button"  : "_onSquare"
  },

  initialize: function() {
    this.model.bind('change', this.render, this);
  },

  render: function() {
    var html;

    if (this.model.get('finished')) {
      html = "You have just finished a game! " + dojo.toJson(this.model.get('history'));
    } else {
      var board = "";
      var current = this.model.get('current');
      for (var i = 0; i < SQUARE_ROW_NUMBER; i ++) {
        board += "<div class = 'game_row'> ";
        for (var j = 0; j < SQUARE_COL_NUMBER; j ++) {
          var className = 'game_col';
          if (current.square && current.square.row === i && current.square.col === j) {
            className += ' highlight';
          }

          board += "<div class = '" + className + "'></div>";
        }
        board += "</div>";
      }

      html = this.template({board : board});
    }

    $(this.el).html(html);
    return this;
  },

  _onAudio: function() {
    this.model.press('audio');
  },

  _onSquare: function() {
    this.model.press('square');
  }
});
