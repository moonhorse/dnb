dojo.provide('view.history_view');

HistoryView = Backbone.View.extend({
  id: 'history',
  tagName: 'div',

  template: _.template(TPL_HISTORY),

  render: function() {
    var html;
    html = this.template();
    $(this.el).html(html);

    var _this = this;
    setTimeout(function() {
      $.jqplot('history_chart', _this.model.get('data')); }, 100);
    return this;
  },

  refresh: function() {
  }
});
