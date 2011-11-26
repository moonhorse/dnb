dojo.provide('controller.app_controller');
dojo.require('model.menu_model');
dojo.require('model.game_model');
dojo.require('model.nav_model');
dojo.require('model.history_model');
dojo.require('model.leaderboard_model');

dojo.require('controller.router');
dojo.require('view.tutorial_view');
dojo.require('view.friends_view');
dojo.require('view.history_view');
dojo.require('view.game_view');
dojo.require('view.menu_view');

dojo.require('view.main_view');
dojo.require('controller.router');

DnbApp = {
  init: function() {
    var views = this._initContentViews();
    this._initMainView(views);
    this._initRouter();

  },

  showGame: function(viewName) {
    var fullScreen = false;
    switch (viewName) {
      case 'game':
        // Restart
        this.gameModel.newGame();
        // this.gameModel.next();
        fullScreen = true;
        break;
      case 'history':
        fullScreen = true;
        break;
      default:
        break;
    }
    this.navModel.set({title: 'Dual N Back', id: viewName, fullScreen: fullScreen});
  },

  showFriends: function() {
    this.navModel.set({title: 'Friends', id: 'friends', fullScreen: false});
  },

  _initMainView: function(contentViews) {
    this.navModel = new NavModel();
    this.mainView = new MainView({
      model: this.navModel,
      contentViews: contentViews
    });

    this.mainView.render();
  },

  _initContentViews: function() {
    // Init the views.
    // Render them before they are used.
    this.menuModel = new MenuModel();
    this.menuView = new MenuView({
      model: this.menuModel
    });
    this.menuView.render();

    this.gameModel = new GameModel();
    this.gameView = new GameView({
      model: this.gameModel
    });
    this.gameView.render();

    this.tutorialView = new TutorialView();
    this.tutorialView.render();

    this.historyModel = new HistoryModel();
    this.historyView = new HistoryView({
      model: this.historyModel
    });

    this.historyView.render();

    this.leaderboardModel = new LeaderboardModel();
    this.friendsView = new FriendsView({
      model: this.leaderboardModel 
    });

    this.friendsView.render();

    return [this.menuView, this.gameView, this.tutorialView, this.historyView, this.friendsView];

  },

  _initRouter: function() {
    // Init the Routes
    var dnbRouter = new DnbRouter({app: this});
    Backbone.history.start();
  }

/*
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
  }*/
};
