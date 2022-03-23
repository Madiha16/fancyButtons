import React, { useState } from "react";
// Since we don't HAVE to import React explicitly, we can also just type this:
// import { useState } from "react";

function CounterButton(){
  const [clickAmount, setclickAmount] = useState(0);

  const handleClick = () => setclickAmount(clickAmount + 1);

  return (
    <button onClick={handleClick} className="CounterButton">
      You clicked {clickAmount} X amount of times
    </button>
  );
};

export default CounterButton;