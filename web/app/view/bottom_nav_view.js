dojo.require('view.templates');
dojo.provide('view.bottom_nav_view');

BottomNavView = Backbone.View.extend({
  tagName: 'div',

  id: 'bottom_nav',

  events: {
    "click #nav_game" : "showGame",
    "click #nav_friends" : "showFriends",
    "click #nav_settings" : "showSettings"
  },

  template: _.template(TPL_BOTTOM_NAV),

  initialize: function() {
    this.model.bind('change', this.update, this);

    // Remember the previous id of hte highlighted button
    this.prevDomId = null;
  },

  render: function() {
    $(this.el).html(this.template());
    return this;
  },

  update: function() {
    if (this.prevDomId) {
      $(this.prevDomId).removeClass('highlight');
    }

    if (this.model) {
      var domId;
      switch (this.model.get('id')) {
        case 'menu':
        case 'game':
        case 'history':
          domId = '#nav_game';
          break;
        case 'friends':
        case 'settings':
        case 'science':
          domId = '#nav_' + this.model.get('id');
          break;
        default:
          domId = '#nav_game';
          break;
      }
      $(domId).addClass('highlight');
      this.prevDomId = domId;
    }
  },

  showGame: function() {
    Backbone.history.navigate("", true);
  },

  showFriends: function() {
    Backbone.history.navigate("friends", true);
  },

  showSettings: function() {
    Backbone.history.navigate("settings", true);
  }
});
