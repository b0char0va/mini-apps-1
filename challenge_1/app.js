window.onload= function() {
    // init();
    // doSomethingElse();
    var matrix = [[-1,-1,-1], [-1,-1,-1], [-1,-1,-1]];
    var counter = 1;

    var resetButton = document.getElementById("reset");
    var cells = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6", "cell7", "cell8", "cell9"];
    resetButton.addEventListener("click", function () {
        for(var i = 0; i < cells.length-1; i++){
            var el = document.getElementById(cells[i]);
            el.innerHTML = 1;
        }
    });

    var cellOne = document.getElementById("cell1");
    cellOne.addEventListener("click", function() {
        if(counter % 2 === 0 && cellOne.innerHTML !== "X" ){
            cellOne.innerHTML = "O";
            matrix[0][0] = 1;
        }else if (counter % 2 !== 0 && cellOne.innerHTML !== "O" ) {
            cellOne.innerHTML = "X";
            matrix[0][0] = 0;
        }
        counter++;
        checkLeftDiagonalWin(matrix);
        checkRowWin(matrix);
        checkColWin(matrix);
    });

    var cellTwo = document.getElementById("cell2");
    cellTwo.addEventListener("click", function() {
        if(counter % 2 === 0 && cellTwo.innerHTML !== "X" ){
            cellTwo.innerHTML = "O";
            matrix[0][1] = 1;
        }else if (counter % 2 !== 0 && cellTwo.innerHTML !== "O" ) {
            cellTwo.innerHTML = "X";
            matrix[0][1] = 0;
        }
        counter++;
        checkRowWin(matrix);
        checkColWin(matrix);
    });

    var cellThree = document.getElementById("cell3");
    cellThree.addEventListener("click", function() {
        if(counter % 2 === 0 && cellThree.innerHTML !== "X" ){
            cellThree.innerHTML = "O";
            matrix[0][2] = 1;
        }else if (counter % 2 !== 0 && cellThree.innerHTML !== "O" ) {
            cellThree.innerHTML = "X";
            matrix[0][2] = 0;
        }
        counter++;
        checkRightDiagonalWin(matrix);
        checkRowWin(matrix);
        checkColWin(matrix);
    });

    var cellFour = document.getElementById("cell4");
    cellFour.addEventListener("click", function() {
        if(counter % 2 === 0 && cellFour.innerHTML !== "X" ){
            cellFour.innerHTML = "O";
            matrix[1][0] = 1;
        }else if (counter % 2 !== 0 && cellFour.innerHTML !== "O" ) {
            cellFour.innerHTML = "X";
            matrix[1][0] = 0;
        }
        counter++;
        checkRowWin(matrix);
        checkColWin(matrix);
    });


    var cellFive = document.getElementById("cell5");
    cellFive.addEventListener("click", function() {
        if(counter % 2 === 0 && cellFive.innerHTML !== "X" ){
            cellFive.innerHTML = "O";
            matrix[1][1] = 1;
        }else if (counter % 2 !== 0 && cellFive.innerHTML !== "O" ) {
            cellFive.innerHTML = "X";
            matrix[1][1] = 0;
        }
        counter++;
        checkLeftDiagonalWin(matrix);
        checkRightDiagonalWin(matrix);
        checkRowWin(matrix);
        checkColWin(matrix);
    });


    var cellSix = document.getElementById("cell6");
    cellSix.addEventListener("click", function() {
        if(counter % 2 === 0 && cellSix.innerHTML !== "X" ){
            cellSix.innerHTML = "O";
            matrix[1][2] = 1;
        }else if (counter % 2 !== 0 && cellSix.innerHTML !== "O" ) {
            cellSix.innerHTML = "X";
            matrix[1][2] = 0;
        }
        counter++;
        checkRowWin(matrix);
        checkColWin(matrix);
    });


    var cellSeven = document.getElementById("cell7");
    cellSeven.addEventListener("click", function() {
        if(counter % 2 === 0 && cellSeven.innerHTML !== "X" ){
            cellSeven.innerHTML = "O";
            matrix[2][0] = 1;
        }else if (counter % 2 !== 0 && cellSeven.innerHTML !== "O" ) {
            cellSeven.innerHTML = "X";
            matrix[2][0] = 0;
        }
        counter++;
        checkRightDiagonalWin(matrix);
        checkRowWin(matrix);
        checkColWin(matrix);
    });


    var cellEight = document.getElementById("cell8");
    cellEight.addEventListener("click", function() {
        if(counter % 2 === 0 && cellEight.innerHTML !== "X" ){
            cellEight.innerHTML = "O";
            matrix[2][1] = 1;
        }else if (counter % 2 !== 0 && cellEight.innerHTML !== "O" ) {
            cellEight.innerHTML = "X";
            matrix[2][1] = 0;
        }
        counter++;
        checkRowWin(matrix);
        checkColWin(matrix);
    });

    var cellNine = document.getElementById("cell9");
    cellNine.addEventListener("click", function() {
        if(counter % 2 === 0 && cellNine.innerHTML !== "X" ){
            cellNine.innerHTML = "O";
            matrix[2][2] = 1;
        }else if (counter % 2 !== 0 && cellNine.innerHTML !== "O" ) {
            cellNine.innerHTML = "X";
            matrix[2][2] = 0;
        }
        counter++;
        checkLeftDiagonalWin(matrix);
        checkRowWin(matrix);
        checkColWin(matrix);
    });
};

var win = 0;

var checkLeftDiagonalWin = function(matrix){
    if(matrix[0][0] === 0 && matrix [1][1] === 0 && matrix[2][2]=== 0 && win === 0){
        win = 1;
        alert("Player X won!");
    } else if(matrix[0][0] === 1 && matrix [1][1] === 1 && matrix[2][2]=== 1 && win === 0){
        win = 1;
        alert("Player O won!");
    }
};

var checkRightDiagonalWin = function(matrix){
    if(matrix[0][2] === 0 && matrix [1][1] === 0 && matrix[2][0]=== 0 && win === 0){
        win = 1;
        alert("Player X won!");
    } else if(matrix[0][2] === 1 && matrix [1][1] === 1 && matrix[2][0]=== 1 && win === 0){
        win = 1;
        alert("Player O won!");
    }
};


var checkRowWin = function(matrix){
    var Xcount = 0;
    var Ocount = 0;
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix.length; j++){
            if(matrix[i][j] === 0){
                Xcount++;
            }else if(matrix[i][j] === 1){
                Ocount++;
            }
        }
        if(Xcount === 3 && win === 0){
            win = 1;
            alert("player X won!!");
            break;
        }else if(Ocount === 3 && win === 0){
            win = 1;
            alert("player O won!!");
            break;
        }
        Xcount = 0;
        Ocount = 0;
    }
};

var checkColWin = function(matrix){
    var Xcount = 0;
    var Ocount = 0;
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix.length; j++){
            if(matrix[j][i] === 0){
                Xcount++;
            }else if(matrix[j][i] === 1){
                Ocount++;
            }
            console.log(Xcount+ "and O"+ Ocount);
        }
        if(Xcount === 3 && win === 0){
            win = 1;
            alert("player X won!!");
            return;
        }else if(Ocount === 3 && win === 0){
            win = 1;
            alert("player O won!!");
            return;
        }
        Xcount = 0;
        Ocount = 0;
    }
};

