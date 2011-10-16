dojo.provide('model.game_model');

var AUDIO_NUMBER = 5;
var SQUARE_ROW_NUMBER = 3;
var SQUARE_COL_NUMBER = 3;

GameModel = Backbone.Model.extend({
  defaults: {
    step: 0,
    totStep: 3,
    nBack: 2,
    type: { audio: true, square: true},
    history: {},
    current: {},
    finished: false
  },

  newGame: function() {
    this.set(this.defaults, {silent: true});
  },

  next: function() {
    var current = {};
    if (this.get('type').audio) {
      current.audio = Math.floor(Math.random() * AUDIO_NUMBER);
    }

    if (this.get('type').square) {
      current.square = {};
      current.square.row = Math.floor(Math.random() * SQUARE_ROW_NUMBER);
      current.square.col = Math.floor(Math.random() * SQUARE_COL_NUMBER);
    }

    var step = this.get('step') + 1;
    var finished = step > this.get('totStep'); 

    this.set({current : current, step : step, finished:finished});

    var _this = this;
    if (!finished) {
      setTimeout(function() {
        _this.next();
      }, 5000);
    }
  },

  press: function(type) {
    var history = this.get('history');
    var step = this.get('step');
    if (history[step] === undefined) {
      history[step] = {};
    }

    history[step][type] = true;
    this.set({history: history}, {silent: true});
  }
});
