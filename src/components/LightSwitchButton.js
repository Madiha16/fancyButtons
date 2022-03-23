import React, { useState } from "react";
// Since we don't HAVE to import React explicitly, we can also just type this:
// import { useState } from "react";

function LightSwitchButton(){
  const [light, setLight] = useState("off");
  // Mine
  // const handleClick = () => {
  //   if (light === "off") {
  //     setLight("on");
  //   } else {
  //     setLight("off" );
  //   }
  // }
  const handleClick = () => setLight(light === "on" ? "off" : "on");


  return(
    <button onClick={handleClick} className="LightSwitchButton">
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
};

export default LightSwitchButton;