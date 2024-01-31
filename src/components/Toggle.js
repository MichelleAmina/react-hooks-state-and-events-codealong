import React, { useState } from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false)

  function handleClick(){
    setIsOn((isOn) => !isOn);
  }
  //const color = isOn ? "green" : "red";

  return <button onClick={handleClick} style={{background: isOn ? "green" : "red"}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
