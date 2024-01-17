import React, { useEffect, useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  // let start = false;

  let [count1, setCount1] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      // setCount(count + 1);
      setCount(count1 ? count + 1 : count);
      // setCount1(count1 + 1);
      setCount1(count1 ? count1 + 1 : count1);
      console.log("hiii", count, count1);
    }, 1000);
  }, [count1]);

  return (
    <div className="pro2Body">
      <div className="container">
        <center className="counterBody">
          <div>
            <h1 className="counterTitle">Counter is : {count}</h1>

            <button
              onClick={() => {
                setCount(count1 == 0 ? count + 1 : count);
              }}
            >
              Increase Counter
            </button>
            <button
              onClick={() => {
                setCount(count > 0 ? (count1 == 0 ? count - 1 : count) : 0);
              }}
            >
              Decrease Counter
            </button>
            <button
              onClick={() => {
                setCount1(count1 == 0 ? count1 + 1 : (count1 = 0));
                // start = true;
              }}
            >
              Auto Start / Pause
            </button>
            <button
              onClick={() => {
                setCount1((count1 = 0));
                setCount((count = 0));
                // start = true;
              }}
            >
              Counter Reset / Stop
            </button>
          </div>
        </center>
      </div>
    </div>
  );
}
