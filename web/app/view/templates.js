dojo.provide('view.templates');

TPL_TOP_BAR = '<div id="title">title</div>';

TPL_BOTTOM_NAV = '<div id="nav_game">Game</div><div id="nav_friends">Friends</div><div id="nav_science">Science</div><div id="nav_settings">Settings</div>';

TPL_TEXT = '<div id="<%= id %>" class="text"><%= text %></div>';

TPL_GAME = '<div id="game_left">'    +
             '<div id="restart_button" class="h_s_button">Restart</div>' +
             '<div id="audio_button" class="v_button">A</div>' +
           '</div>'                  +
           '<div id="game_board"><%= board %></div>'  + 
           '<div id="game_right">'   +
             '<div id="exit_button" class="h_s_button">Exit</div>' +
             '<div id="square_button" class="v_button">S</div>' +
           '</div>';
