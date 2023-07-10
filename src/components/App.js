import React, { useState, useEffect } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>You've been on this page for {seconds} seconds.</p>
    </div>
  );
};

export default App;
