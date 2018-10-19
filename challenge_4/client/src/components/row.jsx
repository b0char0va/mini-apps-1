import React from "react";
import Col from './col.jsx';

var Row = (props) => {
    var col = [];
    for(var i =0; i < 7; i++) {
        col.push(<Col clickHandler = {props.clickHandle} key1={props.id} key2={i} colid={props.id+""+i}/>);
    }
        return (

        <tr className="row">
            {col}
        </tr>
    );
};

export default Row;
