dojo.provide('controller.router');

DnbRouter = Backbone.Router.extend({
  routes: {

    ""             :        "game"
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
    this.app.showGame();
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
