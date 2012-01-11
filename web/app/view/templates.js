dojo.provide('view.templates');

TPL_TOP_BAR = '<div id="title">title</div>';

TPL_BOTTOM_NAV = '<div id="nav_game"><div class="shield"></div>Game</div>' + 
                 '<div id="nav_friends"><div class="shield"></div>Friends</div>' +
                 '<div id="nav_science"><div class="shield"></div>Science</div>' +
                 '<div id="nav_settings"><div class="shield"></div>Settings</div>';

TPL_TEXT = '<div id="<%= id %>" class="text"><%= text %></div>';

TPL_GAME = '<div id="game_left">' +
             '<div class="desc">Dual <%= nback %> Back</div>' +
             '<div id="restart_button" class="h_blue_button">Restart</div>' +
             '<div id="audio_button" class="v_button">A</div>' +
           '</div>' +
           '<div id="game_board"><%= board %></div>' + 
           '<div id="game_right">' +
             '<div class="desc">' +
                '<div> Daily Session <%= sessionNum %>/20</div>' +
                '<div> <%= stepsRemaining %> remaining</div>' +
             '</div>' +
             '<div id="exit_button" class="h_blue_button">Exit</div>' +
             '<div id="square_button" class="v_button">S</div>' +
           '</div>' +
           '<audio id="game_audio"></audio>';

TPL_GAME_CONTINUE =
             '<div class="box">' +
               '<div class="info_title">Congratulations</div>' +

               '<div class="info"><span>Result:   Audio </span><span class="text_hl"><%= totCorrectAudio %><span class="text">/</span><%= totAudio%></span><span> Position </span><span class="text_hl"><%= totCorrectSquare %><span class="text">/</span><%= totSquare%></span></div>' +
               '<div class="info">Score: <span class="text_hl"> <%= score %>.</div>' +
               '<div class="info"><%= nbackChange %></div>' +
               '<div class="button">' +
                 '<div id="modal_new_game" class="h_s_button">New</div>' +
                 '<div id="modal_cancel" class="h_s_button">Cancel</div>' +
               '</div>' +
             '</div>' +
             '<div class="shield"><div>';


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

TPL_TUTORIAL =
  '<div class = "text"> Dual n back is a classical brain training game. One session contains a certain number of steps. In each step, you are exposed to an audio signal (a letter), and a spacial signal (the position of a square on a 3 by 3 grid), and you need to specify if the audio signal and spacial signal are the same as those n steps back.</div>' +
  '<div class = "text"> Following shows a dual 1 back game.</div>' + 
  '<img id="tutorial_one_back" src="./images/tutorial.png"></img>';

TPL_SETTINGS = '<div id="setting_nback">' +
                 '<div class="setting_text">Start # of n Back</div>' +
                 '<div class="setting_op">' +
                   '<span class="left"></span>' +
                   '<span id="setting_nback_num" class="num"></span>' +
                   '<span class="right"></span>' +
                 '</div>' +
               '</div>' +
               '<div id="setting_speed">' +
                 '<div class="setting_text">Speed</div>' +
                 '<div class="setting_op">' +
                   '<span class="left highlight">1x</span>' +
                   '<span class="right">2x</span>' +
                 '</div>' +
               '</div>';
