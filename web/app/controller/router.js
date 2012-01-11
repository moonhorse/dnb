dojo.provide('controller.router');

DnbRouter = Backbone.Router.extend({
  routes: {

    ""             :        "game",
    "newGame"      :        "game_NewGame",
    "history"      :        "game_History",
    "friends"      :        "friends",
    "settings"     :        "settings",
    "tutorial"     :        "game_Tutorial"
   
/*
    ""             :        "menu",
    "game"         :        "game",
    "history"      :        "history",
    "friends"      :        "friends",
    "tutorial"     :        "tutorial"*/
  },

  initialize: function(options) {
    this.app = options.app;
  },

  game: function() {
    this.app.showGame('menu');
  },

  game_NewGame: function() {
    this.app.showGame('game');
  },

  game_History: function() {
    this.app.showGame('history');
  },

  game_Tutorial: function() {
    this.app.showGame('tutorial');
  },

  friends: function() {
    this.app.showFriends();
  },

  settings: function() {
    this.app.showSettings();
  }

/*
  menu: function() {
    this.app.showMenu();
  },

  game: function() {
    this.app.showGame();
  },

  history: function() {
    this.app.showHistory();
  },

  friends: function() {
    this.app.showFriends();
  },

  tutorial: function() {
    this.app.showTutorial();
  }*/
});
