dojo.provide('view.templates');

TPL_TOP_BAR = '<div id="title">title</div>';

TPL_BOTTOM_NAV = '<div id="nav_game"><div class="shield"></div>Game</div>' + 
                 '<div id="nav_friends"><div class="shield"></div>Friends</div>' +
                 '<div id="nav_science"><div class="shield"></div>Science</div>' +
                 '<div id="nav_settings"><div class="shield"></div>Settings</div>';

TPL_TEXT = '<div id="<%= id %>" class="text"><%= text %></div>';

TPL_GAME = '<div id="game_left">' +
             '<div id="restart_button" class="h_blue_button">Restart</div>' +
             '<div id="audio_button" class="v_button">A</div>' +
           '</div>' +
           '<div id="game_board"><%= board %></div>' + 
           '<div id="game_right">' +
             '<div id="exit_button" class="h_blue_button">Exit</div>' +
             '<div id="square_button" class="v_button">S</div>' +
           '</div>';

TPL_FRIENDS = '<div id="rank_desc" class="text">' +
                'Friends are working hard on their IQ! You rank <span id="rank"> </span> among your friends!' +
              '</div>' +
              '<div id="leader_board"> </div>' +
              '<div id="invite_button" class="h_button"> Invite </div>';

TPL_LEADERBOARD_ROW = '<div class="leader_row">' +
                        '<div class="thumbnail_container">' +
                           '<div class="thumbnail" style="background-image: url(\'<%= thumbnail %>\') "></div>' +
                           '<div class="name text_hl"><%= name %></div>' +
                        '</div>' +
                        '<div class="score"><%= score %></div>' +
                        '<div class="challenge h_s_button">Challenge</div>' +
                      '</div>';

TPL_HISTORY = '<div id="title" class="text">' +
                'Dnb Game Score' +
              '</div>' +
              '<div id="history_chart"> </div>' +
              '<div id="date_button">' +
                '<div class="left" > 2 weeks</div>' +
                '<div class="center" > 1 month</div>' +
                '<div class="right"> 3 months</div>' +
              '</div>';

