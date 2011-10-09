$(function() {
  // Routes
  window.DnbRouter = Backbone.Router.extend({
    routes: {
      ""             :        "menu",
      "game"         :        "game",
      "history"      :        "history",
      "friends"      :        "friends",
      "tutorial"     :        "tutorial"
    },

    initialize: function(options) {
      this.app = options.app;
    },

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
    }
  });

  // Models
  window.MenuModel = Backbone.Model.extend({
    defaults: {
      items: [
        {
          display: 'New Game',
          nav: 'game'
        },
        {
          display: 'History',
          nav: 'history'
        },
        {
          display: 'Friends',
          nav: 'friends'
        },
        {
          display: 'Tutorial',
          nav: 'tutorial'
        }
      ]
    }
  });

  window.menuModel = new MenuModel();

  // Views
  window.GameView = Backbone.View.extend({
    el: '#game'
  });

  window.HistoryView = Backbone.View.extend({
    el: '#history'
  });

  window.FriendsView = Backbone.View.extend({
    el: '#friends'
  });

  window.TutorialView = Backbone.View.extend({
    el: '#tutorial'
  });

  window.MenuButtonView = Backbone.View.extend({
    tagName: 'div',

    className: 'menu_button',

    events: {
      "click"  : "open"
    },

    initialize: function(options) {
      this.display = options.display;
      this.nav = options.nav;
    },

    render: function() {
      $(this.el).html(this.display);
      return this;
    },

    open: function() {
      Backbone.history.navigate(this.nav, true);
    }
  });

  window.MenuView = Backbone.View.extend({
    el: '#menu',

    render: function() {
      var items = this.model.get('items');
      for (var i = 0; i < items.length; i++) {
        var button = new MenuButtonView({display: items[i].display, nav: items[i].nav});
        $('#menu_panel').append(button.render().el);
      }
      return this;
    }
  });

  window.DnbApp = {
    init: function() {
      // Init the viewsS
      this.views = [];
      this.menuView = new MenuView({
        model: menuModel
      });
      this.gameView = new GameView();
      this.tutorialView = new TutorialView();
      this.historyView = new HistoryView();
      this.friendsView = new FriendsView();

      this.menuView.render();

      // Init the Routes
      var dnbRouter = new DnbRouter({app: this});
      Backbone.history.start();
    },

    showMenu: function() {
      this._hideAll();
      this._showOne(this.menuView);
    },

    showGame: function() {
      this._hideAll();
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

  DnbApp.init();
});
