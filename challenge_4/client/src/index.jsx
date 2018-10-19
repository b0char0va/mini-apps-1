import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board.jsx'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 1,
            matrix: [
                [-1, -1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1],
                [-1, -1, -1, -1, -1, -1, -1]
            ],
            p1win : 0,
            p2win : 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.hasHorizontalWins = this.hasHorizontalWins.bind(this);
        this.hasVerticalWins = this.hasVerticalWins.bind(this);
        this.hasLeftDiagonalWins = this.hasLeftDiagonalWins.bind(this);

    }

    handleClick(e) {
        if(this.state.p1win > 0 || this.state.p2win > 0){
            var table = document.getElementById('table');
            table.classList.add('disable');
            return;
        }
        var i = e.target.getAttribute('data-x');
        var j = e.target.getAttribute('data-y');
        var newMatrix = this.state.matrix;

       if(this.state.count % 2 === 0) {
           for(var k = 5; k >= 0; k--){
               if(newMatrix[k][j] === -1){
                   newMatrix[k][j] = 0;
                   var el = document.getElementById(k+""+j);
                   el.classList.add('disc1');
                   break;
               }
           }
       }else{
           for(var m = 5; m >= 0; m--){
               if(newMatrix[m][j] === -1){
                   newMatrix[m][j] = 1;
                   var cell = document.getElementById(m+""+j);
                   cell.classList.add('disc2');
                   break;
               }
           }
       }

        this.setState({
            count: this.state.count+1,
            matrix : newMatrix
        });

       if(!this.hasHorizontalWins()){
           if(!this.hasVerticalWins()){
               this.hasLeftDiagonalWins();
           }
       }
    }

   hasHorizontalWins(){
       var myMatrix = this.state.matrix;

       for(var a = 0; a < myMatrix.length; a++){
           for(var b = 0; b < 4; b++){

               if(myMatrix[a][b] === 1) {
                   var arr = myMatrix[a].slice(b, b+4);
                   if(this.hasHorizontalHelper(arr, 1)){
                       console.log("player 1 wins");
                       return true;
                   }
               } else if(myMatrix[a][b] === 0){
                   var arr = myMatrix[a].slice(b, b+4);
                   if(this.hasHorizontalHelper(arr, 0)){
                       console.log("player 2 wins");
                       return true;
                   }
                }
           }
       }
       return false;
   }

   hasHorizontalHelper(arr, symbol){
        console.log(arr);
        for(var a = 0; a < arr.length; a++){
            if(arr[a] !== symbol){
                return false;
            }
        }
        return true;
   }

    // hasVerticalWins(){
    //     var theMatrix = this.state.matrix;
    //
    //     for(var a = 0; a < theMatrix[a].length-1; a++){
    //         for(var b = 0; b < 3; b++) {
    //             var arr = [];
    //             arr.push(theMatrix[b][a]);
    //         }
    //                 if(this.hasHorizontalHelper(arr, 1)){
    //                     console.log("player 1 wins");
    //                     return true;
    //                 } else if(myMatrix[a][b] === 0){
    //                 var arr = myMatrix[a].slice(b, b+4);
    //                 if(this.hasHorizontalHelper(arr, 0)){
    //                     console.log("player 2 wins");
    //                     return true;
    //                 }
    //             }
    //     }
    //     return false;
    // }


    // hasLeftDiagonalWins(){
    //     var theMatrix = this.state.matrix;
    //
    //     for(var p = -4; p < theMatrix.length; p++){
    //         var player1DiscCount = 0;
    //         var player2DiscCount = 0;
    //         if(theMatrix[p]) {
    //             if (theMatrix[p][p] === 1) {
    //                 player1DiscCount++;
    //             } else if (theMatrix[p][p] === 0) {
    //                 player2DiscCount++;
    //             }
    //         }
    //         if(player1DiscCount >= 4){
    //             this.setState({
    //                 p1win : 1
    //             });
    //             console.log('player1 won!!');
    //             return true;
    //         } else if(player2DiscCount >= 4){
    //             this.setState({
    //                 p2win : 1
    //             });
    //             console.log('player2 won!!');
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // hasRightDiagonalWins(){
    //
    // }


    render() {
        return (
            <div>
                <Board onClick={this.handleClick}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));