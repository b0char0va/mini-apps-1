import React from "react";
var Col = (props) => (
        <td onClick={props.clickHandler} data-x={props.key1} data-y={props.key2} id={props.colid}> </td>
);

export default Col;