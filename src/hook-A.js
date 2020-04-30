import React, { useState, useEffect } from "react";

function example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count 1 1)}> - </button>
    </div>
  );
}

export default example;
