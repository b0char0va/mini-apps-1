import React from "react";
import Row from './row.jsx';

var Board = (props) => {
      var i = 0;
      var row = [];
        while(i<6) {
            row.push(<Row clickHandle = {props.onClick} id={i}/>);
            i++;
        }
    return (
        <table id="table">
            <tbody>
            {row}
            </tbody>
        </table>
    );
};

export default Board;