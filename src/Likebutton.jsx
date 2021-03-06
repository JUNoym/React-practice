import React, { useState, useEffect } from "react";

const Likebutton = () => {
  const [count, counter] = useState(0);

  const countUp = () => {
    counter(count + 1);
  };

  useEffect(() => {
    document.getElementById("counter").addEventListener("click", countUp);

    return () => {
      document.getElementById("counter").removeEventListener("click", countUp);
    };
  });

  return <button id="counter">いいね数: {count}</button>;
};

export default Likebutton;
