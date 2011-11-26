dojo.provide('model.leaderboard_model');

LeaderboardModel = Backbone.Model.extend({
  defaults: {
    rank: 0,

    data: [
      {
        name: "Jun Andrew Hu",
        thumbnail: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/41673_630389531_7134_n.jpg",
        score: 2100
      },
      {
        name: "Linjuan Men",
        thumbnail: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc4/275839_545323646_2410826_n.jpg",
        score: 1900
      },
      {
        name: "Jinai A",
        thumbnail: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc4/273517_629963627_1503677791_n.jpg",
        score: 1800
      }
    ]
  }
});
