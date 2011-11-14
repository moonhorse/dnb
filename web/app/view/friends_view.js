dojo.require('view.templates');
dojo.provide('view.friends_view');
  
FriendsView = Backbone.View.extend({
  id: 'friends',

  template: _.template(TPL_FRIENDS),

  render: function() {
    $(this.el).html(this.template({
      rank: '0',
      leaderboard: 'leaderboard'
    }));

    return this;
  }
});

