dojo.provide('model.history_model');

HistoryModel = Backbone.Collection.extend({
  url: '/server/api/game/'
});
