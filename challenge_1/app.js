var statsObj = {                    //object to keep game scores
    gamesPlayed: 1,
    ties: 0,
    xWon: 0,
    oWon: 0,
    previousWinner: ""
};

$(document).ready(function () {
    var matrix = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];        //matrix to keep track of players' moves
    var counter = 1;
    var win = 0;
    var firstMoveSymbol = "X";
    var secondMoveSymbol = "O";
    var Val1 = 0;
    var Val2 = 1;
    var degree = 90;

    promptName.enterName();                     //prompt to ask player names

    $("#reset").click(function () {             //resets the game
        $("#table").removeClass("disable");
        $("td").empty();
        matrix = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
        counter = 1;
        degree = 90;
        if (statsObj.previousWinner === "O") {
            firstMoveSymbol = "O";
            Val1 = 1;
            secondMoveSymbol = "X";
            Val2 = 0;
        }else{
            firstMoveSymbol = "X";
            Val1 = 0;
            secondMoveSymbol = "O";
            Val2 = 1;
        }
        statsObj.gamesPlayed = statsObj.xWon + statsObj.oWon + statsObj.ties;
        $("#player1").text("Player X " + promptName.player1Name + " : " + statsObj.xWon);
        $("#player2").text("Player O " + promptName.player2Name + " : " + statsObj.oWon+ " | ");
        $("#total").text("Games Played: " + statsObj.gamesPlayed);
    });

    $("td").click(function (e) {                //inputs the symbol when player clicks on board cell
        var id = e.target.id;
        if (counter % 2 === 0 && matrix[id[0]][id[1]] === -1) {
            $(this).text(secondMoveSymbol);
            matrix[id[0]][id[1]] = Val2;
        } else if (counter % 2 !== 0 && matrix[id[0]][id[1]] === -1) {
            $(this).text(firstMoveSymbol);
            matrix[id[0]][id[1]] = Val1;
        }
        counter++;
        winMethods.checkRowWin(matrix, win);
        winMethods.checkColWin(matrix, win);
        winMethods.checkLeftDiagonalWin(matrix, win);
        winMethods.checkRightDiagonalWin(matrix, win);
        $("#table").css("transform", 'rotate(-'+degree+'deg)');
        if(degree < 360){
            degree = degree*2;
        }
    });
});

var winMethods = {                                      // object consisting of all methods to check if there are any wins or ties on the board
    checkLeftDiagonalWin: function (matrix, win) {
        if (matrix[0][0] === 0 && matrix [1][1] === 0 && matrix[2][2] === 0 && win === 0) {
            win = 1;
            statsObj.previousWinner = "X";
            statsObj.xWon++;
            $("#table").addClass("disable");
            alert("Player X won!");
        } else if (matrix[0][0] === 1 && matrix [1][1] === 1 && matrix[2][2] === 1 && win === 0) {
            win = 1;
            statsObj.previousWinner = "O";
            statsObj.oWon++;
            $("#table").addClass("disable");
            alert("Player O won!");
        }
    },

    checkRightDiagonalWin: function (matrix, win) {
        if (matrix[0][2] === 0 && matrix [1][1] === 0 && matrix[2][0] === 0 && win === 0) {
            win = 1;
            statsObj.previousWinner = "X";
            statsObj.xWon++;
            $("#table").addClass("disable");
            alert("Player X won!");
        } else if (matrix[0][2] === 1 && matrix [1][1] === 1 && matrix[2][0] === 1 && win === 0) {
            win = 1;
            statsObj.previousWinner = "O";
            statsObj.oWon++;
            $("#table").addClass("disable");
            alert("Player O won!");
        }
    },

    checkRowWin: function (matrix, win) {
        var Xcount = 0;
        var Ocount = 0;
        var placements = 0;
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix.length; j++) {
                if (matrix[i][j] === 0) {
                    Xcount++;
                    placements++;
                } else if (matrix[i][j] === 1) {
                    Ocount++;
                    placements++;
                }
            }
            if (Xcount === 3 && win === 0) {
                win = 1;
                statsObj.previousWinner = "X";
                statsObj.xWon++;
                $("#table").addClass("disable");
                alert("player X won!!");
                break;
            } else if (Ocount === 3 && win === 0) {
                win = 1;
                statsObj.previousWinner = "O";
                statsObj.oWon++;
                $("#table").addClass("disable");
                alert("player O won!!");
                break;
            } else if (placements === 9 && win === 0) {
                statsObj.ties++;
                $("#table").addClass("disable");
                alert("It's a tie");
            }
            Xcount = 0;
            Ocount = 0;
        }
    },

    checkColWin: function (matrix, win) {
        var Xcount = 0;
        var Ocount = 0;
        var placements = 0;
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix.length; j++) {
                if (matrix[j][i] === 0) {
                    Xcount++;
                    placements++;
                } else if (matrix[j][i] === 1) {
                    Ocount++;
                    placements++;
                }
            }
            if (Xcount === 3 && win === 0) {
                win = 1;
                statsObj.previousWinner = "X";
                statsObj.xWon++;
                $("#table").addClass("disable");
                alert("player X won!!");
                return;
            } else if (Ocount === 3 && win === 0) {
                win = 1;
                statsObj.previousWinner = "O";
                statsObj.oWon++;
                $("#table").addClass("disable");
                alert("player O won!!");
                return;
            }
            Xcount = 0;
            Ocount = 0;
        }
    }
};

var promptName = {                          // prompts to enter player names
    player1Name: "",
    player2Name: "",

    enterName: function () {
        do {
            player1Name = prompt("Player 1 : Please enter your name");
            player2Name = prompt("Player2 : Please enter your name");
        }
        while (player1Name.length < 4 || player2Name.length < 4);
        $('#player1').text("Player X " + player1Name + " = 0");
        $('#player2').text("Player O " + player2Name + " = 0");
    }
};

