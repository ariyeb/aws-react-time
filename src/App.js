import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const getTime = () => {
    const now = new Date();
    const houers = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${houers}:${minutes}:${seconds}`;
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div>
      <h1>Time</h1>
      <h2>{ time }</h2>
    </div>
  );
}

export default App;
