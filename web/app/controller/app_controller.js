dojo.provide('controller.app_controller');

dojo.require('model.menu_model');
dojo.require('model.game_model');
dojo.require('controller.router');
dojo.require('view.tutorial_view');
dojo.require('view.friends_view');
dojo.require('view.history_view');
dojo.require('view.game_view');
dojo.require('view.menu_view');

DnbApp = {
  init: function() {
    // Init the viewsS
    this.menuModel = new MenuModel();
    this.menuView = new MenuView({
      model: this.menuModel
    });

    this.gameModel = new GameModel();
    this.gameView = new GameView({
      model: this.gameModel
    });

    this.tutorialView = new TutorialView();
    this.historyView = new HistoryView();
    this.friendsView = new FriendsView();

    // Init the Routes
    var dnbRouter = new DnbRouter({app: this});
    Backbone.history.start();
  },

  showMenu: function() {
    this._hideAll();
    this.menuView.render();
    this._showOne(this.menuView);
  },

  showGame: function() {
    this._hideAll();
    this.gameModel.newGame();
    this.gameView.render();

    this.gameModel.next();
    this._showOne(this.gameView);
  },

  showHistory: function() {
    this._hideAll();
    this._showOne(this.historyView);
  },

  showTutorial: function() {
    this._hideAll();
    this._showOne(this.tutorialView);
  },

  showFriends: function() {
    this._hideAll();
    this._showOne(this.friendsView);
  },

  _hideAll: function() {
    this._hideOne(this.menuView);
    this._hideOne(this.gameView);
    this._hideOne(this.tutorialView);
    this._hideOne(this.historyView);
    this._hideOne(this.friendsView);
  },

  _hideOne: function(view) {
    $(view.el).hide();
  },

  _showOne: function(view) {
    $(view.el).show();
  }
};
