dojo.provide('model.history_model');

HistoryModel = Backbone.Model.extend({
  defaults: {
    data: [
      [1, 2],
      [3, 5.12],
      [5, 6.12]
    ]
  }
});
