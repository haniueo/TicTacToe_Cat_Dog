<?php
    <head>
        <title>TIC TAC TOE</title>
        
        <link rel="stylesheet" type="text/css" href="style.css" charset=utf-8>    
        
    </head>
    
    <body>
        
        <div class="container">
            <h1> (づ｡◕‿‿◕｡)づ <br/> 𝐓𝐢𝐜 - 𝐓𝐚𝐜 - 𝐓𝐨𝐞  </h1>
            <ul id="game">
                <!-- first row -->
                <li data-pos="0,0"></li>
                <li data-pos="0,1"></li>
                <li data-pos="0,2"></li>
                <!-- second row -->
                <li data-pos="1,0"></li>
                <li data-pos="1,1"></li>
                <li data-pos="1,2"></li>
                <!-- third row -->
                <li data-pos="2,0"></li>
                <li data-pos="2,1"></li> 
                <li data-pos="2,2"></li>
            </ul>
            
            <button id="reset-game"> ❤ Reset Game ❤</button>
            
                 <div id="game-messages">
                <span class="player-x-win"></span>
                <span class="player-o-win"></span>
                <span class="draw"></span>
                <span class=""> <br/> Klik Reset Game Jika Score Bertambah 😂 </span>
            </div>
            
            <aside id="nfo">
                <h2> 𝑴𝒖𝒍𝒕𝒊 𝑷𝒍𝒂𝒚𝒆𝒓 𝑮𝒂𝒎𝒆𝒔 </h2>
                <div id="whos-turn" class="🐱">
                    <span class="🐱">Player 1 ⭬  🐱</span>
                    <span class="🐶">Player 2 ⭬  🐶</span>
                </div>
                
                <h2>𝑺𝒄𝒐𝒓𝒆 𝑩𝒐𝒂𝒓𝒅</h2>
                <div id="score">
                    Player 🐱: <span id="player-one-score">0</span> <br />
                    Player 🐶: <span id="player-two-score">0</span> <br />
                </div>
            </aside>
        </div>
        <script src="http://code.jquery.com/jquery-1.5.1.js" type="text/javascript" charset="utf-8"></script>
        <script src="bismillah123.js" type="text/javascript" charset="utf-8"></script>
        <script src="https://static.line-scdn.net/liff/edge/2.1/sdk.js"></script>
    </body>
    
?>
