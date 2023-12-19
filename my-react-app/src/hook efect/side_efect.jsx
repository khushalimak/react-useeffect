import React from "react";

const Side_Effect = ({name}) => {
    const message = `Hello, ${name}!`; // Calculates output

    // Bad!
    document.title = `Greetings to ${name}`; // Side-effect!
  
    return <div className="text-center pt-60">{message}</div>; 
}

export default Side_Effect