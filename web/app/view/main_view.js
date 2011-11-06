dojo.require('view.top_bar_view');
dojo.require('view.bottom_nav_view');

dojo.provide('view.main_view');

MainView = Backbone.View.extend({
  el: '#main',

  initialize: function(options) {
    this.model.bind('change', this.update, this);
    this.contentViews = options.contentViews;
  },

  render: function() {
    var html;

    var topBarView = new TopBarView({
      model: this.model
    });

    var bottomNavView = new BottomNavView({
      model: this.model
    });

    $('#main').append(topBarView.render().el);

    var content = $('<div id="content"></div>');
    _.forEach(this.contentViews, function(view) {
      content.append(view.el);
    });

    $('#main').append(content);
    $('#main').append(bottomNavView.render().el);

    return this;
  },

  update: function() {
    // Update the content view
    if (this.model) {
      for (var i = 0; i < this.contentViews.length ; i ++) {
        var view = this.contentViews[i];
        if (view.id === this.model.get('id')) {
          $(view.el).show();
        } else {
          $(view.el).hide();
        }
      }
    }
  }
});
