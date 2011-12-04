dojo.provide('view.settings_view');

SettingsView = Backbone.View.extend({
  id: 'settings',
  tagName: 'div',

  events: {
    "click #setting_speed .setting_op .left"  : "_onOneX",
    "click #setting_speed .setting_op .right"  : "_onTwoX",
    "click #setting_nback .setting_op .left"  : "_onMinusNback",
    "click #setting_nback .setting_op .right"  : "_onPlusNback"
  },

  template: _.template(TPL_SETTINGS),

  render: function() {
    var html;
    html = this.template();
    $(this.el).html(html);

    // TODO: Fix the bug that the first time it launches, it does not work because the DOM has not been created yet.
    if (localStorage.getItem('speed')) {
      this._updateSpeed(localStorage.getItem('speed'));
    } else {
      this._updateSpeed('one');
    }

    if (localStorage.getItem('nback')) {
      this._updateNback(localStorage.getItem('nback'));
    } else {
      this._updateNback(1);
    }

    return this;
  },

  _onOneX: function() {
    this._updateSpeed('one');
  },

  _onTwoX: function() {
    this._updateSpeed('two');
  },

  _updateSpeed: function(speed) {
    localStorage.setItem('speed', speed);

    switch (speed) { 
      case 'one':
        $("#setting_speed .setting_op .left").addClass('highlight');
        $("#setting_speed .setting_op .right").removeClass('highlight');
        break;
      case 'two':
        $("#setting_speed .setting_op .left").removeClass('highlight');
        $("#setting_speed .setting_op .right").addClass('highlight');
        break;
    }
  },

  _onMinusNback: function() {
    var num = parseInt(localStorage.getItem("nback"), 10);
    if (num - 1 >= 1) {
      this._updateNback(num - 1);
    }
  },
 
  _onPlusNback: function() {
    var num = parseInt(localStorage.getItem("nback"), 10);

    if (num + 1 <= 10) {
      this._updateNback(num + 1);
    }
  },

  _updateNback: function(num) {
    localStorage.setItem('nback', num);
    $("#setting_nback_num").html(num);
  }
});
