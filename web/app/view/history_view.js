dojo.provide('view.history_view');

HistoryView = Backbone.View.extend({
  id: 'history',
  tagName: 'div',

  template: _.template(TPL_HISTORY),

  initialize: function() {
    this.model.bind('all', this.update, this);
  },

  render: function() {
    var html;
    html = this.template();
    $(this.el).html(html);

    return this;
  },

  update: function() {
    var viewModel = [];
    for (var i = 0; i < this.model.length ; i ++) {
      viewModel.push([
        i, this.model.at(i).score || 100
      ]);
    }

    var viewModelContainer = [];
    viewModelContainer.push(viewModel);

    setTimeout(function() {
      $.jqplot('history_chart', viewModelContainer);
    }, 100);
  }
});
