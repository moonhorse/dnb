dojo.provide('model.game_model');
dojo.require('model.session');

var AUDIO_NUMBER = 5;
var SQUARE_ROW_NUMBER = 3;
var SQUARE_COL_NUMBER = 3;

var AUDIO_MAP = {
  0: 'l',
  1: 'k',
  2: 'c',
  3: 't',
  4: 'r' 
};

GameModel = Backbone.Model.extend({
  defaults: {
    // Current step
    step: 0,
    // Total number of stesp
    totStep: 1,
    // The current nback
    nback: 2,
    // Not used now, specify if there is only one signal
    type: { audio: true, square: true},
    // All the player history
    history: {},
    // All the computer generated steps
    record: [],
    // The current computer generated step
    current: {},
    // The current result of the game
    result: {},
    // The score coming from the result
    score: 0,
    // If this game has finished
    finished: false
  },

  urlRoot: '/server/api/game/',

  newGame: function() {
    var model = this.defaults;

    // Make sure the objects are new
    model.history = {};
    model.record = [];
    model.current = {};
    model.result = {};

    var nback = parseInt(localStorage.getItem('nback'), 10);
    // If nback is not set, set it to 2
    if (!nback) {
      nback = 2;
      localStorage.setItem('nback', 2);
    }

    model.nback = nback;
    model.sessionNum = Session.getSessionNum() + 1;

    this.set(model, {silent: true});
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

    // If already finished, make it slient here because
    // we do not want the step that is hitting the number
    // limit to be trigger a view update.
    //
    // Later, we will call finish. Thats when we actually
    // update the view with the lastest score and
    // everything.
    this.set({current : current, step : step}, {
      silent: finished
    });

    this.get('record').push(current);

    var _this = this;
    if (!finished) {
      setTimeout(function() {
        _this.next();
      }, 3000);
    } else {
      // Caculate the score
      this.caculateScore();
      Session.incSessionNum();

      this.set({finished: finished});
      this.save();
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
  },

  caculateScore: function() {
    var record = this.get('record');
    var nback = parseInt(this.get('nback'), 10);
    var totAudio = 0;
    var totCorrectAudio = 0;
    var totSquare = 0;
    var totCorrectSquare = 0;

    for (var i = nback; i < record.length; i++) {
      var j = i - nback;
      if (record[i].audio === record[j].audio) {
        totAudio ++;
        if (history[i] && history[i].audio) {
          totCorrectAudio ++;
        }
      } else if (history[i] && history[i].audio) {
        totAudio ++;
      }

      if (record[i].square.col === record[j].square.col && record[i].square.row === record[j].square.row) {
        totSquare ++;
        if (history[i] && history[i].square) {
          totCorrectSquare ++;
        }
      } else if (history[i] && history[i].square) {
        totSquare ++;
      }
    }

    var result = {
      totAudio: totAudio,
      totCorrectAudio: totCorrectAudio,
      totSquare: totSquare,
      totCorrectSquare: totCorrectSquare
    };

    var score;
    if (totAudio + totSquare === 0) {
      score = nback;
    } else {
      score = nback + (totCorrectAudio + totCorrectSquare) / (totAudio + totSquare);
    }

    var change = 0;

    // Dynamically adapt the nback number
    if (score > 0.8 + nback) {
      localStorage.setItem('nback', nback + 1);
      change = 1;
    }

    if (score < 0.5 + nback && nback > 1) {
      localStorage.setItem('nback', nback - 1);
      change = -1;
    }

    this.set({score : score, result : result, change : change}, {silent: true});
  }
});
