import React from "react";
import "../styles/Button.css"

function Button(){

    return (
        <div>
            <button className="ButtonDiv" onClick={() => console.log("Click!")}>Button Component</button>
        </div>
    ) 
    
}

export default Button;