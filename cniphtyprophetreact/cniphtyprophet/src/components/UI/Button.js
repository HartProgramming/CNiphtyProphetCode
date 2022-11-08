import React from "react";

function Button(props){

    return(
        <>
         <button onClick={props.onClick} className={props.style}>{props.title}</button>
        </>
    )
}
 
export default Button;