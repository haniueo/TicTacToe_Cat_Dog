(function game() {

    // Elements

    var game = document.getElementById('game');

    var boxes = document.querySelectorAll('li');

    var resetGame = document.getElementById('reset-game');

    var turnDisplay = document.getElementById('whos-turn');

    var gameMessages = document.getElementById('game-messages');

    var playerCatScoreCard = document.getElementById('player-one-score');

    var playerDogScoreCard = document.getElementById('player-two-score');

    

    // Vars

    var context = { 'player1' : '🐱', 'player2' : '🐶' };

    var board = [];

    

    var playerCatScore = 0;

    var playerDogScore = 0;

    

    var turns;

    var current_Context;

    

    

    var init = function() {

        turns = 0;

        

        

        current_Context = compute_Context();

        

    

        board[0] = new Array(3);

        board[1] = new Array(3);

        board[2] = new Array(3);

        

    

        for(var i = 0; i < boxes.length; i++) {

            boxes[i].addEventListener('click', clickHandler, false);

        }

        

        resetGame.addEventListener('click', resetGameHandler, false);

    }

    

    

    var compute_Context = function() {

        return (turns % 2 == 0) ? context.player1 : context.player2;

    }

    

    

    var clickHandler = function() {

        this.removeEventListener('click', clickHandler);

        

        this.className = current_Context;

        this.innerHTML = current_Context;

        

        var pos = this.getAttribute('data-pos').split(',');

        board[pos[0]][pos[1]] = compute_Context() == '🐱' ? 1 : 0;

        

        if(checkStatus()) {

            gameWon();

        }

        

        turns++;

        current_Context = compute_Context();

        turnDisplay.className = current_Context;

    }

    

    

    

    var checkStatus = function() {

        var kotak_terpakai = 0;

        

        for(var baris = 0; baris < board.length; baris++ ) {

            var tot_baris = 0;

            var tot_kolom = 0;

            

            for(var kolom = 0; kolom < board[baris].length; kolom++) {

                tot_baris += board[baris][kolom];

                tot_kolom += board[kolom][baris];

                

                if(typeof board[baris][kolom] !== "undefined") {

                    kotak_terpakai++;

                }

            }

            

            

            var diagonal_tl_br = board[0][0] + board[1][1] + board[2][2]; // diagonal top left to bottom right

            var diagonal_tr_bl = board[0][2] + board[1][1] + board[2][0]; // diagonal top right bottom left

            

            if(diagonal_tl_br == 0 || diagonal_tr_bl == 0 || diagonal_tl_br == 3 || diagonal_tr_bl == 3) {

                return true;

            }

            

           

            if(tot_baris == 0 || tot_kolom == 0 || tot_baris == 3 || tot_kolom == 3) {

                return true;

            }

            

            

            if(kotak_terpakai == 9) {

                gameDraw();

            }

        }

    }

    var gameWon = function() {

        clearEvents();

        

        

        gameMessages.className = 'player-' + compute_Context() + '-win';

        

        //Skor Player

        switch(compute_Context()) {

            case '🐱':

                playerCatScoreCard.innerHTML = ++playerCatScore;

                break;

            case '🐶':

                playerDogScoreCard.innerHTML = ++playerDogScore;

        }

    }

    

    

    

    

    var clearEvents = function() {

        for(var i = 0; i < boxes.length; i++) {

            boxes[i].removeEventListener('click', clickHandler);

        }

    }

    // Reset game 

    var resetGameHandler = function() {

        clearEvents();

        init();

        

        

        for(var i = 0; i < boxes.length; i++) {

            boxes[i].className = '';

            boxes[i].innerHTML = '';

        }

        

        

        turnDisplay.className = current_Context;

        gameMessages.className = '';

    }

    

    game && init();

})();
