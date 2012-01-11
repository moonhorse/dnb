dojo.provide('view.game_view');
dojo.require('model.game_model');
dojo.require('view.templates');
dojo.require('view.game_continue_view');

GameView = Backbone.View.extend({
  id: 'game',
  tagName: 'div',

  template: _.template(TPL_GAME),

  events: {
    "click #audio_button"  : "_onAudio",
    "click #square_button"  : "_onSquare",
    "click #restart_button"  : "_onRestart",
    "click #exit_button"  : "_onExit",
    "click #share_button" : "_onShare"
  },

  initialize: function() {
    this.model.bind('change', this.render, this);
  },

  render: function() {
    if (this.model.get('finished')) {
      var gameContinueView = new GameContinueView({
        model: this.model
      });

      $(this.el).append(gameContinueView.render().el);
    } else {
      var html;
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

      var stepsRemaining = this.model.get('totStep') - this.model.get('step');

      html = this.template({
        board : board,
        sessionNum: this.model.get('sessionNum'),
        nback: this.model.get('nback'),
        stepsRemaining: stepsRemaining
      });

      var letter = AUDIO_MAP[current.audio];

      setTimeout(function() {
        var audio = $('#game_audio')[0];
        audio.src = "http://www.elearnenglishlanguage.com/sounds/" + letter + ".wav";
        audio.play();
      }, 10);

      $(this.el).html(html);
    }

    return this;
  },

  _onAudio: function() {
    this.model.press('audio');
  },

  _onSquare: function() {
    this.model.press('square');
  },

  _onRestart: function() {
    // TODO: Restart not completely working.
    this.model.newGame();
    // this.model.next();
  },

  _onExit: function() {
    Backbone.history.navigate('', true);
  },

  _onShare: function() {
    FB.ui({
      method: 'feed',
      name: 'I am playing Dual N Back!'
    }, 
    function(response) {
      console.log('publishStory response: ', response);
    });
    }
});
