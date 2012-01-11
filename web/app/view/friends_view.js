dojo.provide('view.friends_view');
dojo.require('view.templates');
dojo.require('model.leaderboard_model');
  
FriendsView = Backbone.View.extend({
  id: 'friends',

  template: _.template(TPL_FRIENDS),

  rowTemplate: _.template(TPL_LEADERBOARD_ROW),

  events: {
    "click #invite_button"  : "_onInvite"
  },

  render: function() {
    $(this.el).html(this.template());

    var _this = this;

    setTimeout(function() {
      _this.update();
    }, 1000);

    return this;
  },

  update: function() {
    var data = this.model.get('data');

    var leaderBoard = '';

    for (var i = 0; i < data.length; i++) {
      leaderBoard += this.rowTemplate({
        name: data[i].name,
        thumbnail: data[i].thumbnail,
        score: data[i].score
      });
    }

    $('#leader_board').html(leaderBoard);
    $('#rank').html(this.model.get('rank'));
  },

  _onInvite: function() {
    FB.ui({
      method: 'apprequests',
      message: 'invite you to play Dual N Back to scientifically improve your IQ!'
    }, 
    function(response) {
      console.log('sendRequest response: ', response);
    });
  }
});

